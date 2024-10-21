import { RefObject } from 'react';
import { Stack } from '@ag.ds-next/react/src/stack';
import { Button } from '@ag.ds-next/react/src/button';
import { useTernaryState } from '@ag.ds-next/react/src/core';
import { FilterIcon } from '@ag.ds-next/react/src/icon';
import { Box } from '@ag.ds-next/react/src/box';
import { DataProvider, SortAndFilterProvider } from './lib/contexts';
import { useSortAndFilter } from './lib/useSortAndFilter';
import { useFetchData } from './lib/useFetchData';
import { ActiveFilters } from './ActiveFilters';
import { SortBySelect } from './SortBySelect';
import { DataTable } from './DataTable';
import { DashboardFilterDrawer } from './DashboardFilterDrawer';
import { FilterSearchInput } from './FilterSearchInput';
import { FilterBar, FilterBarGroup, FilterRegion } from './FilterBar';
import { DashboardPagination } from './DashboardPagination';
import { DataTableSelectAllCheckbox } from './DataTableSelectAllCheckbox';
import { FilterSwitchInput } from './FilterSwitchInput';

type StaffMembersTableProps = {
	selectable?: boolean;
	tableRef?: RefObject<HTMLTableElement>;
};

const headingId = 'table-heading';

export const StaffMembersTable = ({
	selectable,
	tableRef,
}: StaffMembersTableProps) => {
	const [isDrawerOpen, openDrawer, closeDrawer] = useTernaryState(false);
	const sortAndFilter = useSortAndFilter();
	const { filters, pagination, sort } = sortAndFilter;
	const data = useFetchData({
		filters,
		pagination,
		sort,
	});

	return (
		<SortAndFilterProvider value={sortAndFilter}>
			<DataProvider value={data}>
				<Stack gap={0}>
					<FilterRegion>
						<FilterBar>
							<FilterBarGroup>
								<FilterSearchInput />

								<FilterSwitchInput />

								<Button
									onClick={openDrawer}
									variant="secondary"
									iconBefore={FilterIcon}
								>
									Show filters
								</Button>
							</FilterBarGroup>

							<SortBySelect />
						</FilterBar>

						<DashboardFilterDrawer
							isDrawerOpen={isDrawerOpen}
							closeDrawer={closeDrawer}
						/>

						<ActiveFilters />
					</FilterRegion>

					{selectable && (
						<Box borderBottom padding={1}>
							<DataTableSelectAllCheckbox />
						</Box>
					)}

					<DataTable
						headingId={headingId}
						ref={tableRef}
						selectable={selectable}
					/>
				</Stack>

				<DashboardPagination />
			</DataProvider>
		</SortAndFilterProvider>
	);
};
