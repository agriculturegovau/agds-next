import { Flex, Stack } from '@ag.ds-next/react/box';
import { ButtonLink } from '@ag.ds-next/react/button';
import { PageContent } from '@ag.ds-next/react/content';
import { PaginationButtons } from '@ag.ds-next/react/pagination';
import { AppShell } from '../../components/ExampleShell';
import { DashboardPageTitle } from './components/DashboardPageTitle';
import { DashboardFilterStatus } from './components/DashboardFilterStatus';
import { DashboardTable } from './components/DashboardTable';
import { GetDataFilters, GetDataPagination } from './lib/data';
import { BusinessForAudit } from './lib/generateBusinessData';
import { PlusIcon } from '@ag.ds-next/react/icon';

type SmallExampleProps = {
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
						<DashboardFilterStatus
							filters={filters}
							setFilters={setFilters}
							resetPagination={resetPagination}
						/>
						<ButtonLink href="#new" iconBefore={PlusIcon}>
							Create request
						</ButtonLink>
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
