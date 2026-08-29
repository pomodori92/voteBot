const assert = require('node:assert/strict');
const test = require('node:test');
const puppeteer = require('puppeteer');
const { buildLaunchOptions } = require('../voteBot/voteBot');

test('launches bundled Chrome and loads a local page', async t => {
	const noSandbox = /^(1|true)$/i.test(process.env.PUPPETEER_NO_SANDBOX || '');
	const browser = await puppeteer.launch(buildLaunchOptions(noSandbox));
	t.after(() => browser.close());

	const page = await browser.newPage();
	await page.goto('data:text/html,<title>voteBot smoke test</title>', { waitUntil: 'load' });

	assert.equal(await page.title(), 'voteBot smoke test');
});
