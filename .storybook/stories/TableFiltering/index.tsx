import { Stack } from '@ag.ds-next/react/box';
import { PageContent } from '@ag.ds-next/react/content';
import { PaginationButtons } from '@ag.ds-next/react/pagination';
import { SubNav } from '@ag.ds-next/react/sub-nav';
import { useEffect, useState } from 'react';

import { AppShell } from '../../components/ExampleShell';
import { DashboardFilters } from './DashboardFilters';
import { DashboardPageTitle } from './DashboardPageTitle';
import { DashboardTable } from './DashboardTable';
import { handleGetData, handleGetDataParams } from './data';
import { BusinessForAudit } from './lib/generateBusinessData';

export default {
	title: 'Examples/Filtering',
};

const getData = (params: handleGetDataParams) => {
	const [loading, setLoading] = useState(false);
	const [data, setData] = useState<BusinessForAudit[]>([]);
	const [totalPages, setTotalPages] = useState(0);

	useEffect(() => {
		setLoading(true);
		handleGetData(params).then((response) => {
			setData(response.data);
			setTotalPages(response.totalPages);
			setLoading(false);
		});
	}, [params]);

	return { loading, data, totalPages };
};

export const Filtering = () => {
	const [params, setParams] = useState({
		pagination: {
			page: 1,
			perPage: 20,
		},
		sort: {
			field: 'businessName',
			order: 'ASC',
		},
		filters: {},
	} as handleGetDataParams);

	const { loading, data, totalPages } = getData(params);

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
					<DashboardFilters params={params} setParams={setParams} />
					<DashboardTable data={data} loading={loading} />
					<PaginationButtons
						currentPage={params.pagination.page}
						onChange={(v) =>
							setParams({
								...params,
								pagination: { ...params.pagination, page: v },
							})
						}
						totalPages={totalPages}
					/>
				</Stack>
			</PageContent>
		</AppShell>
	);
};
