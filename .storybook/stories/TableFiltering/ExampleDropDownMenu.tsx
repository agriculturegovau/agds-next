import { Box, Flex, Stack } from '@ag.ds-next/react/box';
import { ButtonLink } from '@ag.ds-next/react/button';
import { PageContent } from '@ag.ds-next/react/content';
import { PlusIcon } from '@ag.ds-next/react/icon';
import { Text } from '@ag.ds-next/react/text';
import { PaginationButtons } from '@ag.ds-next/react/pagination';
import { Select } from '@ag.ds-next/react/select';
import { AppShell } from '../../components/ExampleShell';
import { DashboardPageTitle } from './components/DashboardPageTitle';
import { DashboardSortBySelect } from './components/DashboardSortBySelect';
import { DashboardTable } from './components/DashboardTable';
import { FilterMenu } from './components/FilterMenu';
import { GetDataFilters, GetDataPagination, GetDataSort } from './lib/data';
import { BusinessForAudit } from './lib/generateBusinessData';
import { Tags } from '@ag.ds-next/react/tags';
import { DirectionButton } from '@ag.ds-next/react/direction-link';

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
					<Box>
						<ButtonLink href="#new" iconBefore={PlusIcon}>
							New item
						</ButtonLink>
					</Box>
					<Stack gap={0.5}>
						<Flex
							gap={1}
							alignItems={{ sm: 'flex-end' }}
							flexDirection={{ xs: 'column', sm: 'row' }}
						>
							<DashboardSortBySelect
								sort={sort}
								setSort={setSort}
								resetPagination={resetPagination}
							/>
							<FilterMenu
								filters={filters}
								setFilters={setFilters}
								resetPagination={resetPagination}
								resetFilters={resetFilters}
							/>
						</Flex>
						<Tags
							heading="Active filters"
							items={[
								{
									label: 'Assignee: Daniel Ricciardo',
									onRemove: console.log,
								},
								{
									label: 'Assignee: Oscar Piastri',
									onRemove: console.log,
								},
								{ label: 'Status: Completed', onRemove: console.log },
								{ label: 'State: NSW', onRemove: console.log },
							]}
						/>
					</Stack>
					<DashboardTable
						data={data}
						loading={loading}
						caption={tableCaption}
						itemsPerPage={pagination.perPage}
					/>

					{data.length ? (
						<Flex justifyContent="space-between" alignItems="center">
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
							<Flex gap={1} justifyContent="center">
								<DirectionButton direction="left">Back</DirectionButton>
								<Select
									label="Page"
									value={pagination.page}
									onChange={(event) =>
										setPagination({
											...pagination,
											page: parseInt(event.target.value),
										})
									}
									hideOptionalLabel
									options={Array.from({ length: totalPages }, (_, i) => ({
										label: `${i + 1}`,
										value: `${i + 1}`,
									}))}
								/>
								<DirectionButton direction="right">Next</DirectionButton>
							</Flex>
						</Flex>
					) : null}
				</Stack>
			</PageContent>
		</AppShell>
	);
};
