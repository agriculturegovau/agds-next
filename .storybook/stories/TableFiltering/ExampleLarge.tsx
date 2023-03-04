import { Flex, Stack } from '@ag.ds-next/react/box';
import { Button, ButtonLink } from '@ag.ds-next/react/button';
import { PageContent } from '@ag.ds-next/react/content';
import { FilterIcon, PlusIcon } from '@ag.ds-next/react/icon';
import { Tags } from '@ag.ds-next/react/tags';
import { useState } from 'react';
import { AppShell } from '../../components/ExampleShell';
import { ActiveFilters } from './components/ActiveFilters';
import { AdvancedTablePagination } from './components/AdvancedPagination';
import { DashboardPageTitle } from './components/DashboardPageTitle';
import { DashboardSortBySelect } from './components/DashboardSortBySelect';
import { DashboardTable } from './components/DashboardTable';
import { FilterModal } from './components/FilterModal';
import { FilterSearchInput } from './components/FilterSearchInput';
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

							<DashboardSortBySelect
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

						<ActiveFilters filters={filters} />
					</Stack>
					<DashboardTable
						data={data}
						loading={loading}
						itemsPerPage={pagination.perPage}
						caption={tableCaption}
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
		</AppShell>
	);
};
