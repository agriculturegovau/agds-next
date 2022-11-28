import { normalize } from 'path';
import { readdir } from 'fs/promises';
import {
	getMarkdownData,
	serializeMarkdown,
	stripMdxExtension,
} from '../mdxUtils';
import { slugify } from '../slugify';

export const UPDATE_PATH = normalize(`${process.cwd()}/content/updates`);
const updatePath = (slug: string) => normalize(`${UPDATE_PATH}/${slug}.mdx`);

export async function getUpdate(slug: string) {
	const { content, data } = await getMarkdownData(updatePath(slug));
	const source = await serializeMarkdown(content, data);
	return {
		slug,
		source,
		data,
		title: (data.title ?? slug) as string,
	};
}

export async function getUpdateSlugs() {
	const entries = await readdir(UPDATE_PATH, { withFileTypes: true });
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

export function getUpdatesList() {
	return getUpdateSlugs().then((slugs) =>
		Promise.all(
			slugs.map((slug) =>
				getMarkdownData(updatePath(slug)).then(({ data }) => ({
					title: (data?.title ?? slug) as string,
					description: (data.description ?? null) as string | null,
					slug,
				}))
			)
		)
	);
}

function updateNavMetaData(
	slug: string,
	data: Awaited<ReturnType<typeof getMarkdownData>>['data']
) {
	return {
		title: (data?.title ?? slug) as string,
		slug,
	};
}

export function getUpdateBreadcrumbs(slug: string) {
	return getMarkdownData(updatePath(slug)).then(({ data }) => {
		const meta = updateNavMetaData(slug, data);
		return [
			{ href: '/', label: 'Home' },
			{ href: '/updates', label: 'Updates' },
			{ label: meta.title },
		];
	});
}

export type Update = Awaited<ReturnType<typeof getUpdate>>;
export type UpdatesList = Awaited<ReturnType<typeof getUpdatesList>>;
