import { Meta } from '@storybook/react';
import { Callout } from '@ag.ds-next/react/callout';
import { PageContent } from '@ag.ds-next/react/content';
import { Stack } from '@ag.ds-next/react/stack';
import { Text } from '@ag.ds-next/react/text';
import { DataProvider, SortAndFilterProvider } from './lib/contexts';
import { useFetchData } from './lib/useFetchData';
import { useSortAndFilter } from './lib/useSortAndFilter';
import { TableSelection } from './TableSelection';

const args = { throwError: false };

type StoryArgs = typeof args;

const meta: Meta = {
	title: 'Content/Table/with remote data',
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

export const Selection = {
	name: 'with sort and selection',
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
							<Callout title="Table Selection">
								<Text as="p">
									A table with pagination that allows rows to be selected.
								</Text>
							</Callout>
							<TableSelection />
						</Stack>
					</PageContent>
				</DataProvider>
			</SortAndFilterProvider>
		);
	},
};
