/* eslint-disable @typescript-eslint/no-var-requires */
const { readdir, readFile } = require('fs/promises');
const puppeteer = require('puppeteer');
const { normalize } = require('path');
const matter = require('gray-matter');

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
					previewUrl: data?.previewUrl,
				}))
			)
		);
	});
}

(async () => {
	const templates = await getTemplateList();
	const browser = await puppeteer.launch();

	await Promise.all(
		templates
			.filter((template) => template.previewUrl)
			.map(async (template) => {
				console.log(`Generating preview image for ${template.slug} page.`);
				const page = await browser.newPage();
				await page.setViewport({
					width: 1280,
					height: 720,
					deviceScaleFactor: 1,
				});
				await page.goto(template.previewUrl);
				await page.screenshot({
					path: `public/img/templates/${template.slug}.png`,
				});
			})
	);

	await browser.close();

	console.log('Done');
})();
