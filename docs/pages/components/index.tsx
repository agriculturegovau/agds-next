import { normalize } from 'path';
import { useMemo, useState } from 'react';
import { Stack } from '@ag.ds-next/react/box';
import { H2 } from '@ag.ds-next/react/heading';
import { Text } from '@ag.ds-next/react/text';
import { SearchInput } from '@ag.ds-next/react/search-input';
import { getMarkdownData, serializeMarkdown } from '../../lib/mdxUtils';
import {
	COMPONENTS_PATH,
	getPkgGroupList,
	getPkgList,
	getPkgNavLinks,
} from '../../lib/mdx/packages';
import { DocumentTitle } from '../../components/DocumentTitle';
import { PkgCardList } from '../../components/PkgCardList';
import { CategoryPageTemplate } from '../../components/CategoryPageTemplate';

type StaticProps = Awaited<ReturnType<typeof getStaticProps>>['props'];

export default function PackagesHome({
	groupList,
	pkgList,
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
			<CategoryPageTemplate
				title={title}
				description={description}
				editPath="/docs/content/components/index.mdx"
			>
				<Stack gap={1}>
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
				</Stack>
			</CategoryPageTemplate>
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
			title: data?.title as string,
			description: data?.description as string,
			navLinks,
			groupList,
			pkgList,
		},
	};
}
