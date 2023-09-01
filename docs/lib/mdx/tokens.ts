import { normalize } from 'path';
import { readdir } from 'fs/promises';
import {
	getMarkdownData,
	serializeMarkdown,
	stripMdxExtension,
} from '../mdxUtils';
import { slugify } from '../slugify';

export const TOKENS_PATH = normalize(
	`${process.cwd()}/content/foundations/tokens`
);

const tokenPath = (slug: string) => normalize(`${TOKENS_PATH}/${slug}.mdx`);

export async function getTokenPage(slug: string) {
	const tokenPagePath = (slug: string) =>
		normalize(`${TOKENS_PATH}/${slug}.mdx`);
	const { content, data } = await getMarkdownData(tokenPagePath(slug));
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

export async function getTokenSlugs() {
	const entries = await readdir(TOKENS_PATH, { withFileTypes: true });
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

export async function getTokenList() {
	const slugs = await getTokenSlugs();
	const list = await Promise.all(
		slugs.map((slug) =>
			getMarkdownData(tokenPath(slug)).then(({ data }) => ({
				order: (data.order as number | null) || 100,
				title: (data?.title ?? slug) as string,
				description: (data.description ?? null) as string | null,
				slug,
			}))
		)
	);
	return list.sort((a, b) => a.order - b.order);
}

export type TokenPage = Awaited<ReturnType<typeof getTokenPage>>;
