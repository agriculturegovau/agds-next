import { RefObject } from 'react';
import { Stack } from '@ag.ds-next/react/stack';
import { Button, ButtonLink } from '@ag.ds-next/react/button';
import { useTernaryState } from '@ag.ds-next/react/core';
import { FilterIcon, PlusIcon } from '@ag.ds-next/react/icon';
import { Box } from '@ag.ds-next/react/box';
import { H2 } from '@ag.ds-next/react/heading';
import { ActiveFilters } from './components/ActiveFilters';
import { SortBySelect } from './components/SortBySelect';
import { DataTable } from './components/DataTable';
import { DashboardFilterDrawer } from './components/DashboardFilterDrawer';
import { FilterSearchInput } from './components/FilterSearchInput';
import {
	FilterBar,
	FilterBarGroup,
	FilterRegion,
} from './components/FilterBar';
import { DashboardPagination } from './components/DashboardPagination';
import { DataTableSelectAllCheckbox } from './components/DataTableSelectAllCheckbox';

type TableFilteringLargeProps = {
	selectable?: boolean;
	tableRef?: RefObject<HTMLTableElement>;
};

const headingId = 'table-heading';

export const TableFilteringLarge = ({
	selectable,
	tableRef,
}: TableFilteringLargeProps) => {
	const [isDrawerOpen, openDrawer, closeDrawer] = useTernaryState(false);
	return (
		<Stack gap={1.5}>
			<H2 id={headingId}>Audits</H2>
			<div>
				<ButtonLink href="#new" iconBefore={PlusIcon}>
					Create request
				</ButtonLink>
			</div>
			<Stack gap={0}>
				<FilterRegion>
					<FilterBar>
						<FilterBarGroup>
							<FilterSearchInput />
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
					<Box padding={1} borderBottom>
						<DataTableSelectAllCheckbox />
					</Box>
				)}
				<DataTable
					ref={tableRef}
					headingId={headingId}
					selectable={selectable}
				/>
			</Stack>
			<DashboardPagination />
		</Stack>
	);
};
