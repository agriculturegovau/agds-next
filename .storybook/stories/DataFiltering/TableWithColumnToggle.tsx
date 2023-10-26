import { RefObject, useCallback } from 'react';
import { Stack } from '@ag.ds-next/react/stack';
import { Button, ButtonLink } from '@ag.ds-next/react/button';
import { useTernaryState } from '@ag.ds-next/react/core';
import { FilterIcon, PlusIcon } from '@ag.ds-next/react/icon';
import { Box } from '@ag.ds-next/react/box';
import { H2 } from '@ag.ds-next/react/heading';
import { ControlGroup } from '@ag.ds-next/react/control-group';
import { Checkbox } from '@ag.ds-next/react/checkbox';
import {
	DropdownMenu,
	DropdownMenuButton,
	DropdownMenuPanel,
} from '@ag.ds-next/react/dropdown-menu';
import { Flex } from '@ag.ds-next/react/flex';
import { ActiveFilters } from './components/ActiveFilters';
import { SortBySelect } from './components/SortBySelect';
import { DataTable, dataTableHeaders } from './components/DataTable';
import { DashboardFilterDrawer } from './components/DashboardFilterDrawer';
import { FilterSearchInput } from './components/FilterSearchInput';
import {
	FilterBar,
	FilterBarGroup,
	FilterRegion,
} from './components/FilterBar';
import { DashboardPagination } from './components/DashboardPagination';
import { DataTableSelectAllCheckbox } from './components/DataTableSelectAllCheckbox';
import { BusinessForAudit } from './lib/generateBusinessData';
import { useColumnPreferences } from './lib/useColumnPreferences';

type TableWithColumnToggleProps = {
	selectable?: boolean;
	tableRef?: RefObject<HTMLTableElement>;
};

const headingId = 'table-heading';

export const TableWithColumnToggle = ({
	selectable,
	tableRef,
}: TableWithColumnToggleProps) => {
	const [isDrawerOpen, openDrawer, closeDrawer] = useTernaryState(false);
	const { columns, setColumns } = useColumnPreferences();

	const handlerForKey = useCallback(
		(key: keyof BusinessForAudit) => () =>
			setColumns((current) =>
				current.includes(key)
					? current.filter((v) => v !== key)
					: [...current, key]
			),
		[setColumns]
	);
	const isChecked = (key: keyof BusinessForAudit) => columns.includes(key);

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

						<Flex gap={1} alignItems="flex-end">
							<DropdownMenu>
								<DropdownMenuButton variant="secondary">
									Toggle columns
								</DropdownMenuButton>
								<DropdownMenuPanel>
									<ControlGroup label="Show columns" block>
										{(
											Object.keys(
												dataTableHeaders
											) as (keyof BusinessForAudit)[]
										)
											.filter((key) => key !== 'businessName')
											.map((key) => (
												<Checkbox
													key={key}
													checked={isChecked(key)}
													onChange={handlerForKey(key)}
												>
													{key}
												</Checkbox>
											))}
									</ControlGroup>
								</DropdownMenuPanel>
							</DropdownMenu>
							<SortBySelect />
						</Flex>
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
					columns={columns}
					tableLayout="auto"
				/>
			</Stack>
			<DashboardPagination />
		</Stack>
	);
};
