import { RefObject } from 'react';
import { Stack } from '@ag.ds-next/react/stack';
import { Button, ButtonLink } from '@ag.ds-next/react/button';
import { useTernaryState } from '@ag.ds-next/react/core';
import { PageContent } from '@ag.ds-next/react/content';
import { FilterIcon, PlusIcon } from '@ag.ds-next/react/icon';
import { Prose } from '@ag.ds-next/react/prose';
import { ActiveFilters } from './components/ActiveFilters';
import { SortBySelect } from './components/SortBySelect';
import { DashboardTable } from './components/DashboardTable';
import { DashboardFilterDrawer } from './components/DashboardFilterDrawer';
import { FilterSearchInput } from './components/FilterSearchInput';
import { BusinessForAuditWithIndex } from './lib/generateBusinessData';
import {
	FilterBar,
	FilterBarGroup,
	FilterRegion,
} from './components/FilterBar';
import { DashboardPagination } from './components/DashboardPagination';

type TableFilteringLargeProps = {
	// data
	totalPages: number;
	totalItems: number;
	loading: boolean;
	data: BusinessForAuditWithIndex[];
	tableCaption: string;
	tableRef?: RefObject<HTMLTableElement>;
};

export const TableFilteringLarge = ({
	totalPages,
	totalItems,
	loading,
	data,
	tableCaption,
	tableRef,
}: TableFilteringLargeProps) => {
	const [isDrawerOpen, openDrawer, closeDrawer] = useTernaryState(false);
	return (
		<PageContent>
			<Stack gap={2}>
				<Prose>
					<h1>Table Filtering (Large)</h1>
					<p>
						The large filtering pattern is for cases where the number of
						filterable fields exceeds 6. Our Filter drawer component is used to
						reveal all filters as the user elects to show them. You may elect to
						show up to two primary filters in the main content area next to the
						button which opens the drawer.
					</p>
				</Prose>
				<Stack gap={1}>
					<div>
						<ButtonLink href="#new" iconBefore={PlusIcon}>
							New item
						</ButtonLink>
					</div>
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
				</Stack>
				<DashboardTable
					ref={tableRef}
					data={data}
					loading={loading}
					totalItems={totalItems}
					caption={tableCaption}
				/>

				<DashboardPagination data={data} totalPages={totalPages} />
			</Stack>
		</PageContent>
	);
};
