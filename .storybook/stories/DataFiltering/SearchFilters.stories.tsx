import { Meta } from '@storybook/react';
import { PageContent } from '../../../packages/react/src/content';
import { Stack } from '../../../packages/react/src/stack';
import { Text } from '../../../packages/react/src/text';
import { Callout } from '../../../packages/react/src/callout';
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
							<Callout title="Table Filtering (Medium)">
								<Text as="p">
									The medium filtering pattern is for cases where the number of
									filterable fields is between 1 and 4 secondary filters. Our
									FilterBar is used to reveal all filterable fields when the
									button is pressed.
								</Text>
							</Callout>
							<TableFilteringMedium hasActionColumn={true} />
						</Stack>
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
