import { forwardRef, Fragment } from 'react';
import { format } from 'date-fns';
import { VisuallyHidden } from '@ag.ds-next/react/a11y';
import { StatusBadge } from '@ag.ds-next/react/status-badge';
import { SkeletonBox, SkeletonText } from '@ag.ds-next/react/skeleton';
import {
	Table,
	TableBody,
	TableCaption,
	TableCell,
	TableHead,
	TableHeader,
	TableHeaderProps,
	TableHeaderSortable,
	TableWrapper,
} from '@ag.ds-next/react/table';
import { TextLink } from '@ag.ds-next/react/text-link';
import { Text } from '@ag.ds-next/react/text';
import { Avatar } from '@ag.ds-next/react/avatar';
import { Flex } from '@ag.ds-next/react/flex';
import { BusinessForAudit } from '../lib/generateBusinessData';
import { useDataContext, useSortAndFilterContext } from '../lib/contexts';
import { generateTableCaption } from '../lib/utils';

const DataTableRowAssignee = ({
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
				<Avatar name={assignee} size="sm" aria-hidden />
				<Text>{assignee}</Text>
			</Flex>
		</TableCell>
	);
};

export const tableId = 'data-table';

export const DataTable = forwardRef<HTMLTableElement>(
	function DataTable(_, ref) {
		const { sort, setSort, pagination } = useSortAndFilterContext();
		const { data, loading, totalItems } = useDataContext();
		const isTableSortable = !!sort || !!setSort;

		const caption = generateTableCaption({
			loading,
			totalItems,
			pagination,
		});

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
									if (isTableSortable && isFieldSortable) {
										const isFieldTheActiveSortField = sort?.field === sortKey;
										const onClick = () =>
											setSort?.({
												field: sortKey,
												order:
													sort?.field === sortKey && sort?.order === 'ASC'
														? 'DESC'
														: 'ASC',
											});
										return (
											<TableHeaderSortable
												key={sortKey}
												textAlign={textAlign}
												width={width}
												sort={
													isFieldTheActiveSortField ? sort?.order : undefined
												}
												onClick={onClick}
											>
												{label}
											</TableHeaderSortable>
										);
									}
									return (
										<TableHeader
											key={sortKey}
											scope="col"
											textAlign={textAlign}
											width={width}
										>
											{label}
										</TableHeader>
									);
								}
							)}
						</tr>
					</TableHead>
					<TableBody>
						{loading ? (
							<Fragment>
								{Array.from(Array(pagination.perPage).keys()).map((i) => (
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
												<DataTableRowAssignee assignee={assignee} />
												<TableCell>
													{city}, {state}
												</TableCell>
												<TableCell>
													{format(requestDate, 'dd/MM/yyyy')}
												</TableCell>
												<TableCell>
													<StatusBadge
														weight="subtle"
														{...STATUS_MAP[status]}
													/>
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

export const STATUS_MAP = {
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

const headers: {
	label: string;
	sortKey: keyof BusinessForAudit;
	isSortable: boolean;
	width?: TableHeaderProps['width'];
	textAlign?: TableHeaderProps['textAlign'];
}[] = [
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
