import { Stack } from '@ag.ds-next/react/box';
import { PageContent } from '@ag.ds-next/react/content';
import { PaginationButtons } from '@ag.ds-next/react/pagination';
import { Select } from '@ag.ds-next/react/select';
import { AppShell } from '../../components/ExampleShell';
import { DashboardFilters } from './components/DashboardFilters';
import { DashboardPageTitle } from './components/DashboardPageTitle';
import { DashboardTable } from './components/DashboardTable';
import { GetDataFilters, GetDataPagination, GetDataSort } from './lib/data';
import { BusinessForAudit } from './lib/generateBusinessData';

type ExamplePersistentFiltersProps = {
	filters: GetDataFilters;
	setFilters: (filters: GetDataFilters) => void;
	sort: GetDataSort;
	setSort: (sort: GetDataSort) => void;
	pagination: GetDataPagination;
	setPagination: (pagination: GetDataPagination) => void;
	resetPagination: () => void;
	resetFilters: () => void;
	totalItems: number;
	totalPages: number;
	loading: boolean;
	data: BusinessForAudit[];
};

export const ExamplePersistentFilters = ({
	sort,
	setSort,
	filters,
	setFilters,
	resetFilters,
	pagination,
	setPagination,
	resetPagination,
	totalItems,
	totalPages,
	loading,
	data,
}: ExamplePersistentFiltersProps) => {
	return (
		<AppShell>
			<DashboardPageTitle />
			<PageContent>
				<Stack gap={2}>
					<DashboardFilters
						filters={filters}
						sort={sort}
						setFilters={setFilters}
						setSort={setSort}
						resetPagination={resetPagination}
						resetFilters={resetFilters}
					/>
					<DashboardTable
						data={data}
						loading={loading}
						totalItems={totalItems}
						itemsPerPage={pagination.perPage}
					/>
					{data.length ? (
						<Stack>
							<PaginationButtons
								currentPage={pagination.page}
								onChange={(page) => setPagination({ ...pagination, page })}
								totalPages={totalPages}
							/>
							<Select
								label="Items per page"
								value={pagination.perPage}
								onChange={(event) =>
									setPagination({
										...pagination,
										perPage: parseInt(event.target.value),
									})
								}
								hideOptionalLabel
								options={[
									{ label: '10', value: '10' },
									{ label: '20', value: '20' },
									{ label: '50', value: '50' },
									{ label: '100', value: '100' },
								]}
							/>
						</Stack>
					) : null}
				</Stack>
			</PageContent>
		</AppShell>
	);
};
