import { plugin } from '@untitled-docs/live-code/rehype';
import { serialize } from 'next-mdx-remote/serialize';
import { readdir, readFile } from 'fs/promises';
import remarkHint from 'remark-hint';
import { normalize } from 'path';
import matter from 'gray-matter';

import { slugify } from './slugify';

const PKG_PATH = normalize(`${process.cwd()}/../packages/`);
const RELEASE_PATH = normalize(`${process.cwd()}/../releases/`);

const pkgDocsPath = (slug: string) =>
	normalize(`${PKG_PATH}/${slug}/README.md`);
const pkgJsonPath = (slug: string) =>
	normalize(`${PKG_PATH}/${slug}/package.json`);
const releasePath = (slug: string) => normalize(`${RELEASE_PATH}/${slug}.mdx`);

function stripMdxExtension(filename: string) {
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

// Packages

export async function getPkg(slug: string) {
	const { name, version } = await getJSONData(pkgJsonPath(slug));
	const { data, content } = await getMarkdownData(pkgDocsPath(slug));
	const source = await serializeMarkdown(content, data);

	return {
		slug,
		source,
		data,
		name: name as string,
		version: version as string,
		title: (data.title ?? slug) as string,
	};
}

export async function getPkgSlugs() {
	const entries = await readdir(PKG_PATH, { withFileTypes: true });
	return entries
		.filter(
			(entry) =>
				!entry.name.startsWith('_') &&
				!entry.name.startsWith('.') &&
				entry.isDirectory()
		)
		.map((entry) => slugify(stripMdxExtension(entry.name)));
}

export function getPkgList(group?: string) {
	return getPkgSlugs().then((slugs) =>
		Promise.all(
			slugs.map((slug) =>
				getMarkdownData(pkgDocsPath(slug)).then(({ data }) => ({
					title: (data?.title ?? slug) as string,
					group: slugify(data?.group ?? 'Other') as string,
					groupName: (data?.group ?? 'Other') as string,
					slug,
				}))
			)
		)
			.then((pkgList) =>
				// filter if group is passed
				group ? pkgList.filter((pkg) => pkg.group === group) : pkgList
			)
			.then((pkgList) => pkgList.sort((a, b) => (a.title > b.title ? 1 : -1)))
	);
}

export function getPkgGroupList() {
	return getPkgList().then((pkgs) => {
		const uniqueGroups = new Map(pkgs.map((p) => [p.group, p.groupName]));
		return Array.from(uniqueGroups.entries())
			.map(([slug, title]) => ({
				slug,
				title,
			}))
			.sort((a, b) => (a.title > b.title ? 1 : -1));
	});
}

export async function getPkgNavLinks(group?: string) {
	const groupList = await getPkgGroupList();
	const pkgList = group ? await getPkgList(group) : [];

	return groupList.map((g) => {
		return g.slug === group
			? {
					...groupNavItem(g),
					children: pkgList.map(pkgNavItem),
			  }
			: groupNavItem(g);
	});
}

function groupNavItem(g: { title: string; slug: string }) {
	return {
		label: g.title,
		href: `/packages/${g.slug}`,
	};
}

function pkgNavItem(p: { title: string; group: string; slug: string }) {
	return {
		label: p.title,
		href: `/packages/${p.group}/${p.slug}`,
	};
}

export type Pkg = Awaited<ReturnType<typeof getPkg>>;
export type PkgList = Awaited<ReturnType<typeof getPkgList>>;

// Releases

export async function getRelease(slug: string) {
	const { content, data } = await getMarkdownData(releasePath(slug));
	const source = await serializeMarkdown(content, data);

	return {
		slug,
		source,
		data,
		title: (data.title ?? slug) as string,
		type: data.type as string | undefined,
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
					slug,
				}))
			)
		)
	);
}

export type Release = Awaited<ReturnType<typeof getRelease>>;
export type ReleaseList = Awaited<ReturnType<typeof getReleaseList>>;
