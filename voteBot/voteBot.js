const puppeteer = require('puppeteer');

(async () => {
	const pollURL = 'https://poll.fm/10513348';
	const answerId = 'PDI_answer48644839';

	const browser = await puppeteer.launch({ headless: false });
	const page = await browser.newPage();
	await page.setViewport({
		width: 1280,
		height: 720,
		deviceScaleFactor: 3,
		isMobile: false,
		hasTouch: false,
		isLandscape: false
	});
	console.log('Page opened.');

	await page.goto(pollURL, { waitUntil: 'networkidle2' });
	console.log('Page loaded.');

	await page.waitForSelector('#' + answerId);
	await page.click('input#' + answerId);
	console.log('Answer chosen.');

	await page.waitForSelector('#stage-inner > div.grid > div > form > div:nth-child(2) > div > div.l-link > a');
	await page.click('#stage-inner > div.grid > div > form > div:nth-child(2) > div > div.l-link > a');
	console.log('Voted.');

	await page.waitForSelector('#stage-inner > div.grid > div > form > div.poll > h1');
	console.log("Results page opened. I'll close the browser.");

	await browser.close();
})();