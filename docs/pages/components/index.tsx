import { normalize } from 'path';
import { useMemo, useState } from 'react';
import { Stack } from '@ag.ds-next/react/stack';
import { Text } from '@ag.ds-next/react/text';
import { SearchInput } from '@ag.ds-next/react/search-input';
import { Column, Columns } from '@ag.ds-next/react/columns';
import { FilterSidebar } from '@ag.ds-next/react/filter-sidebar';
import { ControlGroup } from '@ag.ds-next/react/control-group';
import { Checkbox } from '@ag.ds-next/react/checkbox';
import { FormStack } from '@ag.ds-next/react/form-stack';
import { getMarkdownData, serializeMarkdown } from '../../lib/mdxUtils';
import {
	COMPONENTS_PATH,
	getPkgGroupList,
	getPkgList,
	getPkgNavLinks,
} from '../../lib/mdx/packages';
import { DocumentTitle } from '../../components/DocumentTitle';
import {
	PkgCardList,
	PkgCardListEmptyState,
} from '../../components/PkgCardList';
import { CategoryPageTemplate } from '../../components/CategoryPageTemplate';

type StaticProps = Awaited<ReturnType<typeof getStaticProps>>['props'];

const listId = 'agds-components-list';

export default function PackagesHome({
	groupList,
	pkgList,
	title,
	description,
}: StaticProps) {
	const [searchTerm, setSearchTerm] = useState('');
	const [activeCategories, setActiveCategories] = useState<string[]>([]);

	const resetFilters = () => {
		setSearchTerm('');
		setActiveCategories([]);
	};

	const hasFilters = searchTerm !== '' || activeCategories.length > 0;

	const filteredPkgs = useMemo(
		() =>
			pkgList.filter((p) => {
				if (activeCategories.length) {
					if (!activeCategories.includes(p.groupName)) return false;
				}

				if (!searchTerm) return true;

				return (
					p.title.toLowerCase().includes(searchTerm.toLowerCase()) ||
					p.groupName.toLowerCase().includes(searchTerm.toLowerCase()) ||
					p.description?.toLowerCase().includes(searchTerm.toLowerCase())
				);
			}),
		[pkgList, searchTerm, activeCategories]
	);

	return (
		<>
			<DocumentTitle title="Components" description={description} />
			<CategoryPageTemplate
				title={title}
				description={description}
				editPath="/docs/content/components/index.mdx"
			>
				<Columns>
					<Column columnSpan={{ xs: 12, md: 4, lg: 3 }}>
						<Stack gap={1}>
							<FilterSidebar onClearFilters={resetFilters}>
								<FormStack>
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
									<ControlGroup
										label="Category"
										block={true}
										hideOptionalLabel
										aria-controls={listId}
									>
										{groupList.map(({ title }) => (
											<Checkbox
												key={title}
												value={title}
												checked={activeCategories.includes(title)}
												onChange={(e) => {
													const checked = e.target.checked;
													setActiveCategories(
														checked
															? [...activeCategories, title]
															: activeCategories?.filter((s) => s !== title)
													);
												}}
											>
												{title}
											</Checkbox>
										))}
									</ControlGroup>
								</FormStack>
							</FilterSidebar>
						</Stack>
					</Column>
					<Column
						id={listId}
						columnSpan={{ xs: 12, md: 8 }}
						columnStart={{ lg: 5 }}
					>
						{filteredPkgs?.length ? (
							<Stack gap={2}>
								<Text
									as="h2"
									fontSize="md"
									fontWeight={{
										xs: 'normal',
										md: 'bold',
									}}
									lineHeight="heading"
								>
									{hasFilters ? 'Components' : 'All Components'} (
									{filteredPkgs.length === 1
										? '1 item'
										: `${filteredPkgs.length} items`}
									)
								</Text>

								<PkgCardList items={filteredPkgs} />
							</Stack>
						) : (
							<PkgCardListEmptyState onClear={resetFilters} />
						)}
					</Column>
				</Columns>
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
