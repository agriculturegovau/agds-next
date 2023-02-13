import { Flex, Stack } from '@ag.ds-next/react/box';
import { Button, ButtonLink } from '@ag.ds-next/react/button';
import { PageContent } from '@ag.ds-next/react/content';
import {
	ChevronDownIcon,
	ChevronUpIcon,
	PlusIcon,
} from '@ag.ds-next/react/icon';
import { PaginationButtons } from '@ag.ds-next/react/pagination';
import { useCallback, useState } from 'react';
import { AppShell } from '../../components/ExampleShell';
import { DashboardFilters } from './components/DashboardFilters';
import { DashboardItemsPerPageSelect } from './components/DashboardItemsPerPageSelect';
import { DashboardPageTitle } from './components/DashboardPageTitle';
import { DashboardSortBySelect } from './components/DashboardSortBySelect';
import { DashboardTable } from './components/DashboardTable';
import { GetDataFilters, GetDataPagination, GetDataSort } from './lib/data';
import { BusinessForAudit } from './lib/generateBusinessData';

type ExampleFilterBarProps = {
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

export const ExampleFilterBar = ({
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
}: ExampleFilterBarProps) => {
	const [isOpen, setIsOpen] = useState(false);

	const onButtonClick = useCallback(() => {
		if (isOpen) {
			setIsOpen(false);
		} else {
			setIsOpen(true);
		}
	}, [isOpen, open, close]);

	return (
		<AppShell>
			<DashboardPageTitle />
			<PageContent>
				<Stack gap={2}>
					<Flex gap={1} alignItems="flex-end">
						<DashboardSortBySelect
							sort={sort}
							setSort={setSort}
							resetPagination={resetPagination}
						/>
						<DashboardItemsPerPageSelect
							pagination={pagination}
							setPagination={setPagination}
						/>
						<Button
							onClick={onButtonClick}
							variant="secondary"
							iconAfter={isOpen ? ChevronUpIcon : ChevronDownIcon}
						>
							{isOpen ? 'Hide filters' : 'Show filters'}
						</Button>
						<ButtonLink href="#new" iconBefore={PlusIcon}>
							New item
						</ButtonLink>
					</Flex>

					{isOpen && (
						<DashboardFilters
							filters={filters}
							sort={sort}
							setFilters={setFilters}
							setSort={setSort}
							resetPagination={resetPagination}
							resetFilters={resetFilters}
						/>
					)}
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
