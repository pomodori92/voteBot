const puppeteer = require('puppeteer');

const VOTE_BUTTON_SELECTOR = '#poll > div > div > div > div > main > form > div.css-vote.pds-vote > div > a';
const CLOSE_DELAY_MS = 500;


function validateConfiguration({ pollURL, answerId, noSandbox = false }) {
	if (!pollURL) {
		throw new Error('POLLURL environment variable is required.');
	}

	let parsedURL;
	try {
		parsedURL = new URL(pollURL);
	} catch {
		throw new Error('POLLURL must be a valid URL.');
	}

	if (parsedURL.protocol !== 'http:' && parsedURL.protocol !== 'https:') {
		throw new Error('POLLURL must use HTTP or HTTPS.');
	}

	if (!answerId) {
		throw new Error('ANSWERID environment variable is required.');
	}

	if (!/^[A-Za-z_][A-Za-z0-9_-]*$/.test(answerId)) {
		throw new Error('ANSWERID contains unsupported characters.');
	}

	return { pollURL, answerId, noSandbox: Boolean(noSandbox) };
}


function readConfiguration(env = process.env) {
	return validateConfiguration({
		pollURL: env.POLLURL,
		answerId: env.ANSWERID,
		noSandbox: /^(1|true)$/i.test(env.PUPPETEER_NO_SANDBOX || '')
	});
}


function buildLaunchOptions(noSandbox) {
	if (!noSandbox) {
		return {};
	}

	return {
		args: [
			'--no-sandbox',
			'--disable-setuid-sandbox'
		]
	};
}


function delay(milliseconds) {
	return new Promise(resolve => setTimeout(resolve, milliseconds));
}


async function runVoteBot({
	puppeteerModule = puppeteer,
	pollURL,
	answerId,
	noSandbox = false,
	logger = console,
	wait = delay
}) {
	const configuration = validateConfiguration({ pollURL, answerId, noSandbox });
	const answerSelector = `input#${configuration.answerId}`;
	let browser;

	try {
		browser = await puppeteerModule.launch(buildLaunchOptions(configuration.noSandbox));
		const page = await browser.newPage();

		await page.setViewport({
			width: 1920,
			height: 1080,
			deviceScaleFactor: 3,
			isMobile: false,
			hasTouch: false,
			isLandscape: false
		});
		logger.log('Page opened.');

		await page.goto(configuration.pollURL, { waitUntil: 'networkidle2' });
		logger.log('Page loaded.');

		await page.waitForSelector(answerSelector);
		await page.click(answerSelector);
		logger.log('Answer chosen.');

		await page.waitForSelector(VOTE_BUTTON_SELECTOR);
		await page.click(VOTE_BUTTON_SELECTOR);
		logger.log('Voted.');

		await wait(CLOSE_DELAY_MS);
	} finally {
		if (browser) {
			await browser.close();
			logger.log('Browser closed.');
		}
	}

	logger.log('Finished iteration.');
}


async function main(env = process.env) {
	await runVoteBot(readConfiguration(env));
}


if (require.main === module) {
	main().catch(error => {
		console.error('Error:', error.message);
		process.exitCode = 1;
	});
}


module.exports = {
	VOTE_BUTTON_SELECTOR,
	buildLaunchOptions,
	readConfiguration,
	runVoteBot,
	validateConfiguration
};
