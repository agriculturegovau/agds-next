import { VisuallyHidden } from '@ag.ds-next/react/a11y';
import { StatusBadge } from '@ag.ds-next/react/badge';
import { SkeletonBox, SkeletonText } from '@ag.ds-next/react/skeleton';
import {
	Table,
	TableBody,
	TableCaption,
	TableCell,
	TableHead,
	TableWrapper,
} from '@ag.ds-next/react/table';
import { TextLink } from '@ag.ds-next/react/text-link';
import { Text } from '@ag.ds-next/react/text';
import { forwardRef, Fragment } from 'react';
import { format } from 'date-fns';
import {
	BusinessForAudit,
	BusinessForAuditWithIndex,
} from '../lib/generateBusinessData';
import { Avatar } from '@ag.ds-next/react/avatar';
import { Flex } from '@ag.ds-next/react/box';
import { GetDataSort } from '../lib/getData';
import {
	DashboardTableHeader,
	DashboardTableHeaderBaseProps,
} from './DashboardTableHeader';

const DashboardTableRowAssignee = ({
	assignee,
}: {
	/** The name of the assignee, if set */
	assignee: string | undefined;
}) => {
	if (!assignee) {
		return <TableCell>-</TableCell>;
	}

	return (
		<TableCell>
			<Flex alignItems="center" gap={0.25}>
				<Avatar name={assignee} size="sm" />
				<Text>{assignee}</Text>
			</Flex>
		</TableCell>
	);
};

export type DashboardTableProps = {
	/** The caption for the table */
	caption: string;
	/** The data to display in the table */
	data: BusinessForAuditWithIndex[];
	/** The current sort */
	sort?: GetDataSort;
	/** A function to set the sort */
	setSort?: (sort: GetDataSort) => void;
	/** Whether the table is loading */
	loading?: boolean;
	/** The total number of items found in the search */
	totalItems?: number;
	/** The number of items to display per page */
	itemsPerPage?: number;
};

export const tableId = 'dashboard-table';

export const DashboardTable = forwardRef<HTMLTableElement, DashboardTableProps>(
	function DashboardTable(
		{
			caption,
			data,
			loading,
			sort,
			setSort,
			itemsPerPage = 10,
			totalItems,
		}: DashboardTableProps,
		ref
	) {
		const isTableSortable = !!sort || !!setSort;

		if (!loading && data.length === 0) {
			return <Text>No results</Text>;
		}

		return (
			<TableWrapper>
				<Table
					aria-rowcount={totalItems}
					id={tableId}
					ref={ref}
					tabIndex={-1}
					tableLayout="fixed"
				>
					<TableCaption>
						{caption}
						<VisuallyHidden>
							, column headers with buttons are sortable.
						</VisuallyHidden>
					</TableCaption>
					<TableHead>
						<tr>
							{headers.map(
								({
									label,
									sortKey,
									textAlign,
									width,
									isSortable: isFieldSortable,
								}) => {
									const isFieldTheActiveSortField = sort?.field === sortKey;
									const clickHandler = () =>
										setSort?.({
											field: sortKey,
											order:
												sort?.field === sortKey && sort?.order === 'ASC'
													? 'DESC'
													: 'ASC',
										});

									return (
										<DashboardTableHeader
											key={sortKey}
											textAlign={textAlign}
											width={width}
											isSortable={isTableSortable && isFieldSortable}
											sort={isFieldTheActiveSortField ? sort.order : undefined}
											onClick={clickHandler}
										>
											{label}
										</DashboardTableHeader>
									);
								}
							)}
						</tr>
					</TableHead>
					<TableBody>
						{loading ? (
							<Fragment>
								{Array.from(Array(itemsPerPage).keys()).map((i) => (
									<tr key={i}>
										<TableCell>
											<SkeletonText />
											<VisuallyHidden>Loading</VisuallyHidden>
										</TableCell>
										<TableCell>
											<SkeletonText />
											<VisuallyHidden>Loading</VisuallyHidden>
										</TableCell>
										<TableCell>
											<SkeletonText />
											<VisuallyHidden>Loading</VisuallyHidden>
										</TableCell>
										<TableCell>
											<SkeletonText />
											<VisuallyHidden>Loading</VisuallyHidden>
										</TableCell>
										<TableCell>
											<SkeletonBox height={32} />
											<VisuallyHidden>Loading</VisuallyHidden>
										</TableCell>
									</tr>
								))}
							</Fragment>
						) : (
							<Fragment>
								{data.map(
									({
										index,
										id,
										assignee,
										businessName,
										city,
										state,
										requestDate,
										status,
									}) => {
										// Adding 1 because the table header row is the first row
										const rowIndex = index + 1;
										return (
											<tr key={id} aria-rowindex={rowIndex}>
												<TableCell as="th" scope="row">
													<TextLink href={`#${id}`}>{businessName}</TextLink>
												</TableCell>
												<DashboardTableRowAssignee assignee={assignee} />
												<TableCell>
													{city}, {state}
												</TableCell>
												<TableCell textAlign="right">
													{format(requestDate, 'dd/MM/yyyy')}
												</TableCell>
												<TableCell>
													<StatusBadge {...STATUS_MAP[status]} />
												</TableCell>
											</tr>
										);
									}
								)}
							</Fragment>
						)}
					</TableBody>
				</Table>
			</TableWrapper>
		);
	}
);

const STATUS_MAP = {
	notBooked: {
		label: 'Not booked',
		tone: 'neutral',
	},
	booked: {
		label: 'Booked',
		tone: 'info',
	},
	completed: {
		label: 'Completed',
		tone: 'success',
	},
	cancelled: {
		label: 'Cancelled',
		tone: 'error',
	},
} as const;

const headers: ({
	label: string;
	sortKey: keyof BusinessForAudit;
	isSortable: boolean;
} & DashboardTableHeaderBaseProps)[] = [
	{
		label: 'Business name',
		sortKey: 'businessName',
		width: { xs: '20rem', lg: 'auto' },
		isSortable: true,
	},
	{
		label: 'Assignee',
		sortKey: 'assignee',
		width: '12rem',
		isSortable: true,
	},
	{
		label: 'City',
		sortKey: 'city',
		width: { xs: '16rem', lg: 'auto' },
		isSortable: false,
	},
	{
		label: 'Date registered',
		sortKey: 'requestDate',
		textAlign: 'right',
		width: '12rem',
		isSortable: true,
	},
	{
		label: 'Status',
		sortKey: 'status',
		width: '11rem',
		isSortable: true,
	},
];
