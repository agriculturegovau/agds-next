import { Flex, Stack } from '@ag.ds-next/react/box';
import { ButtonLink } from '@ag.ds-next/react/button';
import { PageContent } from '@ag.ds-next/react/content';
import { PaginationButtons } from '@ag.ds-next/react/pagination';
import { AppShell } from '../../components/ExampleShell';
import { DashboardPageTitle } from './components/DashboardPageTitle';
import { FilterStatusSelect } from './components/FilterStatusSelect';
import { DashboardTable } from './components/DashboardTable';
import { GetDataFilters, GetDataPagination, GetDataSort } from './lib/data';
import { BusinessForAudit } from './lib/generateBusinessData';
import { PlusIcon } from '@ag.ds-next/react/icon';
import { DashboardSortBySelect } from './components/DashboardSortBySelect';
import { FilterAssigneeSelect } from './components/FilterAssigneeSelect';

type SmallExampleProps = {
	sort: GetDataSort;
	setSort: (sort: GetDataSort) => void;
	filters: GetDataFilters;
	setFilters: (filters: GetDataFilters) => void;
	pagination: GetDataPagination;
	setPagination: (pagination: GetDataPagination) => void;
	resetPagination: () => void;
	totalPages: number;
	loading: boolean;
	data: BusinessForAudit[];
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
	loading,
	data,
	tableCaption,
}: SmallExampleProps) => {
	return (
		<AppShell>
			<DashboardPageTitle title="Requests" />
			<PageContent>
				<Stack gap={2}>
					<Flex gap={1} alignItems="flex-end">
						<ButtonLink href="#new" iconBefore={PlusIcon}>
							Create request
						</ButtonLink>
					</Flex>

					<Flex gap={1} alignItems="flex-end" justifyContent="space-between">
						<Flex gap={1} alignItems="flex-end">
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
						</Flex>

						<DashboardSortBySelect
							sort={sort}
							setSort={setSort}
							resetPagination={resetPagination}
						/>
					</Flex>
					<DashboardTable
						data={data}
						loading={loading}
						caption={tableCaption}
						itemsPerPage={pagination.perPage}
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
