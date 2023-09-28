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
	TableRow,
} from '@ag.ds-next/react/table';
import { TextLink } from '@ag.ds-next/react/text-link';
import { Text } from '@ag.ds-next/react/text';
import { Stack } from '@ag.ds-next/react/stack';
import { AlertFilledIcon, HelpIcon } from '@ag.ds-next/react/icon';
import { Heading } from '@ag.ds-next/react/heading';
import { Button } from '@ag.ds-next/react/button';
import { generateTableCaption } from '../lib/utils';
import { useDataContext, useSortAndFilterContext } from '../lib/contexts';
import { BusinessForAudit } from '../lib/generateBusinessData';
import { DataTableRowAssignee, DataTableRowCheckbox } from './DataTableRow';

export const tableId = 'data-table';

type DataTableProps = {
	/** The id of the heading that describes the table */
	headingId?: string;
	/** Whether the table should be selectable */
	selectable?: boolean;
};

export const DataTable = forwardRef<HTMLTableElement, DataTableProps>(
	function DataTable({ headingId, selectable }, ref) {
		const { sort, setSort, pagination, resetFilters } =
			useSortAndFilterContext();
		const { data, loading, totalItems, error } = useDataContext();
		const isTableSortable = !!sort || !!setSort;

		const caption = generateTableCaption({
			loading,
			totalItems,
			pagination,
		});

		if (error) {
			return (
				<Stack gap={1}>
					<AlertFilledIcon color="error" size="lg" />
					<Heading type="h2" fontSize="lg">
						Failed to load
					</Heading>
					<Text>
						There was an error loading the data. Please try refreshing the page
						to try again.
					</Text>
				</Stack>
			);
		}

		if (!loading && data.length === 0) {
			return (
				<Stack gap={2} alignItems="flex-start" paddingY={1}>
					<Stack gap={1}>
						<HelpIcon size="lg" color="muted" />
						<Heading type="h2" fontSize="lg">
							No results found
						</Heading>
						<Text>Try adjusting your filter options.</Text>
					</Stack>
					<Button onClick={resetFilters}>Clear filters</Button>
				</Stack>
			);
		}

		return (
			<TableWrapper>
				<Table
					aria-rowcount={totalItems}
					{...(headingId && { 'aria-labelledby': headingId })}
					id={tableId}
					ref={ref}
					tabIndex={-1}
					tableLayout="fixed"
				>
					{!headingId && (
						<TableCaption>
							{caption}
							<VisuallyHidden>
								, column headers with buttons are sortable.
							</VisuallyHidden>
						</TableCaption>
					)}
					<TableHead>
						<TableRow aria-rowindex={1}>
							{selectable && (
								<TableHeader scope="col" width="5rem">
									Select
								</TableHeader>
							)}
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
						</TableRow>
					</TableHead>
					<TableBody>
						{loading ? (
							<Fragment>
								{Array.from(Array(pagination.perPage).keys()).map((i) => (
									<TableRow key={i}>
										{selectable && (
											<TableCell>
												<SkeletonText />
												<VisuallyHidden>Loading</VisuallyHidden>
											</TableCell>
										)}
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
									</TableRow>
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
										// Adding 2 because the table header row is the first row
										const rowIndex = index + 2;
										return (
											<TableRow key={id} aria-rowindex={rowIndex}>
												{selectable && (
													<DataTableRowCheckbox
														itemId={id}
														businessName={businessName}
													/>
												)}
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
											</TableRow>
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
