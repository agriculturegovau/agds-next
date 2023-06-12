import { normalize } from 'path';
import { readdir } from 'fs/promises';
import {
	getMarkdownData,
	serializeMarkdown,
	stripMdxExtension,
} from '../mdxUtils';
import { slugify } from '../slugify';

export const TEMPLATES_PATH = normalize(`${process.cwd()}/content/templates`);

const templateOverviewPath = (slug: string) =>
	normalize(`${TEMPLATES_PATH}/${slug}/index.mdx`);

const templateDocsPath = (slug: string) =>
	normalize(`${TEMPLATES_PATH}/${slug}`);

export async function getTemplate(slug: string) {
	const { content, data } = await getMarkdownData(templateOverviewPath(slug));
	const source = await serializeMarkdown(content, data);
	return {
		slug,
		source,
		content,
		data,
		title: (data.title ?? slug) as string,
		description: (data.description ?? null) as string | null,
		previewPath: (data.previewPath ?? null) as string | null,
		figmaTemplateNodeId: (data.figmaTemplateNodeId ?? null) as string | null,
		githubTemplatePath: (data.githubTemplatePath ?? null) as string | null,
		storybookPath: (data.storybookPath ?? null) as string | null,
	};
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
		.sort();
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
			return templateList.sort((a, b) => a.order - b.order);
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
		order: (data.order as number | null) || 100,
		title: (data?.title ?? slug) as string,
		slug,
		description: data?.description,
	};
}

export function getTemplateBreadcrumbs(slug: string) {
	return getMarkdownData(templateOverviewPath(slug)).then(({ data }) => {
		const meta = templateNavMetaData(slug, data);
		return [
			{ href: '/', label: 'Home' },
			{ href: '/templates', label: 'Templates' },
			{ label: meta.title },
		];
	});
}

export async function getTemplateNavLinks() {
	const templateList = await getTemplateList();
	return templateList.map((template) => ({
		href: `/templates/${template.slug}`,
		label: template.title,
	}));
}

export type Template = Awaited<ReturnType<typeof getTemplate>>;
export type TemplateList = Awaited<ReturnType<typeof getTemplateList>>;
