import { Flex, Stack } from '@ag.ds-next/react/box';
import { Button, ButtonLink } from '@ag.ds-next/react/button';
import { PageContent } from '@ag.ds-next/react/content';
import {
	ChevronDownIcon,
	ChevronUpIcon,
	FilterIcon,
	PlusIcon,
} from '@ag.ds-next/react/icon';
import { PaginationButtons } from '@ag.ds-next/react/pagination';
import { useCallback, useState } from 'react';
import { ActiveFilters } from './components/ActiveFilters';
import { FilterAccordion } from './components/FilterAccordion';
import { SortBySelect } from './components/SortBySelect';
import { DashboardTable, tableId } from './components/DashboardTable';
import { FilterSearchInput } from './components/FilterSearchInput';
import { FilterStatusSelect } from './components/FilterStatusSelect';
import { GetDataFilters, GetDataPagination, GetDataSort } from './lib/getData';
import { BusinessForAuditWithIndex } from './lib/generateBusinessData';
import { Prose } from '@ag.ds-next/react/prose';
import {
	FilterBar,
	FilterBarGroup,
	FilterRegion,
} from './components/FilterBar';

type MediumExampleProps = {
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

export const ExampleMedium = ({
	sort,
	setSort,
	filters,
	removeFilter,
	setFilters,
	resetFilters,
	pagination,
	setPagination,
	resetPagination,
	totalPages,
	totalItems,
	loading,
	data,
	tableCaption,
}: MediumExampleProps) => {
	const [isOpen, setIsOpen] = useState(false);

	// IDs for accordion to ensure accessibility
	const buttonId = 'filter-button';
	const bodyId = 'filter-body';

	const onButtonClick = useCallback(() => {
		if (isOpen) {
			setIsOpen(false);
		} else {
			setIsOpen(true);
		}
	}, [isOpen, open, close]);

	return (
		<PageContent>
			<Stack gap={2}>
				<Prose>
					<h1>Table Filtering (Medium)</h1>
					<p>
						The medium filtering pattern is for cases where the number of
						filterable fields is between 1 and 4 secondary filters. Our
						FilterBar is used to reveal all filterable fields when the button is
						pressed.
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
								<FilterStatusSelect
									filters={filters}
									setFilters={setFilters}
									resetPagination={resetPagination}
								/>
								<Button
									onClick={onButtonClick}
									variant="secondary"
									iconBefore={FilterIcon}
									iconAfter={isOpen ? ChevronUpIcon : ChevronDownIcon}
									// accessibility
									aria-label="more filters"
									id={buttonId}
									aria-controls={bodyId}
									aria-expanded={isOpen}
								>
									{isOpen ? 'Hide filters' : 'Show filters'}
								</Button>
							</FilterBarGroup>

							<SortBySelect
								sort={sort}
								setSort={setSort}
								resetPagination={resetPagination}
							/>
						</FilterBar>
						<FilterAccordion
							id={bodyId}
							ariaLabelledBy={buttonId}
							filters={filters}
							isOpen={isOpen}
							setFilters={setFilters}
							resetPagination={resetPagination}
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
					data={data}
					loading={loading}
					itemsPerPage={pagination.perPage}
					caption={tableCaption}
					sort={sort}
					setSort={setSort}
					totalItems={totalItems}
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
