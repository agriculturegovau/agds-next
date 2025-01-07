import { RefObject } from 'react';
import { Stack } from '../../../packages/react/src/stack';
import { Button, ButtonLink } from '../../../packages/react/src/button';
import { useTernaryState } from '../../../packages/react/src/core';
import { FilterIcon, PlusIcon } from '../../../packages/react/src/icon';
import { Box } from '../../../packages/react/src/box';
import { H2 } from '../../../packages/react/src/heading';
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
								iconBefore={FilterIcon}
								onClick={openDrawer}
								variant="secondary"
							>
								Show filters
							</Button>
						</FilterBarGroup>
						<SortBySelect />
					</FilterBar>
					<DashboardFilterDrawer
						closeDrawer={closeDrawer}
						isDrawerOpen={isDrawerOpen}
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
		</Stack>
	);
};
