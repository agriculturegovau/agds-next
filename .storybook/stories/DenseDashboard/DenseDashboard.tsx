import { format } from 'date-fns';
import { Stack } from '@ag.ds-next/react/stack';
import { Columns } from '@ag.ds-next/react/columns';
import {
	SummaryList,
	SummaryListItem,
	SummaryListItemDescription,
	SummaryListItemTerm,
} from '@ag.ds-next/react/summary-list';
import { H2 } from '@ag.ds-next/react/heading';
import { StatusBadge } from '@ag.ds-next/react/status-badge';
import { Box } from '@ag.ds-next/react/box';
import { useSortAndFilter } from '../DataFiltering/lib/useSortAndFilter';
import { STATUS_MAP, useData } from '../DataFiltering/lib/utils';
import {
	DataProvider,
	SortAndFilterProvider,
} from '../DataFiltering/lib/contexts';
import { BusinessForAudit } from '../DataFiltering/lib/generateBusinessData';
import { ErrorBoundary } from './ErrorBoundary';
import { AppFrame } from './components/AppFrame';
import { DenseDashbaordTable } from './components/DenseDashboardTable';

type ActiveItemProps = {
	data: BusinessForAudit;
};

export const ActiveItem = ({ data }: ActiveItemProps) => {
	return (
		<Stack gap={2}>
			<Stack gap={1}>
				<H2>{data.businessName}</H2>
				<StatusBadge weight="subtle" {...STATUS_MAP[data.status]} />
			</Stack>

			<SummaryList>
				<SummaryListItem>
					<SummaryListItemTerm>Business name</SummaryListItemTerm>
					<SummaryListItemDescription>
						{data.businessName}
					</SummaryListItemDescription>
				</SummaryListItem>
				<SummaryListItem>
					<SummaryListItemTerm>Location</SummaryListItemTerm>
					<SummaryListItemDescription>
						{data.city}, {data.state}
					</SummaryListItemDescription>
				</SummaryListItem>
				<SummaryListItem>
					<SummaryListItemTerm>Request date</SummaryListItemTerm>
					<SummaryListItemDescription>
						{format(data.requestDate, 'dd/MM/yyyy')}
					</SummaryListItemDescription>
				</SummaryListItem>
			</SummaryList>

			<SummaryList>
				<SummaryListItem>
					<SummaryListItemTerm>Assigned too</SummaryListItemTerm>
					<SummaryListItemDescription>
						{data.assignee || '-'}
					</SummaryListItemDescription>
				</SummaryListItem>
				<SummaryListItem>
					<SummaryListItemTerm>Term</SummaryListItemTerm>
					<SummaryListItemDescription>Definition</SummaryListItemDescription>
				</SummaryListItem>
				<SummaryListItem>
					<SummaryListItemTerm>Term</SummaryListItemTerm>
					<SummaryListItemDescription>Definition</SummaryListItemDescription>
				</SummaryListItem>
			</SummaryList>

			<Stack gap={1}>
				<Box background="bodyAlt" rounded padding={3}>
					Comment
				</Box>

				<Box background="bodyAlt" rounded padding={3}>
					Comment
				</Box>

				<Box background="bodyAlt" rounded padding={3}>
					Comment
				</Box>
			</Stack>
		</Stack>
	);
};

export const DenseDashboard = () => {
	const sortAndFilter = useSortAndFilter();
	const { filters, pagination, sort } = sortAndFilter;
	const data = useData({ filters, pagination, sort });

	return (
		<SortAndFilterProvider value={sortAndFilter}>
			<DataProvider value={data}>
				<AppFrame focusMode={false}>
					<Columns
						gap={0}
						cols={{
							xs: 1,
							xxl: 2,
						}}
					>
						<DenseDashbaordTable />
						<Box padding={1} borderLeft={true} borderTop={true}>
							<ErrorBoundary>
								<ActiveItem data={data?.data[1]} />
							</ErrorBoundary>
						</Box>
					</Columns>
				</AppFrame>
			</DataProvider>
		</SortAndFilterProvider>
	);
};
