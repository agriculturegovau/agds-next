import { Flex, Stack } from '@ag.ds-next/react/box';
import { Select } from '@ag.ds-next/react/select';
import { VerticalDivider } from './VerticalDivider';
import { handleGetDataParams } from './data';

export const DashboardFilters = ({
	params,
	setParams,
}: {
	params: handleGetDataParams;
	setParams: (params: handleGetDataParams) => void;
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
					setParams({
						...params,
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
						value: '{"field":"businessName","order":"ASC" }',
						label: 'Business name (A-Z)',
					},
					{
						value: '{"field":"businessName","order":"DESC" }',
						label: 'Business name (Z-A)',
					},
					{
						value: '{"field":"city","order":"ASC" }',
						label: 'City (A-Z)',
					},
					{
						value: '{"field":"city","order":"DESC" }',
						label: 'City (Z-A)',
					},
					{
						value: '{"field":"numberOfEmployees","order":"ASC" }',
						label: 'Number of employees (lowest first)',
					},
					{
						value: '{"field":"numberOfEmployees","order":"DESC" }',
						label: 'Number of employees (highest first)',
					},
					{
						value: '{"field":"dateRegistered","order":"ASC" }',
						label: 'Date registered (oldest first)',
					},
					{
						value: '{"field":"dateRegistered","order":"DESC" }',
						label: 'Date registered (newest first)',
					},
				]}
				onChange={(e) => {
					const value = e.target.value;
					const { field, order } = JSON.parse(value);

					setParams({
						...params,
						sort: {
							field,
							order,
						},
					});
				}}
			/>
		</Flex>
	);
};

// text search
// removable tags
