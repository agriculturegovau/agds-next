import { Stack } from '@ag.ds-next/react/stack';
import { PageContent } from '@ag.ds-next/react/content';
import { PaginationButtons } from '@ag.ds-next/react/pagination';
import { Prose } from '@ag.ds-next/react/prose';
import { Column, Columns } from '@ag.ds-next/react/columns';
import { FormStack } from '@ag.ds-next/react/form-stack';
import { DateRangePicker } from '@ag.ds-next/react/date-picker';
import { SkipLinks } from '@ag.ds-next/react/skip-link';
import { Flex } from '@ag.ds-next/react/flex';
import { Text } from '@ag.ds-next/react/text';
import { SortBySelect } from './components/SortBySelect';
import { FilterSearchInput } from './components/FilterSearchInput';
import { FilterStatusSelect } from './components/FilterStatusSelect';
import { GetDataFilters, GetDataPagination, GetDataSort } from './lib/getData';
import { BusinessForAuditWithIndex } from './lib/generateBusinessData';
import { FilterStateSelect } from './components/FilterStateSelect';
import { FilterAssigneeSelect } from './components/FilterAssigneeSelect';
import { DataList } from './components/DataList';
import { FilterDestinationsSelect } from './components/FilterDestinationsSelect';
import { FilterServicesSelect } from './components/FilterServicesSelect';
import { FilterSidebar } from './components/FilterSidebar';

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
	setFilters,
	pagination,
	setPagination,
	totalPages,
	loading,
	data,
}: ListFilteringLargeProps) => {
	return (
		<PageContent>
			<Stack gap={3}>
				<SkipLinks
					links={[{ href: '#main-content', label: 'Skip to main content' }]}
				/>
				<Prose>
					<h1>List Filtering (Large)</h1>
					<p>
						The medium filtering pattern is for cases where the number of
						filterable fields is between 1 and 4 secondary filters. Our
						FilterBar is used to reveal all filterable fields when the button is
						pressed.
					</p>
					<p>Here it is applied to a list of establishments.</p>
				</Prose>
				<Columns gap={{ xs: 1, md: 3 }}>
					<Column columnSpan={{ xs: 12, md: 4 }}>
						<FilterSidebar>
							<FormStack>
								<FilterSearchInput
									filters={filters}
									setFilters={setFilters}
									block
								/>
								<FilterStatusSelect
									filters={filters}
									setFilters={setFilters}
									block
								/>
								<FilterStateSelect
									filters={filters}
									setFilters={setFilters}
									block
								/>
								<FilterAssigneeSelect
									filters={filters}
									setFilters={setFilters}
									block
								/>
								<FilterDestinationsSelect
									filters={filters}
									setFilters={setFilters}
									block
								/>
								<FilterServicesSelect
									filters={filters}
									setFilters={setFilters}
								/>
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
							</FormStack>
						</FilterSidebar>
					</Column>
					<Column
						as="main"
						id="main-content"
						tabIndex={-1}
						css={{ '&:focus': { outline: 'none' } }}
						columnSpan={{ xs: 12, md: 8 }}
					>
						<Stack gap={2}>
							<Flex
								flexDirection={{ xs: 'column', md: 'row' }}
								justifyContent={{ xs: 'flex-start', md: 'space-between' }}
								alignItems={{ xs: 'flex-start', md: 'flex-end' }}
								gap={1.5}
								borderBottom
								paddingBottom={1}
							>
								<Text
									fontSize={{
										xs: 'sm',
										md: 'lg',
									}}
								>
									163 Items
								</Text>
								<SortBySelect sort={sort} setSort={setSort} />
							</Flex>
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
			</Stack>
		</PageContent>
	);
};
