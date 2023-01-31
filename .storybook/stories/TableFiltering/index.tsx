import { Box, Stack } from '@ag.ds-next/react/box';
import { ButtonLink } from '@ag.ds-next/react/button';
import { PageContent } from '@ag.ds-next/react/content';
import { PlusIcon } from '@ag.ds-next/react/icon';
import { PaginationButtons } from '@ag.ds-next/react/pagination';
import { Select } from '@ag.ds-next/react/select';
import { useEffect, useState } from 'react';
import { AppShell } from '../../components/ExampleShell';
import { DashboardFilters } from './DashboardFilters';
import { DashboardPageTitle } from './DashboardPageTitle';
import { DashboardTable } from './DashboardTable';
import {
	getData,
	GetDataParams,
	GetDataFilters,
	GetDataPagination,
	GetDataSort,
} from './lib/data';
import { BusinessForAudit } from './lib/generateBusinessData';

export default {
	title: 'Examples/Filtering',
};

function useData({ sort, filters, pagination }: GetDataParams) {
	const [loading, setLoading] = useState(false);
	const [data, setData] = useState<BusinessForAudit[]>([]);
	const [totalPages, setTotalPages] = useState(0);
	const [totalItems, setTotalItems] = useState(0);

	useEffect(() => {
		setLoading(true);
		getData({ sort, filters, pagination }).then((response) => {
			setData(response.data);
			setTotalPages(response.totalPages);
			setTotalItems(response.totalItems);
			setLoading(false);
		});
	}, [sort, filters, pagination]);

	return { loading, data, totalPages, totalItems };
}

export const Filtering = () => {
	const [pagination, setPagination] = useState<GetDataPagination>({
		page: 1,
		perPage: 10,
	});
	const [sort, setSort] = useState<GetDataSort>({
		field: 'businessName',
		order: 'ASC',
	});
	const [filters, setFilters] = useState<GetDataFilters>({
		businessName: undefined,
		state: undefined,
		status: undefined,
		dateRegistered: {
			from: undefined,
			to: undefined,
		},
	});

	const { loading, data, totalPages, totalItems } = useData({
		filters,
		pagination,
		sort,
	});

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
					<DashboardFilters
						filters={filters}
						sort={sort}
						setFilters={setFilters}
						setSort={setSort}
						resetPagination={() => setPagination({ ...pagination, page: 1 })}
						resetFilters={() =>
							setFilters({
								businessName: undefined,
								state: undefined,
								status: undefined,
								dateRegistered: {
									from: undefined,
									to: undefined,
								},
							})
						}
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
