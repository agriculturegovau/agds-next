import { RefObject, useState } from 'react';
import { Stack } from '@ag.ds-next/react/stack';
import { Button, ButtonLink } from '@ag.ds-next/react/button';
import { PageContent } from '@ag.ds-next/react/content';
import { FilterIcon, PlusIcon } from '@ag.ds-next/react/icon';
import { Prose } from '@ag.ds-next/react/prose';
import { PaginationButtons } from '@ag.ds-next/react/pagination';
import { ActiveFilters } from './components/ActiveFilters';
import { SortBySelect } from './components/SortBySelect';
import { DashboardTable } from './components/DashboardTable';
import { DashboardFilterModal } from './components/DashboardFilterModal';
import { FilterSearchInput } from './components/FilterSearchInput';
import { GetDataFilters, GetDataPagination, GetDataSort } from './lib/getData';
import { BusinessForAuditWithIndex } from './lib/generateBusinessData';
import {
	FilterBar,
	FilterBarGroup,
	FilterRegion,
} from './components/FilterBar';

type TableFilteringLargeProps = {
	// sort
	sort: GetDataSort;
	setSort: (sort: GetDataSort) => void;
	// filter
	filters: GetDataFilters;
	setFilters: (filters: GetDataFilters) => void;
	resetFilters: () => void;
	removeFilter: (filter: keyof GetDataFilters) => void;
	// pagination
	pagination: GetDataPagination;
	setPagination: (pagination: GetDataPagination) => void;
	// data
	totalPages: number;
	totalItems: number;
	loading: boolean;
	data: BusinessForAuditWithIndex[];
	tableCaption: string;
	tableRef?: RefObject<HTMLTableElement>;
};

/** These patterns are draft designs and are not yet ready for production. */
export const TableFilteringLarge = ({
	sort,
	setSort,
	filters,
	setFilters,
	removeFilter,
	resetFilters,
	pagination,
	setPagination,
	totalPages,
	totalItems,
	loading,
	data,
	tableCaption,
	tableRef,
}: TableFilteringLargeProps) => {
	const [isOpen, setIsOpen] = useState(false);

	return (
		<PageContent>
			<Stack gap={2}>
				<Prose>
					<h1>Table Filtering (Large)</h1>
					<p>
						The large filtering pattern is for cases where the number of
						filterable fields exceeds 5. Our FilterModal is used to reveal all
						options as the user elects to show them. You may elect to show up to
						two &apos;primary&apos; filters in the main content area next to the
						button which opens the modal.
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
								<FilterSearchInput filters={filters} setFilters={setFilters} />
								<Button
									onClick={() => setIsOpen(true)}
									variant="secondary"
									iconBefore={FilterIcon}
								>
									Show filters
								</Button>
							</FilterBarGroup>

							<SortBySelect sort={sort} setSort={setSort} />
						</FilterBar>
						<DashboardFilterModal
							isOpen={isOpen}
							onDismiss={() => setIsOpen(false)}
							filters={filters}
							setFilters={setFilters}
							resetFilters={resetFilters}
						/>
						<ActiveFilters
							filters={filters}
							removeFilter={removeFilter}
							resetFilters={resetFilters}
						/>
					</FilterRegion>
				</Stack>
				<DashboardTable
					ref={tableRef}
					data={data}
					loading={loading}
					itemsPerPage={pagination.perPage}
					totalItems={totalItems}
					caption={tableCaption}
					sort={sort}
					setSort={setSort}
				/>
				{data.length ? (
					<Stack>
						<PaginationButtons
							currentPage={pagination.page}
							onChange={(page) => setPagination({ ...pagination, page })}
							totalPages={totalPages}
						/>
					</Stack>
				) : null}
			</Stack>
		</PageContent>
	);
};
