import { ExampleSmall } from './ExampleSmall';
import { ExampleMedium } from './ExampleMedium';
import { ExampleLarge } from './ExampleLarge';
import { useSortAndFilter } from './lib/useSortAndFilter';
import { genetateTableCaption, useData } from './lib/utils';
import { useRef } from 'react';
import { DraftBanner } from './components/DraftBanner';

export default {
	title: 'Patterns/Data Filtering (WIP)',
};

export const Small = () => {
	const tableRef = useRef<HTMLTableElement>(null);
	const {
		sort,
		filters,
		pagination,
		resetPagination,
		setSort,
		setFilters,
		setPagination,
	} = useSortAndFilter({
		tableRef,
	});

	const { loading, data, totalPages, totalItems } = useData({
		filters,
		pagination,
		sort,
	});

	const tableCaption = genetateTableCaption({
		loading,
		totalItems,
	});

	return (
		<>
			<DraftBanner />
			<ExampleSmall
				sort={sort}
				setSort={setSort}
				filters={filters}
				setFilters={setFilters}
				pagination={pagination}
				setPagination={setPagination}
				resetPagination={resetPagination}
				totalPages={totalPages}
				loading={loading}
				data={data}
				tableRef={tableRef}
				tableCaption={tableCaption}
				totalItems={totalItems}
			/>
		</>
	);
};

export const Medium = () => {
	const tableRef = useRef<HTMLTableElement>(null);
	const {
		filters,
		pagination,
		resetFilters,
		resetPagination,
		removeFilter,
		setFilters,
		setPagination,
		setSort,
		sort,
	} = useSortAndFilter({
		tableRef,
	});

	const { loading, data, totalPages, totalItems } = useData({
		filters,
		pagination,
		sort,
	});

	const tableCaption = genetateTableCaption({
		loading,
		totalItems,
	});

	return (
		<>
			<DraftBanner />
			<ExampleMedium
				data={data}
				filters={filters}
				loading={loading}
				pagination={pagination}
				resetFilters={resetFilters}
				resetPagination={resetPagination}
				setFilters={setFilters}
				removeFilter={removeFilter}
				setPagination={setPagination}
				setSort={setSort}
				sort={sort}
				tableRef={tableRef}
				tableCaption={tableCaption}
				totalPages={totalPages}
				totalItems={totalItems}
			/>
		</>
	);
};

export const Large = () => {
	const tableRef = useRef<HTMLTableElement>(null);
	const {
		filters,
		pagination,
		resetFilters,
		removeFilter,
		resetPagination,
		setFilters,
		setPagination,
		setSort,
		sort,
	} = useSortAndFilter({
		itemsPerPage: 20,
		tableRef,
	});

	const { loading, data, totalPages, totalItems } = useData({
		filters,
		pagination,
		sort,
	});

	const tableCaption = genetateTableCaption({
		loading,
		totalItems,
	});

	return (
		<>
			<DraftBanner />
			<ExampleLarge
				data={data}
				filters={filters}
				loading={loading}
				pagination={pagination}
				resetFilters={resetFilters}
				removeFilter={removeFilter}
				resetPagination={resetPagination}
				setFilters={setFilters}
				setPagination={setPagination}
				setSort={setSort}
				sort={sort}
				tableRef={tableRef}
				tableCaption={tableCaption}
				totalPages={totalPages}
				totalItems={totalItems}
			/>
		</>
	);
};
