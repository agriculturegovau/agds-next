/* eslint-disable @typescript-eslint/no-var-requires */
const { normalize } = require('path');
const { readdir, readFile } = require('fs/promises');
const puppeteer = require('puppeteer');
const matter = require('gray-matter');
const sharp = require('sharp');

const BASE_URL = `http://localhost:3000/example-site`;
const OUTPUT_DIR = `public/img/templates/`;
const TEMPLATES_PATH = normalize(`${process.cwd()}/../templates/`);

const templateOverviewPath = (slug) =>
	normalize(`${TEMPLATES_PATH}/${slug}/index.mdx`);

function slugify(string) {
	return string
		.toString()
		.toLowerCase()
		.replace(/\s+/g, '-') // Replace spaces with -
		.replace(/&/g, '-and-') // Replace & with 'and'
		.replace(/[^\w-]+/g, '') // Remove all non-word characters
		.replace(/--+/g, '-') // Replace multiple - with single -
		.replace(/^-+/, '') // Trim - from start of text
		.replace(/-+$/, ''); // Trim - from end of text
}

function stripMdxExtension(filename) {
	return filename.replace(/\.mdx?$/gi, '');
}

async function getMarkdownData(filePath) {
	const fileContents = await readFile(filePath, { encoding: 'utf8' });
	return matter(fileContents);
}

async function getTemplateSlugs() {
	const entries = await readdir(TEMPLATES_PATH, { withFileTypes: true });
	return entries
		.filter(
			(entry) =>
				!entry.name.startsWith('_') &&
				!entry.name.startsWith('.') &&
				entry.isDirectory()
		)
		.map((entry) => slugify(stripMdxExtension(entry.name)))
		.sort()
		.reverse();
}

function getTemplateList() {
	return getTemplateSlugs().then((slugs) => {
		return Promise.all(
			slugs.map((slug) =>
				getMarkdownData(templateOverviewPath(slug)).then(({ data }) => ({
					slug,
					previewPath: data?.previewPath,
				}))
			)
		);
	});
}

(async () => {
	console.info('Starting');
	console.log(`Screen shotting ${BASE_URL}`);
	console.info(`Outputting images to ${OUTPUT_DIR}`);

	const browser = await puppeteer.launch();
	const templates = await getTemplateList();

	await Promise.all(
		templates.map(async ({ slug, previewPath }, idx) => {
			try {
				console.log(`Generating ${idx + 1} of ${templates.length}`);

				const url = BASE_URL + previewPath;
				const destination = OUTPUT_DIR + `/${slug}.webp`;

				const page = await browser.newPage();
				await page.goto(url);

				await page.setViewport({
					width: 1280,
					height: 720,
					deviceScaleFactor: 1,
				});

				// Scroll past the template banner
				await page.waitForSelector('header');
				await page.evaluate(() => {
					document.querySelector('header').scrollIntoView();
				});

				// Convert the screenshot into a webp image
				const screenshotBuffer = await page.screenshot();
				sharp(screenshotBuffer).webp().toFile(destination);
			} catch (error) {
				console.log(`Error with "${slug}"`);
				console.error(error.message);
			}
		})
	);
	await browser.close();

	console.log('Done');
})();
