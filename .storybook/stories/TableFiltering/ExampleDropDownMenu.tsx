import { Flex, Stack } from '@ag.ds-next/react/box';
import { ButtonLink } from '@ag.ds-next/react/button';
import { PageContent } from '@ag.ds-next/react/content';
import { PlusIcon } from '@ag.ds-next/react/icon';
import { PaginationButtons } from '@ag.ds-next/react/pagination';
import { Select } from '@ag.ds-next/react/select';
import { AppShell } from '../../components/ExampleShell';
import { DashboardPageTitle } from './components/DashboardPageTitle';
import { DashboardSortBySelect } from './components/DashboardSortBySelect';
import { DashboardTable } from './components/DashboardTable';
import { FilterMenu } from './components/FilterMenu';
import { GetDataFilters, GetDataPagination, GetDataSort } from './lib/data';
import { BusinessForAudit } from './lib/generateBusinessData';

type ExampleDropDownMenuProps = {
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

export const ExampleDropDownMenu = ({
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
}: ExampleDropDownMenuProps) => {
	return (
		<AppShell>
			<DashboardPageTitle />
			<PageContent>
				<Stack gap={2}>
					<Flex
						gap={1}
						justifyContent="space-between"
						alignItems={{ sm: 'flex-end' }}
						flexDirection={{ xs: 'column', sm: 'row' }}
					>
						<Flex
							gap={1}
							flexDirection={{ xs: 'column', md: 'row' }}
							alignItems={{ md: 'flex-end' }}
							flexWrap="wrap"
						>
							<DashboardSortBySelect
								sort={sort}
								setSort={setSort}
								resetPagination={resetPagination}
							/>
							<Select
								label="Items per page"
								maxWidth="sm"
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
							<FilterMenu
								filters={filters}
								setFilters={setFilters}
								resetPagination={resetPagination}
								resetFilters={resetFilters}
							/>
						</Flex>
						<ButtonLink href="#new" iconBefore={PlusIcon}>
							New item
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
