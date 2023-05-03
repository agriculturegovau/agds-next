import { normalize } from 'path';
import { readdir } from 'fs/promises';
import {
	getMarkdownData,
	serializeMarkdown,
	stripMdxExtension,
} from '../mdxUtils';
import { slugify } from '../slugify';

export const CONTENT_PATH = normalize(`${process.cwd()}/content/content/`);

const contentPath = (slug: string) => normalize(`${CONTENT_PATH}/${slug}.mdx`);

export async function getContent(slug: string) {
	const { content, data } = await getMarkdownData(contentPath(slug));
	const source = await serializeMarkdown(content, data);
	return {
		slug,
		source,
		content,
		data,
		title: (data.title ?? slug) as string,
		description: (data.description ?? null) as string | null,
	};
}

export async function getContentSlugs() {
	const entries = await readdir(CONTENT_PATH, { withFileTypes: true });
	return entries
		.filter(
			(entry) =>
				!entry.name.startsWith('_') &&
				!entry.name.startsWith('.') &&
				!entry.name.startsWith('index') &&
				entry.isFile()
		)
		.map((entry) => slugify(stripMdxExtension(entry.name)))
		.sort();
}

export async function getContentList() {
	const slugs = await getContentSlugs();
	const list = await Promise.all(
		slugs.map((slug) =>
			getMarkdownData(contentPath(slug)).then(({ data }) => ({
				order: (data.order as number | null) || 100,
				title: (data?.title ?? slug) as string,
				description: (data.description ?? null) as string | null,
				slug,
			}))
		)
	);
	return list.sort((a, b) => a.order - b.order);
}

function getContentNavMetaData(
	slug: string,
	data: Awaited<ReturnType<typeof getMarkdownData>>['data']
) {
	return {
		title: (data?.title ?? slug) as string,
		slug,
	};
}

export function getContentBreadcrumbs(slug: string) {
	return getMarkdownData(contentPath(slug)).then(({ data }) => {
		const { title } = getContentNavMetaData(slug, data);
		return [
			{ href: '/', label: 'Home' },
			{ href: '/content', label: 'Content' },
			{ label: title },
		];
	});
}

export type Foundation = Awaited<ReturnType<typeof getContent>>;
