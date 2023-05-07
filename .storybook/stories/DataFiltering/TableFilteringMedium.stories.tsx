import { Meta, StoryObj } from '@storybook/react';
import { TableFilteringMedium } from './TableFilteringMedium';
import { useSortAndFilter } from './lib/useSortAndFilter';
import { generateTableCaption, useData } from './lib/utils';

const meta: Meta<typeof TableFilteringMedium> = {
	title: 'Patterns/Data filtering and sorting',
	component: TableFilteringMedium,
	parameters: {
		layout: 'fullscreen',
	},
};

export default meta;

type Story = StoryObj<typeof TableFilteringMedium>;

export const TableFilteringMediumExample = () => {
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
		<TableFilteringMedium
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

export const Medium: Story = {
	name: 'Tables (Medium)',
	render: TableFilteringMediumExample,
};
