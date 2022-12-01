import { normalize } from 'path';
import { Fragment, useMemo, useState } from 'react';
import { MDXRemote } from 'next-mdx-remote';
import { Stack } from '@ag.ds-next/box';
import { Prose } from '@ag.ds-next/prose';
import { H2 } from '@ag.ds-next/heading';
import { Text } from '@ag.ds-next/text';
import { SearchInput } from '@ag.ds-next/search-input';
import { getMarkdownData, serializeMarkdown } from '../../lib/mdxUtils';
import {
	COMPONENTS_PATH,
	getPkgGroupList,
	getPkgList,
	getPkgNavLinks,
} from '../../lib/mdx/packages';
import { mdxComponents } from '../../components/mdxComponents';
import { AppLayout } from '../../components/AppLayout';
import { DocumentTitle } from '../../components/DocumentTitle';
import { PageLayout } from '../../components/PageLayout';
import { PkgCardList } from '../../components/PkgCardList';
import { PageTitle } from '../../components/PageTitle';

type StaticProps = Awaited<ReturnType<typeof getStaticProps>>['props'];

export default function PackagesHome({
	navLinks,
	groupList,
	pkgList,
	source,
	title,
	description,
}: StaticProps) {
	const [searchTerm, setSearchTerm] = useState('');

	const filteredPkgs = useMemo(() => {
		if (!searchTerm) return null;
		return pkgList.filter((p) => {
			return (
				p.title.toLowerCase().includes(searchTerm.toLowerCase()) ||
				p.groupName.toLowerCase().includes(searchTerm.toLowerCase()) ||
				p.description?.toLowerCase().includes(searchTerm.toLowerCase())
			);
		});
	}, [pkgList, searchTerm]);

	return (
		<>
			<DocumentTitle title="Components" description={description} />
			<AppLayout>
				<PageLayout
					sideNav={{
						title: 'Components',
						titleLink: '/components',
						items: navLinks,
					}}
					editPath="/docs/content/components/index.mdx"
				>
					<PageTitle title={title} introduction={description} />
					<Prose>
						<MDXRemote {...source} components={mdxComponents} />
					</Prose>
					<div role="search" aria-label="components">
						<SearchInput
							label="Find a component"
							hint="Filter by name or category"
							value={searchTerm}
							onChange={setSearchTerm}
							maxWidth="xl"
							hideOptionalLabel
						/>
					</div>
					{searchTerm ? (
						filteredPkgs?.length ? (
							<PkgCardList items={filteredPkgs} />
						) : (
							<Text as="p">
								No results found. Please change your search term.
							</Text>
						)
					) : (
						<Stack gap={2}>
							{groupList.map((group) => (
								<Stack gap={1} key={group.slug}>
									<H2>{group.title}</H2>
									<PkgCardList
										items={pkgList.filter((p) => p.group === group.slug)}
									/>
								</Stack>
							))}
						</Stack>
					)}
				</PageLayout>
			</AppLayout>
		</>
	);
}

export async function getStaticProps() {
	const { content, data } = await getMarkdownData(
		normalize(`${COMPONENTS_PATH}/index.mdx`)
	);
	const source = await serializeMarkdown(content);
	const navLinks = await getPkgNavLinks();
	const groupList = await getPkgGroupList();
	const pkgList = await getPkgList();

	return {
		props: {
			source,
			title: (data?.title || null) as string | null,
			description: (data?.description || null) as string | null,
			navLinks,
			groupList,
			pkgList,
		},
	};
}
