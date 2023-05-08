import { Meta, StoryObj } from '@storybook/react';
import { TableFilteringLarge } from './TableFilteringLarge';
import { useSortAndFilter } from './lib/useSortAndFilter';
import { generateTableCaption, useData } from './lib/utils';

const meta: Meta<typeof TableFilteringLarge> = {
	title: 'Patterns/Data filtering and sorting',
	component: TableFilteringLarge,
	parameters: {
		layout: 'fullscreen',
	},
};

export default meta;

type Story = StoryObj<typeof TableFilteringLarge>;

const TableFilteringLargeExample = () => {
	const {
		filters,
		pagination,
		resetFilters,
		removeFilter,
		setFilters,
		setPagination,
		setSort,
		sort,
	} = useSortAndFilter();

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
		<TableFilteringLarge
			data={data}
			filters={filters}
			loading={loading}
			pagination={pagination}
			resetFilters={resetFilters}
			setFilters={setFilters}
			removeFilter={removeFilter}
			setPagination={setPagination}
			setSort={setSort}
			sort={sort}
			tableCaption={tableCaption}
			totalPages={totalPages}
			totalItems={totalItems}
		/>
	);
};

export const Large: Story = {
	name: 'Tables (Large)',
	render: TableFilteringLargeExample,
};
