import { normalize } from 'path';
import { readdir } from 'fs/promises';
import {
	getMarkdownData,
	serializeMarkdown,
	stripMdxExtension,
} from '../mdxUtils';
import { slugify } from '../slugify';

const GUIDE_PATH = normalize(`${process.cwd()}/../guides`);
const guidePath = (slug: string) => normalize(`${GUIDE_PATH}/${slug}.mdx`);

export async function getGuide(slug: string) {
	const { content, data } = await getMarkdownData(guidePath(slug));
	const source = await serializeMarkdown(content, data);
	return {
		slug,
		source,
		data,
		title: (data.title ?? slug) as string,
		description: (data.description ?? null) as string | null,
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

export async function getGuideList() {
	const slugs = await getGuideSlugs();
	const list = await Promise.all(
		slugs.map((slug) =>
			getMarkdownData(guidePath(slug)).then(({ data }) => ({
				order: (data.order as number) || 100,
				title: (data?.title ?? slug) as string,
				description: (data.description ?? null) as string | null,
				slug,
			}))
		)
	);
	return list.sort((a, b) => a.order - b.order);
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

export function getGuidesBreadcrumbs(slug: string) {
	return getMarkdownData(guidePath(slug)).then(({ data }) => {
		const meta = guideNavMetaData(slug, data);
		return [
			{ href: '/', label: 'Home' },
			{ href: '/guides', label: 'Guides' },
			{ label: meta.title },
		];
	});
}

export type Guide = Awaited<ReturnType<typeof getGuide>>;
export type GuideList = Awaited<ReturnType<typeof getGuideList>>;
