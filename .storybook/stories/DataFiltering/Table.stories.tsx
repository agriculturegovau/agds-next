import { Meta } from '@storybook/react';
import { PageContent } from '../../../packages/react/src/content';
import { Stack } from '../../../packages/react/src/stack';
import { Text } from '../../../packages/react/src/text';
import { Callout } from '../../../packages/react/src/callout';
import { TableFilteringLarge } from './TableFilteringLarge';
import { TableFilteringSmall } from './TableFilteringSmall';
import { TableFilteringMedium } from './TableFilteringMedium';
import { useSortAndFilter } from './lib/useSortAndFilter';
import { useFetchData } from './lib/useFetchData';
import { DataProvider, SortAndFilterProvider } from './lib/contexts';

const args = { throwError: false };

type StoryArgs = typeof args;

const meta: Meta = {
	title: 'Content/Table/Sort, filter and select examples',
	parameters: {
		layout: 'fullscreen',
	},
	args: args,
	argTypes: {
		throwError: {
			control: {
				type: 'boolean',
			},
		},
	},
};

export default meta;

export const FilterSmall = {
	name: 'With filtering (small)',
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

export const FilterAndSelectSmall = {
	name: 'With filtering (small) and selection',
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
							<TableFilteringSmall selectable={true} />
						</Stack>
					</PageContent>
				</DataProvider>
			</SortAndFilterProvider>
		);
	},
};

export const FilterMedium = {
	name: 'With filtering (medium)',
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
							<TableFilteringMedium />
						</Stack>
					</PageContent>
				</DataProvider>
			</SortAndFilterProvider>
		);
	},
};

export const FilterAndSelectMedium = {
	name: 'With filtering (medium) and selection',
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
							<Callout title="Table Selection and Filtering (Medium)">
								<Text as="p">
									The medium filtering pattern is for cases where the number of
									filterable fields is between 1 and 4 secondary filters. Our
									FilterBar is used to reveal all filterable fields when the
									button is pressed.
								</Text>
							</Callout>
							<TableFilteringMedium selectable={true} />
						</Stack>
					</PageContent>
				</DataProvider>
			</SortAndFilterProvider>
		);
	},
};

export const FilterLarge = {
	name: 'With filtering (large)',
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

export const FilterAndSelectLarge = {
	name: 'With filtering (large) and selection',
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
							<Callout title="Table Selection and Filtering (Large)">
								<Text as="p">
									The large filtering pattern is for cases where the number of
									filterable fields exceeds 6. Our Drawer component is used to
									reveal all filters as the user elects to show them. You may
									elect to show up to two primary filters in the main content
									area next to the button which opens the drawer.
								</Text>
							</Callout>
							<TableFilteringLarge selectable={true} />
						</Stack>
					</PageContent>
				</DataProvider>
			</SortAndFilterProvider>
		);
	},
};
