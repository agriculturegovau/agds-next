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

const successTypeToMessageText = {
	invite: {
		description: 'will receive an email asking them to create a staff account.',
		title: 'An email invitation has been sent to',
	},
	pause: {
		description: null,
		title: 'The following staff have had their status paused:',
	},
	remove: {
		description: null,
		title: 'The following staff have had their access removed:',
	},
};

export type successType = keyof typeof successTypeToMessageText;

export const StaffMembersTable = ({
	selectable,
	tableRef,
}: StaffMembersTableProps) => {
	const router = useRouter();

	const { staffMembersGetState } = useStaffGlobalState();

	const [isDrawerOpen, openDrawer, closeDrawer] = useTernaryState(false);
	const sortAndFilter = useSortAndFilter();
	const { filters, pagination, sort } = sortAndFilter;
	const data = useFetchData({
		filters,
		pagination,
		sort,
	});

	const [successMessageType, setSuccessMessageType] =
		useState<null | successType>(router.query.successType as successType);
	const [updatedStaffMemberName, setUpdatedStaffMemberName] = useState(() => {
		const updatedStaffMember = staffMembersGetState().find(
			(staffMemberWithAccessRequest) =>
				router.query.staffId === staffMemberWithAccessRequest?.id
		);

		return updatedStaffMember?.name || 'the staff member';
	});

	return (
		<SortAndFilterProvider value={sortAndFilter}>
			<DataProvider
				value={{
					...data,
					setSuccessMessageType,
					setUpdatedStaffMemberName,
				}}
			>
				{successMessageType && (
					<SectionAlert
						focusOnMount
						onClose={() => {
							setSuccessMessageType(null);
							router.replace(router.pathname, undefined, { shallow: true });
						}}
						title={`${successTypeToMessageText[successMessageType].title} ${updatedStaffMemberName}`}
						tone="success"
					>
						{successTypeToMessageText[successMessageType].description && (
							<Text as="p">
								{updatedStaffMemberName}{' '}
								{successTypeToMessageText[successMessageType].description} will
								receive an email asking them to create a staff account.
							</Text>
						)}
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
