import { Meta, StoryObj } from '@storybook/react';
import { TableFilteringSmall } from './TableFilteringSmall';
import { useSortAndFilter } from './lib/useSortAndFilter';
import { generateTableCaption, useData } from './lib/utils';

const meta: Meta<typeof TableFilteringSmall> = {
	title: 'Patterns/Data filtering and sorting',
	component: TableFilteringSmall,
	parameters: {
		layout: 'fullscreen',
	},
};

export default meta;

type Story = StoryObj<typeof TableFilteringSmall>;

const TableFilteringSmallExample = () => {
	const { sort, filters, pagination, setSort, setFilters, setPagination } =
		useSortAndFilter();

	const { loading, data, totalPages, totalItems } = useData({
		filters,
		pagination,
		sort,
	});

	const tableCaption = generateTableCaption({
		loading,
		totalItems,
		pagination,
	});

	return (
		<TableFilteringSmall
			sort={sort}
			setSort={setSort}
			filters={filters}
			setFilters={setFilters}
			pagination={pagination}
			setPagination={setPagination}
			totalPages={totalPages}
			loading={loading}
			data={data}
			tableCaption={tableCaption}
			totalItems={totalItems}
		/>
	);
};

export const Small: Story = {
	name: 'Tables (Small)',
	render: TableFilteringSmallExample,
};
