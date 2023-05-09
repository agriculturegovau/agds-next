import { normalize } from 'path';
import { readdir } from 'fs/promises';
import {
	getMarkdownData,
	serializeMarkdown,
	stripMdxExtension,
} from '../mdxUtils';
import { slugify } from '../slugify';

export const GUIDE_PATH = normalize(
	`${process.cwd()}/content/guides/how-to-write-guidance`
);
const nestedGuidePath = (slug: string) =>
	normalize(`${GUIDE_PATH}/${slug}.mdx`);

export async function getNestedGuide(slug: string) {
	const { content, data } = await getMarkdownData(nestedGuidePath(slug));
	const source = await serializeMarkdown(content, data);
	return {
		slug,
		content,
		source,
		data,
		title: (data.title ?? slug) as string,
		opener: (data.opener ?? null) as string | null,
	};
}

export async function getGuideSlugs() {
	const entries = await readdir(GUIDE_PATH, { withFileTypes: true });
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

export async function getContentGuideList() {
	const slugs = await getGuideSlugs();
	const list = await Promise.all(
		slugs.map((slug) =>
			getMarkdownData(nestedGuidePath(slug)).then(({ data }) => ({
				order: (data.order as number | null) || 100,
				title: (data?.title ?? slug) as string,
				opener: (data.opener ?? null) as string | null,
				overview: (data.overview ?? data.opener ?? null) as string | null,
				slug,
			}))
		)
	);
	return list.sort((a, b) => a.order - b.order);
}

export async function getNestedGuideSlugs() {
	const entries = await readdir(GUIDE_PATH, { withFileTypes: true });
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

function guideNavMetaData(
	slug: string,
	data: Awaited<ReturnType<typeof getMarkdownData>>['data']
) {
	return {
		title: (data?.title ?? slug) as string,
		slug,
	};
}

export function getNestedGuidesBreadcrumbs(slug: string) {
	return getMarkdownData(nestedGuidePath(slug)).then(({ data }) => {
		const meta = guideNavMetaData(slug, data);
		return [
			{ href: '/', label: 'Home' },
			{ href: '/guides', label: 'Guides' },
			{
				href: '/guides/how-to-write-guidance',
				label: 'How to create guidance in the Export Service',
			},
			{ label: meta.title },
		];
	});
}

export async function getNestedGuidesNavLinks() {
	const patternList = await getContentGuideList();
	return patternList.map(({ title, slug }) => ({
		href: `/guides/how-to-write-guidance/${slug}`,
		label: title,
	}));
}
