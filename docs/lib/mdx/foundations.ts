import { normalize } from 'path';
import { readdir } from 'fs/promises';
import {
	getMarkdownData,
	serializeMarkdown,
	stripMdxExtension,
} from '../mdxUtils';
import { slugify } from '../slugify';

export const FOUNDATIONS_PATH = normalize(
	`${process.cwd()}/content/foundations/`
);
const foundationsPath = (slug: string) =>
	normalize(`${FOUNDATIONS_PATH}/${slug}.mdx`);

export async function getFoundation(slug: string) {
	const { content, data } = await getMarkdownData(foundationsPath(slug));
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

export async function getFoundationSlugs() {
	const entries = await readdir(FOUNDATIONS_PATH, { withFileTypes: true });
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

export async function getFoundationList() {
	const slugs = await getFoundationSlugs();
	const list = await Promise.all(
		slugs.map((slug) =>
			getMarkdownData(foundationsPath(slug)).then(({ data }) => ({
				order: (data.order as number | null) || 100,
				title: (data?.title ?? slug) as string,
				description: (data.description ?? null) as string | null,
				slug,
			}))
		)
	);
	return list.sort((a, b) => a.order - b.order);
}

function getFoundationNavMetaData(
	slug: string,
	data: Awaited<ReturnType<typeof getMarkdownData>>['data']
) {
	return {
		title: (data?.title ?? slug) as string,
		slug,
	};
}

export function getFoundationBreadcrumbs(slug: string) {
	return getMarkdownData(foundationsPath(slug)).then(({ data }) => {
		const { title } = getFoundationNavMetaData(slug, data);
		return [
			{ href: '/', label: 'Home' },
			{ href: '/foundations', label: 'Foundations' },
			{ label: title },
		];
	});
}

export type Foundation = Awaited<ReturnType<typeof getFoundation>>;
