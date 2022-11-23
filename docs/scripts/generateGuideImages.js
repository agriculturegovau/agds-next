/* eslint-disable @typescript-eslint/no-var-requires */
const puppeteer = require('puppeteer');
const sharp = require('sharp');

const BASE_URL = `http://localhost:3000/agds-next/example-site`;
const OUTPUT_DIR = `public/img/guides/`;

(async () => {
	console.info('Starting');
	console.log(`Screen shotting ${BASE_URL}`);
	console.info(`Outputting images to ${OUTPUT_DIR}`);

	const browser = await puppeteer.launch();
	const guides = [{ slug: 'home', url: BASE_URL }];

	await Promise.all(
		guides.map(async ({ url, slug }, idx) => {
			try {
				console.log(`Generating ${idx + 1} of ${guides.length}`);

				const destination = OUTPUT_DIR + `/${slug}.webp`;

				const page = await browser.newPage();
				await page.goto(url);

				await page.setViewport({
					width: 1280,
					height: 720,
					deviceScaleFactor: 1,
				});

				// Convert the screenshot into a webp image
				const screenshotBuffer = await page.screenshot({ fullPage: true });
				sharp(screenshotBuffer).resize(800).webp().toFile(destination);
			} catch (error) {
				console.log(`Error with "${slug}"`);
				console.error(error.message);
			}
		})
	);
	await browser.close();

	console.log('Done');
})();
