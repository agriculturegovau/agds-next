import { Flex, Stack } from '@ag.ds-next/react/box';
import { Select } from '@ag.ds-next/react/select';
import { VerticalDivider } from './VerticalDivider';
import { GetDataFilters, GetDataSort } from './lib/data';
import { DateRangePicker } from '@ag.ds-next/react/date-picker';
import { BusinessForAudit } from './lib/generateBusinessData';
import { SearchInput } from '@ag.ds-next/react/search-input';
import { Button } from '@ag.ds-next/react/button';
import { DashboardSortBySelect } from './DashboardSortBySelect';

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
			<SearchInput
				label="Search Business name"
				maxWidth="lg"
				hideOptionalLabel
				value={filters.businessName}
				onChange={(searchString) => {
					// debounce
					setFilters({
						...filters,
						businessName: searchString,
					});
				}}
			/>
			<Select
				label="State"
				placeholder="All"
				hideOptionalLabel
				options={[
					{ value: 'act', label: 'ACT' },
					{ value: 'nsw', label: 'NSW' },
					{ value: 'nt', label: 'NT' },
					{ value: 'qld', label: 'QLD' },
					{ value: 'sa', label: 'SA' },
					{ value: 'tas', label: 'TAS' },
					{ value: 'vic', label: 'VIC' },
					{ value: 'wa', label: 'WA' },
				]}
				value={filters.state || ''}
				onChange={(e) => {
					const value = e.target.value;
					resetPagination();
					setFilters({
						...filters,
						state: value === '' ? undefined : value,
					});
				}}
			/>
			<Select
				label="Status"
				placeholder="All"
				hideOptionalLabel
				options={[
					{ value: 'booked', label: 'Booked' },
					{ value: 'notBooked', label: 'Not booked' },
					{ value: 'completed', label: 'Completed' },
					{ value: 'cancelled', label: 'Cancelled' },
				]}
				value={filters.status || ''}
				onChange={(e) => {
					const value = e.target.value as
						| ''
						| 'booked'
						| 'notBooked'
						| 'completed'
						| 'cancelled';
					resetPagination();
					setFilters({
						...filters,
						status: value === '' ? undefined : value,
					});
				}}
			/>
			<VerticalDivider />
			<DateRangePicker
				onChange={(value) => {
					resetPagination();
					setFilters({
						...filters,
						dateRegistered: value,
					});
				}}
				value={filters.dateRegistered}
			/>
			<VerticalDivider />
			<DashboardSortBySelect
				sort={sort}
				setSort={setSort}
				resetPagination={resetPagination}
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
