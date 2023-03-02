import { Flex, Stack } from '@ag.ds-next/react/box';
import { Button, ButtonLink } from '@ag.ds-next/react/button';
import { PageContent } from '@ag.ds-next/react/content';
import { FilterIcon, PlusIcon } from '@ag.ds-next/react/icon';
import { PaginationButtons } from '@ag.ds-next/react/pagination';
import { Tags } from '@ag.ds-next/react/tags';
import { useState } from 'react';
import { AppShell } from '../../components/ExampleShell';
import { DashboardItemsPerPageSelect } from './components/DashboardItemsPerPageSelect';
import { DashboardPageTitle } from './components/DashboardPageTitle';
import { DashboardSortBySelect } from './components/DashboardSortBySelect';
import { DashboardTable } from './components/DashboardTable';
import { FilterModal } from './components/FilterModal';
import { GetDataFilters, GetDataPagination, GetDataSort } from './lib/data';
import { BusinessForAudit } from './lib/generateBusinessData';

type ExampleLargeProps = {
	filters: GetDataFilters;
	setFilters: (filters: GetDataFilters) => void;
	sort: GetDataSort;
	setSort: (sort: GetDataSort) => void;
	pagination: GetDataPagination;
	setPagination: (pagination: GetDataPagination) => void;
	resetPagination: () => void;
	resetFilters: () => void;
	totalPages: number;
	loading: boolean;
	data: BusinessForAudit[];
	tableCaption: string;
};

export const ExampleLarge = ({
	sort,
	setSort,
	filters,
	setFilters,
	resetFilters,
	pagination,
	setPagination,
	resetPagination,
	totalPages,
	loading,
	data,
	tableCaption,
}: ExampleLargeProps) => {
	const [isOpen, setIsOpen] = useState(false);

	return (
		<AppShell>
			<DashboardPageTitle />
			<PageContent>
				<Stack gap={2}>
					<Stack gap={1}>
						<Flex gap={1} justifyContent="space-between" alignItems="flex-end">
							<Flex gap={1} alignItems="flex-end">
								<Button
									onClick={() => setIsOpen(true)}
									variant="secondary"
									iconBefore={FilterIcon}
								>
									Show filters
								</Button>
								<ButtonLink href="#new" iconBefore={PlusIcon}>
									New item
								</ButtonLink>
							</Flex>

							<Flex gap={1} alignItems="flex-end">
								<DashboardItemsPerPageSelect
									pagination={pagination}
									setPagination={setPagination}
								/>
								<DashboardSortBySelect
									sort={sort}
									setSort={setSort}
									resetPagination={resetPagination}
								/>
							</Flex>
						</Flex>

						<FilterModal
							isOpen={isOpen}
							onDismiss={() => setIsOpen(false)}
							filters={filters}
							sort={sort}
							setFilters={setFilters}
							setSort={setSort}
							resetPagination={resetPagination}
							resetFilters={resetFilters}
						/>

						<Tags
							heading="Active filters"
							items={[
								{
									label: 'Assignee: Oscar Piastri',
									onRemove: console.log,
								},
								{ label: 'Bar', onRemove: console.log },
								{ label: 'Baz', onRemove: console.log },
							]}
						/>
					</Stack>
					<DashboardTable
						data={data}
						loading={loading}
						itemsPerPage={pagination.perPage}
						caption={tableCaption}
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
		</AppShell>
	);
};
