import { Box } from '@ag.ds-next/react/box';
import { Button, ButtonLink } from '@ag.ds-next/react/button';
import { useTernaryState, mq, tokens } from '@ag.ds-next/react/core';
import { DirectionLink } from '@ag.ds-next/react/direction-link';
import {
	DropdownMenu,
	DropdownMenuButton,
	DropdownMenuGroup,
	DropdownMenuItemRadio,
	DropdownMenuPanel,
} from '@ag.ds-next/react/dropdown-menu';
import { FilterIcon, PlusIcon } from '@ag.ds-next/react/icon';
import { Stack } from '@ag.ds-next/react/stack';
import { ActiveFilters } from '../../DataFiltering/components/ActiveFilters';
import { DashboardFilterDrawer } from '../../DataFiltering/components/DashboardFilterDrawer';
import { DashboardPagination } from '../../DataFiltering/components/DashboardPagination';
import { DashboardTable } from '../../DataFiltering/components/DashboardTable';
import {
	FilterBar,
	FilterBarGroup,
	FilterRegion,
} from '../../DataFiltering/components/FilterBar';
import { FilterSearchInput } from '../../DataFiltering/components/FilterSearchInput';
import { useSortAndFilterContext } from '../../DataFiltering/lib/contexts';
import { BusinessForAudit } from '../../DataFiltering/lib/generateBusinessData';
import { GetDataSort } from '../../DataFiltering/lib/getData';
import { useSelectedItemContext } from '../lib/context';
import { LIST_SECTION_ID } from '../lib/utils';

const SortMenu = () => {
	const { sort, setSort } = useSortAndFilterContext();

	const sortOptions: (GetDataSort & {
		label: string;
	})[] = [
		{
			field: 'businessName',
			order: 'ASC',
			label: 'Business name (A-Z)',
		},
		{
			field: 'businessName',
			order: 'DESC',
			label: 'Business name (Z-A)',
		},
		{
			field: 'assignee',
			order: 'ASC',
			label: 'Assignee (A-Z)',
		},
		{
			field: 'assignee',
			order: 'DESC',
			label: 'Assignee (Z-A)',
		},
		{
			field: 'requestDate',
			order: 'ASC',
			label: 'Date registered (oldest first)',
		},
		{
			field: 'requestDate',
			order: 'DESC',
			label: 'Date registered (newest first)',
		},
	];

	return (
		<DropdownMenu>
			<DropdownMenuButton variant="secondary">Sort by</DropdownMenuButton>
			<DropdownMenuPanel>
				<DropdownMenuGroup label="Sort by">
					{sortOptions.map(({ field, order, label }, index) => (
						<DropdownMenuItemRadio
							key={index}
							checked={sort === { field, order }}
							onClick={() => {
								setSort({
									field: field,
									order: order,
								});
							}}
						>
							{label}
						</DropdownMenuItemRadio>
					))}
				</DropdownMenuGroup>
			</DropdownMenuPanel>
		</DropdownMenu>
	);
};

export const DenseDashboardTable = () => {
	const [isDrawerOpen, openDrawer, closeDrawer] = useTernaryState(false);
	const { selectedItemIndex } = useSelectedItemContext();
	const tableColumns: (keyof BusinessForAudit)[] = [
		'businessName',
		'status',
		'assignee',
	];

	return (
		<Stack
			gap={1}
			as="aside"
			aria-label="List of businesses"
			id={LIST_SECTION_ID}
			tabIndex={-1}
			css={{
				overflowX: 'auto',
				maxHeight: '100%',
				// maxHeight: 'calc(40vh - 100px)',
				// [tokens.mediaQuery.min.md]: {
				// 	maxHeight: 'calc(50vh - 100px)',
				// },
				// [tokens.mediaQuery.min.xxl]: {
				// 	maxHeight: 'calc(100vh - 100px)',
				// },
			}}
		>
			<Stack gap={1} padding={1}>
				<FilterRegion>
					<FilterBar>
						<FilterBarGroup>
							<FilterSearchInput />
							<SortMenu />
							<Button
								onClick={openDrawer}
								variant="secondary"
								iconBefore={FilterIcon}
							>
								Filter
							</Button>
							<ButtonLink href="#new" iconBefore={PlusIcon}>
								New item
							</ButtonLink>
						</FilterBarGroup>
					</FilterBar>

					<DashboardFilterDrawer
						isDrawerOpen={isDrawerOpen}
						closeDrawer={closeDrawer}
					/>
					<ActiveFilters />
				</FilterRegion>
			</Stack>
			<DashboardTable
				selectedItemIndex={selectedItemIndex}
				columns={tableColumns}
			/>
			<DashboardPagination />

			<Box padding={1}>
				<DirectionLink direction="up" href={`#${LIST_SECTION_ID}`}>
					Back to top
				</DirectionLink>
			</Box>
		</Stack>
	);
};
