/* eslint-disable @typescript-eslint/no-var-requires */
const { normalize } = require('path');
const { readdir, readFile } = require('fs/promises');
const puppeteer = require('puppeteer');
const matter = require('gray-matter');

const BASE_URL = `http://localhost:3000/agds-next/example-site`;
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
	console.log(`Screenshoting ${BASE_URL}`);
	console.info(`Outputing images to ${OUTPUT_DIR}`);

	const templates = await getTemplateList();
	const browser = await puppeteer.launch();

	await Promise.all(
		templates.map(async ({ slug, previewPath }, idx) => {
			try {
				console.log(`Generating ${idx + 1} of ${templates.length}`);
				const url = BASE_URL + previewPath;
				const destination = OUTPUT_DIR + `/${slug}.png`;
				const page = await browser.newPage();
				await page.setViewport({
					width: 1280,
					height: 720,
					deviceScaleFactor: 1,
				});
				await page.goto(url);

				// Scroll past the template banner
				await page.evaluate(() => {
					const templateBannerHeight = 56;
					window.scrollTo(0, templateBannerHeight);
				});

				await page.screenshot({ path: destination });
			} catch (error) {
				console.log(`Error with "${slug}"`);
				console.error(error.message);
			}
		})
	);
	await browser.close();

	console.log('Done');
})();
