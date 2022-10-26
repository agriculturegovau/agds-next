import { existsSync } from 'fs';
import { normalize } from 'path';
import { readdir } from 'fs/promises';
import {
	getMarkdownData,
	serializeMarkdown,
	stripMdxExtension,
	// getJSONData,
} from '../mdxUtils';
import { slugify } from '../slugify';

const PKG_PATH = normalize(`${process.cwd()}/../packages/react/src/components`);

const pkgOverviewPath = (slug: string) =>
	`${PKG_PATH}/${slug}/docs/overview.mdx`;

const pkgDocsPath = (slug: string) => normalize(`${PKG_PATH}/${slug}/docs`);

export async function getPkg(slug: string) {
	// const { name, version } = await getJSONData(pkgJsonPath(slug));
	const { data, content } = await getMarkdownData(pkgOverviewPath(slug));
	const source = await serializeMarkdown(content, data);
	const subNavItems = await getPkgSubNavItems(slug);
	return {
		slug,
		source,
		data,
		name: slug as string,
		// version: version as string,
		title: (data.title ?? slug) as string,
		storybookPath: (data.storybookPath ?? null) as string | null,
		subNavItems: subNavItems ?? null,
	};
}

export async function getPkgSubNavItems(slug: string) {
	return getMarkdownData(pkgOverviewPath(slug)).then(({ data }) => {
		const meta = pkgNavMetaData(slug, data);
		return [
			{
				label: 'Overview',
				href: `/components/${meta.slug}`,
				path: pkgOverviewPath(slug),
			},
			{
				label: 'Rationale',
				href: `/components/${meta.slug}/rationale`,
				path: `${pkgDocsPath(slug)}/rationale.mdx`,
			},
			{
				label: 'Content',
				href: `/components/${meta.slug}/content`,
				path: `${pkgDocsPath(slug)}/content.mdx`,
			},
			{
				label: 'Code',
				href: `/components/${meta.slug}/code`,
				path: `${pkgDocsPath(slug)}/code.mdx`,
			},
			{
				label: 'Accessibility',
				href: `/components/${meta.slug}/accessibility`,
				path: `${pkgDocsPath(slug)}/accessibility.mdx`,
			},
		].filter(({ path }) => existsSync(path));
	});
}

export async function getPkgDocsContent(
	slug: string,
	path: string | string = 'overview.mdx'
) {
	const filePath = `${pkgDocsPath(slug)}/${path}`;
	if (!existsSync(filePath)) return;
	const { data, content } = await getMarkdownData(filePath);
	return await serializeMarkdown(content, data);
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

function pkgNavMetaData(
	slug: string,
	data: Awaited<ReturnType<typeof getMarkdownData>>['data']
) {
	return {
		title: (data?.title ?? slug) as string,
		group: slugify(data?.group ?? 'Other') as string,
		groupName: (data?.group ?? 'Other') as string,
		slug,
	};
}

export function getPkgList() {
	return getPkgSlugs().then((slugs) =>
		Promise.all(
			slugs.map((slug) =>
				getMarkdownData(pkgOverviewPath(slug)).then(({ data }) =>
					pkgNavMetaData(slug, data)
				)
			)
		).then((pkgList) => pkgList.sort((a, b) => (a.title > b.title ? 1 : -1)))
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
			.sort((a, b) => {
				return a.title > b.title ? 1 : -1;
			});
	});
}

export function getGroupBreadCrumbs(groupSlug: string) {
	return getPkgGroupList().then((groups) => {
		const group = groups.find((g) => g.slug === groupSlug);
		return group
			? [
					{ href: '/', label: 'Home' },
					{ href: '/packages', label: 'Packages' },
					{ label: group.title },
			  ]
			: undefined;
	});
}

export function getPkgBreadcrumbs(slug: string, currentPageName?: string) {
	return getMarkdownData(pkgOverviewPath(slug)).then(({ data }) => {
		const meta = pkgNavMetaData(slug, data);
		const baseItems = [
			{ href: '/', label: 'Home' },
			{ href: '/components', label: 'Components' },
		];
		if (currentPageName) {
			return [
				...baseItems,
				{ href: `/components/${meta.slug}`, label: meta.title },
				{ label: currentPageName },
			];
		}
		return [...baseItems, { label: meta.title }];
	});
}

export async function getPkgNavLinks() {
	return await (await getPkgList()).map(pkgNavItem);
}

export function pkgNavItem(p: { title: string; slug: string }) {
	return {
		label: p.title,
		href: `/components/${p.slug}`,
	};
}

export type Pkg = Awaited<ReturnType<typeof getPkg>>;
export type PkgList = Awaited<ReturnType<typeof getPkgList>>;
