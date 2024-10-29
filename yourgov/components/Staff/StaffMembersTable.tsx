import { RefObject, useState } from 'react';
import { useRouter } from 'next/router';
import { Stack } from '@ag.ds-next/react/src/stack';
import { Button } from '@ag.ds-next/react/src/button';
import { useTernaryState } from '@ag.ds-next/react/src/core';
import { FilterIcon } from '@ag.ds-next/react/src/icon';
import { Box } from '@ag.ds-next/react/src/box';
import { Text } from '@ag.ds-next/react/text';
import { SectionAlert } from '@ag.ds-next/react/section-alert';
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
import { useStaffGlobalState } from './StaffProvider';

type StaffMembersTableProps = {
	selectable?: boolean;
	tableRef?: RefObject<HTMLTableElement>;
};

const headingId = 'staff-members-heading';

export const StaffMembersTable = ({
	selectable,
	tableRef,
}: StaffMembersTableProps) => {
	const router = useRouter();

	const { accessRequestsGetState } = useStaffGlobalState();

	const [isDrawerOpen, openDrawer, closeDrawer] = useTernaryState(false);
	const sortAndFilter = useSortAndFilter();
	const { filters, pagination, sort } = sortAndFilter;
	const data = useFetchData({
		filters,
		pagination,
		sort,
	});

	const [isSuccessMessageVisible, setIsSuccessMessageVisible] = useState(
		router.query.success === 'true'
	);
	const [updatedStaffMemberName, setUpdatedStaffMemberName] = useState(() => {
		const updatedStaffMember = accessRequestsGetState().find(
			(staffMemberWithAccessRequest) =>
				router.query.accessRequestId === staffMemberWithAccessRequest?.id
		);

		return `${updatedStaffMember?.firstName} ${updatedStaffMember?.lastName}`;
	});

	return (
		<SortAndFilterProvider value={sortAndFilter}>
			<DataProvider
				value={{ ...data, isSuccessMessageVisible, setUpdatedStaffMemberName }}
			>
				{isSuccessMessageVisible && (
					<SectionAlert
						focusOnMount
						onClose={() => {
							setIsSuccessMessageVisible(false);
							router.replace(router.asPath, undefined, { shallow: true });
						}}
						title={`An email invitation has been sent to ${updatedStaffMemberName}`}
						tone="success"
					>
						<Text as="p">
							{updatedStaffMemberName} will receive an email asking them to
							create a staff account.
						</Text>
					</SectionAlert>
				)}

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

					{selectable && !!data.totalItems && (
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
