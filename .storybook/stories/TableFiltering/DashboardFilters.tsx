import { Flex, Stack } from '@ag.ds-next/react/box';
import { Select } from '@ag.ds-next/react/select';
import { VerticalDivider } from './VerticalDivider';
import { GetDataParams } from './lib/data';
import { DateRangePicker } from '@ag.ds-next/react/date-picker';
import { BusinessForAudit } from './lib/generateBusinessData';

export const DashboardFilters = ({
	params,
	setParams,
}: {
	params: GetDataParams;
	setParams: (params: GetDataParams) => void;
}) => {
	return (
		<Flex
			gap={1}
			background="shade"
			padding={1}
			rounded
			border
			borderColor="muted"
		>
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
				onChange={(e) => {
					const value = e.target.value;
					setFilters({
						...params,
						pagination: {
							...params.pagination,
							page: 1,
						},
						filters: {
							...params.filters,
							state: value === 'all' ? undefined : value,
						},
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
					setParams({
						...params,
						pagination: {
							...params.pagination,
							page: 1,
						},
						filters: {
							...params.filters,
							status: value === 'all' ? undefined : value,
						},
					});
				}}
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
				onChange={(e) => {
					const [field, order] = e.target.value.split('-');
					setParams({
						...params,
						pagination: {
							...params.pagination,
							page: 1,
						},
						sort: {
							field: field as keyof BusinessForAudit,
							order: order as 'ASC' | 'DESC',
						},
					});
				}}
			/>
			<DateRangePicker
				onChange={(value) => {
					setParams({
						...params,
						pagination: {
							...params.pagination,
							page: 1,
						},
						filters: {
							...params.filters,
							dateRegistered: value,
						},
					});
				}}
				value={params.filters.dateRegistered}
			/>
		</Flex>
	);
};

// text search
// removable tags
