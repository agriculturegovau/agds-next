import { Stack } from '@ag.ds-next/react/box';
import { Button, ButtonLink } from '@ag.ds-next/react/button';
import { ContentBleed, PageContent } from '@ag.ds-next/react/content';
import { PlusIcon } from '@ag.ds-next/react/icon';
import { PaginationButtons } from '@ag.ds-next/react/pagination';
import { Prose } from '@ag.ds-next/react/prose';
import { Column, Columns } from '@ag.ds-next/react/columns';
import { FormStack } from '@ag.ds-next/react/form-stack';
import { DateRangePicker } from '@ag.ds-next/react/date-picker';
import { SkipLinks } from '@ag.ds-next/react/skip-link';
import { ActiveFilters } from './components/ActiveFilters';
import { SortBySelect } from './components/SortBySelect';
import { FilterSearchInput } from './components/FilterSearchInput';
import { FilterStatusSelect } from './components/FilterStatusSelect';
import { GetDataFilters, GetDataPagination, GetDataSort } from './lib/getData';
import { BusinessForAuditWithIndex } from './lib/generateBusinessData';
import { FilterStateSelect } from './components/FilterStateSelect';
import { FilterAssigneeSelect } from './components/FilterAssigneeSelect';
import { DataList } from './components/DataList';

type ListFilteringLargeProps = {
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
};

/** These patterns are draft designs and are not yet ready for production. */
export const ListFilteringLarge = ({
	sort,
	setSort,
	filters,
	removeFilter,
	setFilters,
	resetFilters,
	pagination,
	setPagination,
	totalPages,
	loading,
	data,
}: ListFilteringLargeProps) => {
	return (
		<PageContent>
			<SkipLinks
				links={[{ href: '#main-content', label: 'Skip to main content' }]}
			/>
			<Columns>
				<Column columnSpan={{ xs: 12, md: 4, lg: 3 }}>
					<ContentBleed visible={{ md: false }}>
						<FormStack>
							<ActiveFilters
								filters={filters}
								removeFilter={removeFilter}
								resetFilters={resetFilters}
							/>
							<FilterSearchInput filters={filters} setFilters={setFilters} />
							<FilterStatusSelect filters={filters} setFilters={setFilters} />
							<FilterStateSelect filters={filters} setFilters={setFilters} />
							<FilterAssigneeSelect filters={filters} setFilters={setFilters} />
							<DateRangePicker
								fromLabel="Registered from"
								toLabel="Registered to"
								hideOptionalLabel
								onChange={(requestDate) =>
									setFilters({ ...filters, requestDate })
								}
								onFromInputChange={(from) =>
									setFilters({
										...filters,
										requestDate: { ...filters.requestDate, from },
									})
								}
								onToInputChange={(to) =>
									setFilters({
										...filters,
										requestDate: { ...filters.requestDate, to },
									})
								}
								value={filters.requestDate}
							/>
							<Button
								variant="secondary"
								onClick={() => {
									resetFilters();
								}}
							>
								Reset filters
							</Button>
						</FormStack>
					</ContentBleed>
				</Column>
				<Column
					as="main"
					id="main-content"
					tabIndex={-1}
					css={{ '&:focus': { outline: 'none' } }}
					columnSpan={{ xs: 12, md: 8 }}
					columnStart={{ lg: 5 }}
				>
					<Stack gap={2}>
						<Prose>
							<h1>List Filtering (Large)</h1>
							<p>
								The medium filtering pattern is for cases where the number of
								filterable fields is between 1 and 4 secondary filters. Our
								FilterBar is used to reveal all filterable fields when the
								button is pressed.
							</p>
						</Prose>
						<div>
							<ButtonLink href="#new" iconBefore={PlusIcon}>
								New item
							</ButtonLink>
						</div>

						<SortBySelect sort={sort} setSort={setSort} />

						<DataList data={data} loading={loading} />

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
				</Column>
			</Columns>
		</PageContent>
	);
};
