import { normalize } from 'path';
import { readdir } from 'fs/promises';
import {
	getMarkdownData,
	serializeMarkdown,
	stripMdxExtension,
} from '../mdxUtils';
import { slugify } from '../slugify';

export const ACCESSIBILITY_PATH = normalize(
	`${process.cwd()}/content/foundations/accessibility`
);

const accessibilityPath = (slug: string) =>
	normalize(`${ACCESSIBILITY_PATH}/${slug}.mdx`);

export async function getAccessibilityPage(slug: string) {
	const accessibilityPagePath = (slug: string) =>
		normalize(`${ACCESSIBILITY_PATH}/${slug}.mdx`);
	const { content, data } = await getMarkdownData(accessibilityPagePath(slug));
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

export async function getAccessibilitySlugs() {
	const entries = await readdir(ACCESSIBILITY_PATH, { withFileTypes: true });
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

export async function getAccessibilityList() {
	const slugs = await getAccessibilitySlugs();
	const list = await Promise.all(
		slugs.map((slug) =>
			getMarkdownData(accessibilityPath(slug)).then(({ data }) => ({
				order: (data.order as number | null) || 100,
				title: (data?.title ?? slug) as string,
				description: (data.description ?? null) as string | null,
				slug,
			}))
		)
	);
	return list.sort((a, b) => a.order - b.order);
}

export type AccessibilityPage = Awaited<
	ReturnType<typeof getAccessibilityPage>
>;
