import { Flex, Stack } from '@ag.ds-next/react/box';
import { Button, ButtonLink } from '@ag.ds-next/react/button';
import { PageContent } from '@ag.ds-next/react/content';
import { FilterIcon, PlusIcon } from '@ag.ds-next/react/icon';
import { useState } from 'react';
import { ActiveFilters } from './components/ActiveFilters';
import { AdvancedTablePagination } from './components/AdvancedPagination';
import { SortBySelect } from './components/SortBySelect';
import { DashboardTable } from './components/DashboardTable';
import { FilterModal } from './components/FilterModal';
import { FilterSearchInput } from './components/FilterSearchInput';
import { GetDataFilters, GetDataPagination, GetDataSort } from './lib/getData';
import { BusinessForAuditWithIndex } from './lib/generateBusinessData';
import { Prose } from '@ag.ds-next/react/prose';

type ExampleLargeProps = {
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
	resetPagination: () => void;
	// data
	totalPages: number;
	totalItems: number;
	loading: boolean;
	data: BusinessForAuditWithIndex[];
	tableCaption: string;
};

export const ExampleLarge = ({
	sort,
	setSort,
	filters,
	setFilters,
	removeFilter,
	resetFilters,
	pagination,
	setPagination,
	resetPagination,
	totalPages,
	totalItems,
	loading,
	data,
	tableCaption,
}: ExampleLargeProps) => {
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
						two 'primary' filters in the main content area next to the button
						which opens the modal.
					</p>
				</Prose>
				<Stack gap={1}>
					<div>
						<ButtonLink href="#new" iconBefore={PlusIcon}>
							New item
						</ButtonLink>
					</div>
					<Flex gap={1} justifyContent="space-between" alignItems="flex-end">
						<Flex gap={1} alignItems="flex-end">
							<FilterSearchInput filters={filters} setFilters={setFilters} />
							<Button
								onClick={() => setIsOpen(true)}
								variant="secondary"
								iconBefore={FilterIcon}
							>
								Show filters
							</Button>
						</Flex>

						<SortBySelect
							sort={sort}
							setSort={setSort}
							resetPagination={resetPagination}
						/>
					</Flex>

					<FilterModal
						isOpen={isOpen}
						onDismiss={() => setIsOpen(false)}
						filters={filters}
						setFilters={setFilters}
						resetPagination={resetPagination}
					/>

					<ActiveFilters
						filters={filters}
						removeFilter={removeFilter}
						resetFilters={resetFilters}
					/>
				</Stack>
				<DashboardTable
					data={data}
					loading={loading}
					itemsPerPage={pagination.perPage}
					totalItems={totalItems}
					caption={tableCaption}
					sort={sort}
					setSort={setSort}
				/>
				{data.length ? (
					<AdvancedTablePagination
						pagination={pagination}
						setPagination={setPagination}
						totalPages={totalPages}
					/>
				) : null}
			</Stack>
		</PageContent>
	);
};
