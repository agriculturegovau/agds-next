import { normalize } from 'path';
import { readdir } from 'fs/promises';
import {
	getMarkdownData,
	serializeMarkdown,
	stripMdxExtension,
} from '../mdxUtils';
import { slugify } from '../slugify';

export const PATTERNS_PATH = normalize(`${process.cwd()}/content/patterns`);

const patternOverviewPath = (slug: string) =>
	normalize(`${PATTERNS_PATH}/${slug}/index.mdx`);

const patternDocsPath = (slug: string) => normalize(`${PATTERNS_PATH}/${slug}`);

export async function getPattern(slug: string) {
	const { content, data } = await getMarkdownData(patternOverviewPath(slug));
	const source = await serializeMarkdown(content, data);
	return {
		slug,
		source,
		content,
		data,
		title: (data.title ?? slug) as string,
		group: slugify(data?.group ?? 'Other') as string,
		groupName: (data?.group ?? 'Other') as string,
		version: data.version as string,
		description: (data.description ?? null) as string | null,
		previewPath: (data.previewPath ?? null) as string | null,
		figmaTemplateNodeId: (data.figmaTemplateNodeId ?? null) as string | null,
		githubTemplatePath: (data.githubTemplatePath ?? null) as string | null,
		storybookPath: (data.storybookPath ?? null) as string | null,
	};
}

export async function getPatternSlugs() {
	const entries = await readdir(PATTERNS_PATH, { withFileTypes: true });
	return entries
		.filter(
			(entry) =>
				!entry.name.startsWith('_') &&
				!entry.name.startsWith('.') &&
				entry.isDirectory()
		)
		.map((entry) => slugify(stripMdxExtension(entry.name)))
		.sort();
}

export function getPatternList() {
	return getPatternSlugs().then((slugs) => {
		return Promise.all(
			slugs.map((slug) =>
				getMarkdownData(patternOverviewPath(slug)).then(({ data }) =>
					patternNavMetaData(slug, data)
				)
			)
		).then((patternList) => {
			return patternList.sort((a, b) => a.order - b.order);
		});
	});
}

export async function getPatternGroupList() {
	const patternsList = await getPatternList();
	const subGroups = await getPatternSubGroupList();

	const uniquePatternGroups = new Map(
		patternsList.map((p) => [p.group, p.groupName])
	);
	const patternGroups = Array.from(uniquePatternGroups.entries())
		.map(([slug, title]) => ({ slug, title }))
		.sort((a, b) => (a.title > b.title ? 1 : -1));

	return patternGroups.map((group) => ({
		...group,
		subGroups: subGroups.filter((i) => i.group === group.slug),
	}));
}

export function getPatternSubGroupList() {
	return getPatternList().then((patterns) => {
		const uniqueGroups = new Map(
			patterns
				.filter((p) => p.subGroup && p.subGroupName)
				.map((p) => [p.subGroup, p])
		);
		return Array.from(uniqueGroups.entries())
			.map(([slug, { subGroupName, group }]) => ({
				slug,
				title: subGroupName as string,
				group,
			}))
			.sort((a, b) => (a.title > b.title ? 1 : -1));
	});
}

export async function getPatternDocsContent(slug: string, path: string) {
	const { data, content } = await getMarkdownData(
		`${patternDocsPath(slug)}/${path}`
	);
	return await serializeMarkdown(content, data);
}

function patternNavMetaData(
	slug: string,
	data: Awaited<ReturnType<typeof getMarkdownData>>['data']
) {
	return {
		order: (data.order as number | null) || 100,
		title: (data?.title ?? slug) as string,
		slug,
		description: data?.description,
		group: slugify(data?.group ?? 'Other') as string,
		groupName: (data?.group ?? 'Other') as string,
		subGroup: data?.subGroup
			? slugify(data?.subGroup)
			: (null as string | null),
		subGroupName: (data?.subGroup ?? null) as string | null,
	};
}

export function getPatternBreadcrumbs(slug: string, currentPageName?: string) {
	return getMarkdownData(patternOverviewPath(slug)).then(({ data }) => {
		const meta = patternNavMetaData(slug, data);
		const baseItems = [
			{ href: '/', label: 'Home' },
			{ href: '/patterns', label: 'Patterns' },
		];
		if (currentPageName) {
			return [
				...baseItems,
				{ href: `/patterns/${slug}`, label: meta.title },
				{ label: currentPageName },
			];
		}
		return [...baseItems, { label: meta.title }];
	});
}

export async function getPatternNavLinks() {
	const groupList = await getPatternGroupList();
	const patternList = await getPatternList();

	return groupList.map((group) => {
		return {
			href: `/patterns#${group.slug}`,
			label: group.title,
			items:
				group.subGroups?.length > 0
					? group.subGroups.map((subGroup) => ({
							href: `/patterns#${group.slug}-${subGroup.slug}`,
							label: subGroup.title,
							items: patternList
								.filter(
									(p) => p.group === group.slug && p.subGroup === subGroup.slug
								)
								.map((p) => ({
									href: `/patterns/${p.slug}`,
									label: p.title,
								})),
					  }))
					: patternList
							.filter((p) => p.group === group.slug)
							.map((p) => ({
								href: `/patterns/${p.slug}`,
								label: p.title,
							})),
		};
	});

	return patternList.map(({ title, slug }) => ({
		href: `/patterns/${slug}`,
		label: title,
	}));
}

export type Pattern = Awaited<ReturnType<typeof getPattern>>;
export type PatternList = Awaited<ReturnType<typeof getPatternList>>;
