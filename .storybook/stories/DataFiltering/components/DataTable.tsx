import { forwardRef, Fragment } from 'react';
import { format } from 'date-fns';
import {
	VisuallyHidden,
	visuallyHiddenStyles,
} from '../../../../packages/react/src/a11y';
import {
	SkeletonBox,
	SkeletonText,
} from '../../../../packages/react/src/skeleton';
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
} from '../../../../packages/react/src/table';
import { TextLink } from '../../../../packages/react/src/text-link';
import { Text } from '../../../../packages/react/src/text';
import { Stack } from '../../../../packages/react/src/stack';
import { AlertFilledIcon, HelpIcon } from '../../../../packages/react/src/icon';
import { Heading } from '../../../../packages/react/src/heading';
import { Button } from '../../../../packages/react/src/button';
import { generateTableCaption } from '../lib/utils';
import { useDataContext, useSortAndFilterContext } from '../lib/contexts';
import { BusinessForAudit } from '../lib/generateBusinessData';
import {
	DataTableRow,
	DataTableRowAssignee,
	DataTableRowStatus,
} from './DataTableRow';
import { DataTableBatchActionsBar } from './DataTableBatchActionsBar';

export const tableId = 'data-table';
const descriptionId = 'data-table-description';

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
				<Stack gap={1} role="alert">
					<AlertFilledIcon color="error" size="lg" />
					<Heading fontSize="lg" type="h2">
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
				<Stack alignItems="flex-start" gap={2} paddingY={1} role="alert">
					<Stack gap={1}>
						<HelpIcon color="muted" size="lg" />
						<Heading fontSize="lg" type="h2">
							No results found
						</Heading>
						<Text>Try adjusting your filter options.</Text>
					</Stack>
					<Button onClick={resetFilters}>Clear filters</Button>
				</Stack>
			);
		}

		return (
			<Stack gap={0.5}>
				{headingId ? (
					<div css={visuallyHiddenStyles} id={descriptionId}>
						Table column headers with buttons are sortable.
					</div>
				) : null}
				<div css={visuallyHiddenStyles} role="status">
					{loading ? 'Loading audits' : ''}
				</div>
				<TableWrapper>
					<Table
						aria-labelledby={
							headingId ? `${headingId} ${descriptionId}` : undefined
						}
						aria-rowcount={totalItems}
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
													onClick={onClick}
													sort={
														isFieldTheActiveSortField ? sort?.order : undefined
													}
													textAlign={textAlign}
													width={width}
												>
													{label}
												</TableHeaderSortable>
											);
										}
										return (
											<TableHeader key={sortKey} scope="col" width={width}>
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
												<DataTableRow
													businessName={businessName}
													itemId={id}
													key={id}
													rowIndex={rowIndex}
													selectable={selectable}
												>
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
													<DataTableRowStatus status={status} />
												</DataTableRow>
											);
										}
									)}
								</Fragment>
							)}
						</TableBody>
					</Table>
				</TableWrapper>
				<DataTableBatchActionsBar />
			</Stack>
		);
	}
);

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
