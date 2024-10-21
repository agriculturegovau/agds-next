import { RefObject } from 'react';
import { Stack } from '@ag.ds-next/react/src/stack';
import { Button } from '@ag.ds-next/react/src/button';
import { useTernaryState } from '@ag.ds-next/react/src/core';
import { FilterIcon } from '@ag.ds-next/react/src/icon';
import { Box } from '@ag.ds-next/react/src/box';
import { ActiveFilters } from './_components/ActiveFilters';
import { SortBySelect } from './_components/SortBySelect';
import { DataTable } from './_components/DataTable';
import { DashboardFilterDrawer } from './_components/DashboardFilterDrawer';
import { FilterSearchInput } from './_components/FilterSearchInput';
import {
	FilterBar,
	FilterBarGroup,
	FilterRegion,
} from './_components/FilterBar';
import { DashboardPagination } from './_components/DashboardPagination';
import { DataTableSelectAllCheckbox } from './_components/DataTableSelectAllCheckbox';
import { DataProvider, SortAndFilterProvider } from './_lib/contexts';
import { useSortAndFilter } from './_lib/useSortAndFilter';
import { useFetchData } from './_lib/useFetchData';
import { FilterSwitchInput } from './_components/FilterSwitchInput';

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
