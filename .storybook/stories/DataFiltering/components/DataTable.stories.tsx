import { Meta } from '@storybook/react';
import { PageContent } from '@ag.ds-next/react/content';
import { Stack } from '@ag.ds-next/react/stack';
import { Callout } from '@ag.ds-next/react/callout';
import { Text } from '@ag.ds-next/react/text';
import { DataProvider, SortAndFilterProvider } from '../lib/contexts';
import { useSortAndFilter } from '../lib/useSortAndFilter';
import { useFetchData } from '../lib/useFetchData';
import { DataTable } from './DataTable';

const meta: Meta = {
	title: 'content/Table/with remote data',
};

export default meta;

export const LoadingAndSort = {
	name: 'with sort',
	render: function Render() {
		const sortAndFilter = useSortAndFilter({
			itemsPerPage: 10,
		});
		const { filters, pagination, sort } = sortAndFilter;

		const { data, totalPages, totalItems, loading } = useFetchData({
			filters,
			pagination,
			sort,
		});

		return (
			<SortAndFilterProvider value={sortAndFilter}>
				<DataProvider
					value={{
						data: data,
						loading: loading,
						totalPages: totalPages,
						totalItems: totalItems,
					}}
				>
					<PageContent>
						<Stack gap={2}>
							<Callout title="Table Filtering (Small)">
								<Text as="p">
									In the most basic cases of filtering with up to three
									filterable fields, we can show all filters in a row above the
									table.
								</Text>
							</Callout>
							<DataTable />
						</Stack>
					</PageContent>
				</DataProvider>
			</SortAndFilterProvider>
		);
	},
};
