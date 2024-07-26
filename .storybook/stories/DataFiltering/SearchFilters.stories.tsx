import { ReactNode } from 'react';
import { Meta, ReactRenderer } from '@storybook/react';
import { PageContent } from '../../../packages/react/src/content';
import { Stack } from '../../../packages/react/src/stack';
import { Text } from '../../../packages/react/src/text';
import { Callout } from '../../../packages/react/src/callout';
import { tokens } from '../../../packages/react/src/core';
import { LinkList } from '../../../packages/react/src/link-list';
import { Logo } from '../../../packages/react/src/ag-branding';
import { SkipLinks } from '../../../packages/react/src/skip-link';
import {
	AppLayout,
	AppLayoutContent,
	AppLayoutFooter,
	AppLayoutFooterDivider,
	AppLayoutHeader,
} from '../../../packages/react/src/app-layout';
import {
	ExampleAccountDropdown,
	exampleData,
} from '../../../packages/react/src/app-layout/test-utils';
import { DataProvider, SortAndFilterProvider } from './lib/contexts';
import { useSortAndFilter } from './lib/useSortAndFilter';
import { useFetchData } from './lib/useFetchData';
import { ListFiltering } from './ListFiltering';
import { TableFilteringSmall } from './TableFilteringSmall';
import { TableFilteringMedium } from './TableFilteringMedium';
import { TableFilteringLarge } from './TableFilteringLarge';

const args = { throwError: false };

type StoryArgs = typeof args;

const meta: Meta = {
	title: 'Patterns/Search filters',
	parameters: {
		layout: 'fullscreen',
	},
	args,
	argTypes: {
		throwError: {
			control: {
				type: 'boolean',
			},
		},
	},
};

export default meta;

export const Cards = {
	render: function Render() {
		const sortAndFilter = useSortAndFilter();
		const { filters, pagination, sort } = sortAndFilter;
		const data = useFetchData({ filters, pagination, sort });

		return (
			<SortAndFilterProvider value={sortAndFilter}>
				<DataProvider value={data}>
					<PageContent>
						<Stack gap={2}>
							<Callout title="Search filters with Cards">
								<Text as="p">
									The Card Filtering pattern is used for filtering and sorting a
									list of cards, rather than a table.
								</Text>
							</Callout>
							<ListFiltering />
						</Stack>
					</PageContent>
				</DataProvider>
			</SortAndFilterProvider>
		);
	},
};

export const TableSmall = {
	name: 'Table (small)',
	render: function Render({ throwError }: StoryArgs) {
		const sortAndFilter = useSortAndFilter();
		const { filters, pagination, sort } = sortAndFilter;
		const data = useFetchData({
			filters,
			pagination,
			sort,
			throwError,
		});
		return (
			<SortAndFilterProvider value={sortAndFilter}>
				<DataProvider value={data}>
					<PageContent>
						<Stack gap={2}>
							<Callout title="Table Filtering (Small)">
								<Text as="p">
									In the most basic cases of filtering with up to three
									filterable fields, we can show all filters in a row above the
									table.
								</Text>
							</Callout>
							<TableFilteringSmall />
						</Stack>
					</PageContent>
				</DataProvider>
			</SortAndFilterProvider>
		);
	},
};

export const TableMedium = {
	name: 'Table (medium)',
	params: {
		layout: 'fullscreen',
	},
	decorators: [
		// eslint-disable-next-line @typescript-eslint/ban-ts-comment
		// @ts-ignore
		(Story) => (
			<>
				<SkipLinks
					links={[{ href: '#main-content', label: 'Skip to main content' }]}
				/>
				<AppLayout focusMode={true}>
					<AppLayoutHeader
						accountDetails={{
							name: exampleData.userNames.regular,
							secondaryText: 'My account',
							dropdown: (
								<ExampleAccountDropdown
									selectedBusinessName={'Antfix'}
									onBusinessChange={console.log}
								/>
							),
						}}
						badgeLabel="Beta"
						heading="Export Service"
						href="/"
						logo={<Logo />}
						subLine="Supporting Australian agricultural exports"
					/>
					<AppLayoutContent>
						<main
							css={{ '&:focus': { outline: 'none' } }}
							id="main-content"
							tabIndex={-1}
						>
							<Story />
						</main>
						<AppLayoutFooter>
							<nav aria-label="footer">
								<LinkList
									horizontal
									links={[
										{ label: 'Home', href: '/' },
										{
											label: 'Storybook',
											href: 'https://design-system.agriculture.gov.au/storybook/index.html',
										},
										{
											label: 'Playroom',
											href: 'https://design-system.agriculture.gov.au/playroom',
										},
										{
											label: 'Starter kit',
											href: 'https://github.com/agriculturegovau/agds-starter-kit',
										},
									]}
								/>
							</nav>
							<AppLayoutFooterDivider />
							<Text fontSize="xs" maxWidth={tokens.maxWidth.bodyText}>
								We acknowledge the traditional owners of country throughout
								Australia and recognise their continuing connection to land,
								waters and culture. We pay our respects to their Elders past,
								present and emerging.
							</Text>
							<Text fontSize="xs" maxWidth={tokens.maxWidth.bodyText}>
								&copy; 2024 Department of Agriculture, Fisheries and Forestry
							</Text>
						</AppLayoutFooter>
					</AppLayoutContent>
				</AppLayout>
			</>
		),
	],
	render: function Render({ throwError }: StoryArgs) {
		const sortAndFilter = useSortAndFilter();
		const { filters, pagination, sort } = sortAndFilter;
		const data = useFetchData({
			filters,
			pagination,
			sort,
			throwError,
		});
		return (
			<SortAndFilterProvider value={sortAndFilter}>
				<DataProvider value={data}>
					<PageContent>
						<TableFilteringMedium hasActionColumn={true} selectable />
					</PageContent>
				</DataProvider>
			</SortAndFilterProvider>
		);
	},
};

export const TableLarge = {
	name: 'Table (large)',
	render: function Render({ throwError }: StoryArgs) {
		const sortAndFilter = useSortAndFilter();
		const { filters, pagination, sort } = sortAndFilter;
		const data = useFetchData({
			filters,
			pagination,
			sort,
			throwError,
		});
		return (
			<SortAndFilterProvider value={sortAndFilter}>
				<DataProvider value={data}>
					<PageContent>
						<Stack gap={2}>
							<Callout title="Table Filtering (Large)">
								<Text as="p">
									The large filtering pattern is for cases where the number of
									filterable fields exceeds 6. Our Drawer component is used to
									reveal all filters as the user elects to show them. You may
									elect to show up to two primary filters in the main content
									area next to the button which opens the drawer.
								</Text>
							</Callout>
							<TableFilteringLarge />
						</Stack>
					</PageContent>
				</DataProvider>
			</SortAndFilterProvider>
		);
	},
};
