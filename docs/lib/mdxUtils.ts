// TODO: Rename me to lib/mdx/utils.ts
import { readdir, readFile } from 'fs/promises';
import { normalize } from 'path';
import { plugin } from '@untitled-docs/live-code/rehype';
import { serialize } from 'next-mdx-remote/serialize';
import remarkHint from 'remark-hint';
import matter from 'gray-matter';
import { slugify } from './slugify';

const RELEASE_PATH = normalize(`${process.cwd()}/../releases/`);

const releasePath = (slug: string) => normalize(`${RELEASE_PATH}/${slug}.mdx`);

export function stripMdxExtension(filename: string) {
	return filename.replace(/\.mdx?$/gi, '');
}

export async function getMarkdownData(filePath: string) {
	const fileContents = await readFile(filePath, { encoding: 'utf8' });
	return matter(fileContents);
}

export async function getJSONData(filePath: string) {
	const fileContents = await readFile(filePath, { encoding: 'utf8' });
	return JSON.parse(fileContents);
}

export function serializeMarkdown(
	source: string,
	scope?: Record<string, unknown>
) {
	return serialize(source, {
		mdxOptions: {
			remarkPlugins: [remarkHint],
			rehypePlugins: [plugin],
		},
		scope,
	});
}

// Releases
//TODO move this into `./mdx/releases.ts`

export async function getRelease(slug: string) {
	const { content, data } = await getMarkdownData(releasePath(slug));
	const source = await serializeMarkdown(content, data);

	return {
		slug,
		source,
		data,
		title: (data.title ?? slug) as string,
	};
}

export async function getReleaseSlugs() {
	const entries = await readdir(RELEASE_PATH, { withFileTypes: true });
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

export function getReleaseList() {
	return getReleaseSlugs().then((slugs) =>
		Promise.all(
			slugs.map((slug) =>
				getMarkdownData(releasePath(slug)).then(({ data }) => ({
					title: (data?.title ?? slug) as string,
					description: (data.description ?? null) as string | null,
					slug,
				}))
			)
		)
	);
}

function releaseNavMetaData(
	slug: string,
	data: Awaited<ReturnType<typeof getMarkdownData>>['data']
) {
	return {
		title: (data?.title ?? slug) as string,
		slug,
	};
}

export function getReleaseBreadcrumbs(slug: string) {
	return getMarkdownData(releasePath(slug)).then(({ data }) => {
		const meta = releaseNavMetaData(slug, data);
		return [{ href: '/releases', label: 'Releases' }, { label: meta.title }];
	});
}

export type Release = Awaited<ReturnType<typeof getRelease>>;
export type ReleaseList = Awaited<ReturnType<typeof getReleaseList>>;
