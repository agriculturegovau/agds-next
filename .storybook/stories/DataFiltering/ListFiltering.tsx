import { Box } from '@ag.ds-next/react/box';
import { Button } from '@ag.ds-next/react/button';
import { CloseIcon } from '@ag.ds-next/react/icon';
import { Column, Columns } from '@ag.ds-next/react/columns';
import { DateRangePicker } from '@ag.ds-next/react/date-range-picker';
import { FilterSidebar } from '@ag.ds-next/react/filter-sidebar';
import { Flex } from '@ag.ds-next/react/flex';
import { PageContent } from '@ag.ds-next/react/content';
import { Prose } from '@ag.ds-next/react/prose';
import { SkipLinks } from '@ag.ds-next/react/skip-link';
import { Stack } from '@ag.ds-next/react/stack';
import { Text } from '@ag.ds-next/react/text';
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
	const numberOfActiveFilters = getNumberOfActiveFilters(filters);
	const tableCaption = generateTableCaption({
		loading,
		totalItems,
		pagination,
	});

	return (
		<PageContent>
			<Stack gap={3}>
				<SkipLinks
					links={[{ href: '#main-content', label: 'Skip to main content' }]}
				/>
				<Prose>
					<h1>Card Filtering</h1>
					<p>
						The Card Filtering pattern is used for filtering and sorting a list
						of cards, rather than a table.
					</p>
					<p>Here it is applied to a list of establishments.</p>
				</Prose>
				<Columns gap={{ xs: 1, md: 3 }}>
					<Column columnSpan={{ xs: 12, md: 4 }}>
						<Stack gap={1}>
							<FilterSidebar numberOfActiveFilters={numberOfActiveFilters}>
								<FilterSearchInput block />
								<FilterStatusSelect block />
								<FilterStateSelect block />
								<FilterAssigneeSelect block />
								<FilterDestinationsSelect block />
								<FilterServicesSelect />
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
								<Box>
									<Button
										variant="text"
										iconAfter={() => <CloseIcon size="sm" />}
										onClick={resetFilters}
									>
										Clear filters
									</Button>
								</Box>
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
					>
						<Stack gap={2}>
							<Flex
								flexDirection={{ xs: 'column', md: 'row' }}
								justifyContent={{ xs: 'flex-start', md: 'space-between' }}
								alignItems={{ xs: 'flex-start', md: 'flex-end' }}
								gap={1.5}
								borderBottom
								paddingBottom={1}
							>
								<Text
									fontSize={{
										xs: 'sm',
										md: 'lg',
									}}
								>
									{tableCaption}
								</Text>
								<SortBySelect />
							</Flex>
							<DataList data={data} loading={loading} />
							<DashboardPagination />
						</Stack>
					</Column>
				</Columns>
			</Stack>
		</PageContent>
	);
};
