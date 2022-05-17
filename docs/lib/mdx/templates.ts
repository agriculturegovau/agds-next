import { normalize } from 'path';
import { readdir } from 'fs/promises';

import {
	getMarkdownData,
	serializeMarkdown,
	stripMdxExtension,
} from '../mdxUtils';
import { slugify } from '../slugify';

const TEMPLATES_PATH = normalize(`${process.cwd()}/../templates/`);

const templatePath = (slug: string) =>
	normalize(`${TEMPLATES_PATH}/${slug}.mdx`);

export async function getTemplate(slug: string) {
	const { content, data } = await getMarkdownData(templatePath(slug));
	const source = await serializeMarkdown(content, data);

	return {
		slug,
		source,
		data,
		title: (data.title ?? slug) as string,
	};
}

export const getTemplateBreadcrumbs = (templateTitle: string) => {
	return [{ href: '/templates', label: 'Templates' }, { label: templateTitle }];
};

export async function getTemplateSlugs() {
	const entries = await readdir(TEMPLATES_PATH, { withFileTypes: true });
	return entries
		.filter(
			(entry) =>
				!entry.name.startsWith('_') &&
				!entry.name.startsWith('.') &&
				!entry.name.startsWith('index') &&
				entry.isFile()
		)
		.map((entry) => slugify(stripMdxExtension(entry.name)))
		.sort()
		.reverse();
}

export function getTemplateList() {
	return getTemplateSlugs().then((slugs) =>
		Promise.all(
			slugs.map((slug) =>
				getMarkdownData(templatePath(slug)).then(({ data }) => ({
					title: (data?.title ?? slug) as string,
					slug,
					description: data?.description,
				}))
			)
		)
	);
}

function templateNavMetaData(
	slug: string,
	data: Awaited<ReturnType<typeof getMarkdownData>>['data']
) {
	return {
		title: (data?.title ?? slug) as string,
		slug,
	};
}

export function getTemplatesBreadcrumbs(slug: string) {
	return getMarkdownData(templatePath(slug)).then(({ data }) => {
		const meta = templateNavMetaData(slug, data);
		return [{ href: '/templates', label: 'Templates' }, { label: meta.title }];
	});
}

export type Template = Awaited<ReturnType<typeof getTemplate>>;
export type TemplateList = Awaited<ReturnType<typeof getTemplateList>>;
