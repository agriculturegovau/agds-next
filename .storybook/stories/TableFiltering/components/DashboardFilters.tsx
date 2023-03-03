import { Box, Flex } from '@ag.ds-next/react/box';
import { GetDataFilters, GetDataSort } from '../lib/data';
import { DateRangePicker } from '@ag.ds-next/react/date-picker';
import { Button } from '@ag.ds-next/react/button';
import { FilterStatusSelect } from './FilterStatusSelect';
import { FilterAssigneeSelect } from './FilterAssigneeSelect';
import { FilterStateSelect } from './FilterStateSelect';

export const DashboardFilters = ({
	filters,
	sort,
	setFilters,
	setSort,
	resetPagination,
	resetFilters,
}: {
	filters: GetDataFilters;
	sort: GetDataSort;
	setFilters: (filters: GetDataFilters) => void;
	setSort: (sort: GetDataSort) => void;
	resetPagination: () => void;
	resetFilters: () => void;
}) => {
	return (
		<Flex
			gap={1}
			background="shade"
			flexWrap="wrap"
			alignItems="flex-end"
			padding={1}
			rounded
			border
			borderColor="muted"
		>
			<FilterStateSelect
				filters={filters}
				setFilters={setFilters}
				resetPagination={resetPagination}
			/>
			<FilterAssigneeSelect
				filters={filters}
				setFilters={setFilters}
				resetPagination={resetPagination}
			/>
			<DateRangePicker
				fromLabel="Registered from"
				toLabel="Registered to"
				onChange={(value) => {
					resetPagination();
					setFilters({
						...filters,
						requestDate: value,
					});
				}}
				value={filters.requestDate}
			/>
			<Button
				variant="secondary"
				onClick={() => {
					resetPagination();
					resetFilters();
				}}
			>
				Reset filters
			</Button>
		</Flex>
	);
};

// text search
// removable tags
