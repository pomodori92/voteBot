const assert = require('node:assert/strict');
const test = require('node:test');

const {
	VOTE_BUTTON_SELECTOR,
	buildLaunchOptions,
	readConfiguration,
	runVoteBot,
	validateConfiguration
} = require('../voteBot/voteBot');

function createHarness({ gotoError } = {}) {
	const calls = [];
	const page = {
		async setViewport(viewport) {
			calls.push(['setViewport', viewport]);
		},
		async goto(url, options) {
			calls.push(['goto', url, options]);
			if (gotoError) {
				throw gotoError;
			}
		},
		async waitForSelector(selector) {
			calls.push(['waitForSelector', selector]);
		},
		async click(selector) {
			calls.push(['click', selector]);
		}
	};
	const browser = {
		async newPage() {
			calls.push(['newPage']);
			return page;
		},
		async close() {
			calls.push(['close']);
		}
	};
	const puppeteerModule = {
		async launch(options) {
			calls.push(['launch', options]);
			return browser;
		}
	};

	return { calls, puppeteerModule };
}

test('reads required configuration and keeps sandbox enabled by default', () => {
	assert.deepEqual(readConfiguration({
		POLLURL: 'https://poll.fm/123',
		ANSWERID: 'PDI_answer456'
	}), {
		pollURL: 'https://poll.fm/123',
		answerId: 'PDI_answer456',
		noSandbox: false
	});

	assert.equal(readConfiguration({
		POLLURL: 'https://poll.fm/123',
		ANSWERID: 'PDI_answer456',
		PUPPETEER_NO_SANDBOX: 'true'
	}).noSandbox, true);
});

test('rejects missing or unsafe configuration', () => {
	assert.throws(
		() => validateConfiguration({ answerId: 'PDI_answer456' }),
		/POLLURL environment variable is required/
	);
	assert.throws(
		() => validateConfiguration({ pollURL: 'file:///tmp/poll', answerId: 'PDI_answer456' }),
		/POLLURL must use HTTP or HTTPS/
	);
	assert.throws(
		() => validateConfiguration({ pollURL: 'https://poll.fm/123', answerId: 'answer id' }),
		/ANSWERID contains unsupported characters/
	);
});

test('only disables browser sandbox after explicit opt-in', () => {
	assert.deepEqual(buildLaunchOptions(false), {});
	assert.deepEqual(buildLaunchOptions(true), {
		args: ['--no-sandbox', '--disable-setuid-sandbox']
	});
});

test('runs one iteration and closes browser before returning', async () => {
	const { calls, puppeteerModule } = createHarness();
	const logMessages = [];

	await runVoteBot({
		puppeteerModule,
		pollURL: 'https://poll.fm/123',
		answerId: 'PDI_answer456',
		logger: { log: message => logMessages.push(message) },
		wait: async milliseconds => calls.push(['wait', milliseconds])
	});

	assert.deepEqual(calls, [
		['launch', {}],
		['newPage'],
		['setViewport', {
			width: 1920,
			height: 1080,
			deviceScaleFactor: 3,
			isMobile: false,
			hasTouch: false,
			isLandscape: false
		}],
		['goto', 'https://poll.fm/123', { waitUntil: 'networkidle2' }],
		['waitForSelector', 'input#PDI_answer456'],
		['click', 'input#PDI_answer456'],
		['waitForSelector', VOTE_BUTTON_SELECTOR],
		['click', VOTE_BUTTON_SELECTOR],
		['wait', 500],
		['close']
	]);
	assert.deepEqual(logMessages.slice(-2), ['Browser closed.', 'Finished iteration.']);
});

test('closes browser and preserves failure when navigation fails', async () => {
	const navigationError = new Error('navigation failed');
	const { calls, puppeteerModule } = createHarness({ gotoError: navigationError });

	await assert.rejects(
		runVoteBot({
			puppeteerModule,
			pollURL: 'https://poll.fm/123',
			answerId: 'PDI_answer456',
			logger: { log() {} },
			wait: async () => {}
		}),
		navigationError
	);

	assert.deepEqual(calls.slice(-1), [['close']]);
});
