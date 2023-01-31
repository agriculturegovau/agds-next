import { Flex, Stack } from '@ag.ds-next/react/box';
import { Select } from '@ag.ds-next/react/select';
import { VerticalDivider } from './VerticalDivider';
import { GetDataFilters, GetDataSort } from './lib/data';
import { DateRangePicker } from '@ag.ds-next/react/date-picker';
import { BusinessForAudit } from './lib/generateBusinessData';
import { SearchInput } from '@ag.ds-next/react/search-input';
import { Button } from '@ag.ds-next/react/button';

export const DashboardFilters = ({
	filters,
	sort,
	setFilters,
	setSort,
	resetPagination,
}: {
	filters: GetDataFilters;
	sort: GetDataSort;
	setFilters: (filters: GetDataFilters) => void;
	setSort: (sort: GetDataSort) => void;
	resetPagination: () => void;
}) => {
	return (
		<Flex
			gap={1}
			background="shade"
			flexWrap="wrap"
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
				hideOptionalLabel
				options={[
					{ value: 'all', label: 'All' },
					{ value: 'act', label: 'ACT' },
					{ value: 'nsw', label: 'NSW' },
					{ value: 'nt', label: 'NT' },
					{ value: 'qld', label: 'QLD' },
					{ value: 'sa', label: 'SA' },
					{ value: 'tas', label: 'TAS' },
					{ value: 'vic', label: 'VIC' },
					{ value: 'wa', label: 'WA' },
				]}
				value={filters.state}
				onChange={(e) => {
					const value = e.target.value;
					resetPagination();
					setFilters({
						...filters,
						state: value === 'all' ? undefined : value,
					});
				}}
			/>
			<Select
				label="Status"
				hideOptionalLabel
				options={[
					{ value: 'all', label: 'All' },
					{ value: 'booked', label: 'Booked' },
					{ value: 'notBooked', label: 'Not booked' },
					{ value: 'completed', label: 'Completed' },
					{ value: 'cancelled', label: 'Cancelled' },
				]}
				onChange={(e) => {
					const value = e.target.value as
						| 'all'
						| 'booked'
						| 'notBooked'
						| 'completed'
						| 'cancelled';
					resetPagination();
					setFilters({
						...filters,
						status: value === 'all' ? undefined : value,
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
			<Select
				label="Sort by"
				hideOptionalLabel
				options={[
					{
						value: 'businessName-ASC',
						label: 'Business name (A-Z)',
					},
					{
						value: 'businessName-DESC',
						label: 'Business name (Z-A)',
					},
					{
						value: 'city-ASC',
						label: 'City (A-Z)',
					},
					{
						value: 'city-DESC',
						label: 'City (Z-A)',
					},
					{
						value: 'numberOfEmployees-ASC',
						label: 'Number of employees (lowest first)',
					},
					{
						value: 'numberOfEmployees-DESC',
						label: 'Number of employees (highest first)',
					},
					{
						value: 'dateRegistered-ASC',
						label: 'Date registered (oldest first)',
					},
					{
						value: 'dateRegistered-DESC',
						label: 'Date registered (newest first)',
					},
				]}
				value={`${sort.field}-${sort.order}`}
				onChange={(e) => {
					const [field, order] = e.target.value.split('-');
					resetPagination();
					setSort({
						field: field as keyof BusinessForAudit,
						order: order as 'ASC' | 'DESC',
					});
				}}
			/>
		</Flex>
	);
};

// text search
// removable tags
