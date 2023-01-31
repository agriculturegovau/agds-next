import { Stack } from '@ag.ds-next/react/box';
import { PageContent } from '@ag.ds-next/react/content';
import { PaginationButtons } from '@ag.ds-next/react/pagination';
import { SubNav } from '@ag.ds-next/react/sub-nav';
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
		perPage: 20,
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
					<SubNav
						links={[
							{ href: 'active', label: 'Active' },
							{ href: 'completed', label: 'Completed' },
						]}
						activePath="active"
					/>
					<DashboardFilters
						filters={filters}
						sort={sort}
						setFilters={setFilters}
						setSort={setSort}
						resetPagination={() => setPagination({ ...pagination, page: 1 })}
					/>
					<DashboardTable
						data={data}
						loading={loading}
						totalItems={totalItems}
					/>
					{data.length ? (
						<PaginationButtons
							currentPage={pagination.page}
							onChange={(page) => setPagination({ ...pagination, page })}
							totalPages={totalPages}
						/>
					) : null}
				</Stack>
			</PageContent>
		</AppShell>
	);
};
