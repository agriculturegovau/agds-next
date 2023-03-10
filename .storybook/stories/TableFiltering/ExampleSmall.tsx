import { Flex, Stack } from '@ag.ds-next/react/box';
import { ButtonLink } from '@ag.ds-next/react/button';
import { PageContent } from '@ag.ds-next/react/content';
import { PaginationButtons } from '@ag.ds-next/react/pagination';
import { FilterStatusSelect } from './components/FilterStatusSelect';
import { DashboardTable, tableId } from './components/DashboardTable';
import { GetDataFilters, GetDataPagination, GetDataSort } from './lib/getData';
import { BusinessForAuditWithIndex } from './lib/generateBusinessData';
import { PlusIcon } from '@ag.ds-next/react/icon';
import { SortBySelect } from './components/SortBySelect';
import { FilterAssigneeSelect } from './components/FilterAssigneeSelect';
import { Prose } from '@ag.ds-next/react/prose';
import {
	FilterBar,
	FilterBarGroup,
	FilterRegion,
} from './components/FilterBar';

export type SmallExampleProps = {
	// sort
	sort: GetDataSort;
	setSort: (sort: GetDataSort) => void;
	// filter
	filters: GetDataFilters;
	setFilters: (filters: GetDataFilters) => void;
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

export const ExampleSmall = ({
	sort,
	setSort,
	filters,
	setFilters,
	pagination,
	setPagination,
	resetPagination,
	totalPages,
	totalItems,
	loading,
	data,
	tableCaption,
}: SmallExampleProps) => {
	return (
		<PageContent>
			<Stack gap={2}>
				<Prose>
					<h1>Table Filtering (small)</h1>
					<p>
						In the most basic cases of filtering with up to three filterable
						fields, we can show all filters in a row above the table.
					</p>
				</Prose>
				<div>
					<ButtonLink href="#new" iconBefore={PlusIcon}>
						Create request
					</ButtonLink>
				</div>

				<FilterRegion>
					<FilterBar>
						<FilterBarGroup>
							<FilterStatusSelect
								filters={filters}
								setFilters={setFilters}
								resetPagination={resetPagination}
							/>
							<FilterAssigneeSelect
								filters={filters}
								setFilters={setFilters}
								resetPagination={resetPagination}
							/>
						</FilterBarGroup>

						<SortBySelect
							sort={sort}
							setSort={setSort}
							resetPagination={resetPagination}
						/>
					</FilterBar>
				</FilterRegion>

				<DashboardTable
					data={data}
					loading={loading}
					caption={tableCaption}
					itemsPerPage={pagination.perPage}
					totalItems={totalItems}
				/>
				{data.length ? (
					<PaginationButtons
						currentPage={pagination.page}
						onChange={(page) => setPagination({ ...pagination, page })}
						totalPages={totalPages}
					/>
				) : null}
			</Stack>
		</PageContent>
	);
};
