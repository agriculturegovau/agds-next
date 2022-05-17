import { normalize } from 'path';
import { existsSync } from 'fs';
import { readdir } from 'fs/promises';

import {
	getMarkdownData,
	serializeMarkdown,
	stripMdxExtension,
} from '../mdxUtils';
import { slugify } from '../slugify';

const TEMPLATES_PATH = normalize(`${process.cwd()}/../templates/`);

const templateOverviewPath = (slug: string) =>
	normalize(`${TEMPLATES_PATH}/${slug}/index.mdx`);
const templateDocsPath = (slug: string) =>
	normalize(`${TEMPLATES_PATH}/${slug}/`);

export async function getTemplate(slug: string) {
	const { content, data } = await getMarkdownData(templateOverviewPath(slug));
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

export async function getTemplateSubNavItems(slug: string) {
	return getMarkdownData(templateOverviewPath(slug)).then(({ data }) => {
		const meta = templateNavMetaData(slug, data);
		return [
			{
				label: 'Overview',
				href: `/templates/${meta.slug}`,
			},
			{
				label: 'Content',
				href: `/templates/${meta.slug}/content`,
			},
			{
				label: 'Code',
				href: `/templates/${meta.slug}/code`,
			},
		];
	});
}

export async function getTemplateSlugs() {
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

export function getTemplateList() {
	return getTemplateSlugs().then((slugs) => {
		return Promise.all(
			slugs.map((slug) =>
				getMarkdownData(templateOverviewPath(slug)).then(({ data }) =>
					templateNavMetaData(slug, data)
				)
			)
		).then((templateList) => {
			return templateList.sort((a, b) => (a.title > b.title ? 1 : -1));
		});
	});
}

export async function getTemplateDocsContent(slug: string, path: string) {
	const { data, content } = await getMarkdownData(
		`${templateDocsPath(slug)}/${path}`
	);
	return await serializeMarkdown(content, data);
}

function templateNavMetaData(
	slug: string,
	data: Awaited<ReturnType<typeof getMarkdownData>>['data']
) {
	return {
		title: (data?.title ?? slug) as string,
		slug,
		description: data?.description,
	};
}

export function getTemplatesBreadcrumbs(slug: string) {
	return getMarkdownData(templateOverviewPath(slug)).then(({ data }) => {
		const meta = templateNavMetaData(slug, data);
		return [{ href: '/templates', label: 'Templates' }, { label: meta.title }];
	});
}

export type Template = Awaited<ReturnType<typeof getTemplate>>;
export type TemplateList = Awaited<ReturnType<typeof getTemplateList>>;
