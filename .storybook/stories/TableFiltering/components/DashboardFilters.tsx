import { Box, Flex } from '@ag.ds-next/react/box';
import { Select } from '@ag.ds-next/react/select';
import { GetDataFilters, GetDataSort } from '../lib/data';
import { DateRangePicker } from '@ag.ds-next/react/date-picker';
import { SearchInput } from '@ag.ds-next/react/search-input';
import { Button } from '@ag.ds-next/react/button';
import { DashboardSortBySelect } from './DashboardSortBySelect';
import { DashboardFilterStatus } from './DashboardFilterStatus';

const VerticalDivider = () => <Box borderLeft borderColor="muted" />;

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
			<DashboardSortBySelect
				sort={sort}
				setSort={setSort}
				resetPagination={resetPagination}
			/>
			<VerticalDivider />
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
			<DashboardFilterStatus
				filters={filters}
				setFilters={setFilters}
				resetPagination={resetPagination}
			/>
			<DateRangePicker
				fromLabel="Date registered from"
				toLabel="Date registered to"
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
