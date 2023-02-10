import { Flex, Stack } from '@ag.ds-next/react/box';
import { ButtonLink } from '@ag.ds-next/react/button';
import { PageContent } from '@ag.ds-next/react/content';
import { PaginationButtons } from '@ag.ds-next/react/pagination';
import { AppShell } from '../../components/ExampleShell';
import { DashboardPageTitle } from './components/DashboardPageTitle';
import { DashboardFilterStatus } from './components/DashboardFilterStatus';
import { DashboardTable } from './components/DashboardTable';
import { GetDataFilters, GetDataPagination, GetDataSort } from './lib/data';
import { BusinessForAudit } from './lib/generateBusinessData';

type ExampleBasicProps = {
	filters: GetDataFilters;
	setFilters: (filters: GetDataFilters) => void;
	pagination: GetDataPagination;
	setPagination: (pagination: GetDataPagination) => void;
	resetPagination: () => void;
	totalItems: number;
	totalPages: number;
	loading: boolean;
	data: BusinessForAudit[];
};

export const ExampleBasic = ({
	filters,
	setFilters,
	pagination,
	setPagination,
	resetPagination,
	totalItems,
	totalPages,
	loading,
	data,
}: ExampleBasicProps) => {
	return (
		<AppShell>
			<DashboardPageTitle />
			<PageContent>
				<Stack gap={2}>
					<Flex gap={1} alignItems="flex-end">
						<DashboardFilterStatus
							filters={filters}
							setFilters={setFilters}
							resetPagination={resetPagination}
						/>
						<ButtonLink href="#" variant="primary">
							Create request
						</ButtonLink>
					</Flex>
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
						</Stack>
					) : null}
				</Stack>
			</PageContent>
		</AppShell>
	);
};
