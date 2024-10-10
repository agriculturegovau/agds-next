import { visuallyHiddenStyles } from '../../../packages/react/src/a11y';
import { Box } from '../../../packages/react/src/box';
import { tokens } from '../../../packages/react/src/core';
import { Column, Columns } from '../../../packages/react/src/columns';
import { DateRangePicker } from '../../../packages/react/src/date-range-picker';
import { FilterSidebar } from '../../../packages/react/src/filter-sidebar';
import { Flex } from '../../../packages/react/src/flex';
import { Stack } from '../../../packages/react/src/stack';
import { Text } from '../../../packages/react/src/text';
import { FormStack } from '../../../packages/react/src/form-stack';
import { DashboardPagination } from './components/DashboardPagination';
import { DataList } from './components/DataList';
import { FilterAssigneeSelect } from './components/FilterAssigneeSelect';
import { FilterDestinationsSelect } from './components/FilterDestinationsSelect';
import { FilterSearchInput } from './components/FilterSearchInput';
import { FilterServicesSelect } from './components/FilterServicesSelect';
import { FilterStateSelect } from './components/FilterStateSelect';
import { FilterStatusSelect } from './components/FilterStatusSelect';
import { generateTableCaption, getNumberOfActiveFilters } from './lib/utils';
import { SortBySelect } from './components/SortBySelect';
import { ActiveFilters } from './components/ActiveFilters';
import { useDataContext, useSortAndFilterContext } from './lib/contexts';

/** These patterns are draft designs and are not yet ready for production. */
export const ListFiltering = () => {
	const { filters, resetFilters, setFilter, pagination } =
		useSortAndFilterContext();
	const { data, loading, totalItems } = useDataContext();
	const activeFiltersCount = getNumberOfActiveFilters(filters);
	const tableCaption = generateTableCaption({
		loading,
		totalItems,
		pagination,
	});

	return (
		<Columns>
			<Column columnSpan={{ xs: 12, md: 4, lg: 3 }}>
				<Stack
					gap={1}
					css={{
						// This margin ensures that the left and column align nicely on desktop
						[tokens.mediaQuery.min.md]: { marginTop: '3.5rem' },
					}}
				>
					<FilterSidebar
						activeFiltersCount={activeFiltersCount}
						onClearFilters={resetFilters}
					>
						<FormStack>
							<FilterSearchInput block />
							<FilterStatusSelect block />
							<FilterStateSelect block />
							<FilterAssigneeSelect block />
							<FilterDestinationsSelect block />
							<FilterServicesSelect block />
							<DateRangePicker
								fromLabel="Registered from"
								toLabel="Registered to"
								hideOptionalLabel
								onChange={(requestDate) => setFilter({ requestDate })}
								onFromInputChange={(from) =>
									setFilter({
										requestDate: { ...filters.requestDate, from },
									})
								}
								onToInputChange={(to) =>
									setFilter({
										requestDate: { ...filters.requestDate, to },
									})
								}
								value={filters.requestDate}
							/>
						</FormStack>
					</FilterSidebar>
					<Box display={{ xs: 'block', lg: 'none' }}>
						<ActiveFilters />
					</Box>
				</Stack>
			</Column>
			<Column
				as="main"
				aria-label="List of establishments"
				id="main-content"
				tabIndex={-1}
				css={{ '&:focus': { outline: 'none' } }}
				columnSpan={{ xs: 12, md: 8 }}
				columnStart={{ lg: 5 }}
			>
				<Stack gap={2}>
					<Flex
						flexDirection={{ xs: 'column', md: 'row' }}
						justifyContent={{ xs: 'flex-start', md: 'space-between' }}
						alignItems={{ xs: 'flex-start', md: 'flex-end' }}
						gap={1}
						paddingBottom={{ md: 1 }}
						borderBottom
						borderBottomWidth={{ xs: 'none', md: 'sm' }}
					>
						<Text
							as="h2"
							lineHeight="heading"
							fontSize="md"
							fontWeight={{
								xs: 'normal',
								md: 'bold',
							}}
						>
							{tableCaption}
						</Text>
						<div role="status" css={visuallyHiddenStyles}>
							{loading ? 'Loading audits' : ''}
						</div>
						<SortBySelect />
					</Flex>
					<DataList data={data} loading={loading} />
					<DashboardPagination />
				</Stack>
			</Column>
		</Columns>
	);
};
