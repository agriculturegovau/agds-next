import { forwardRef, Fragment } from 'react';
import { format } from 'date-fns';
import { VisuallyHidden, visuallyHiddenStyles } from '@ag.ds-next/react/a11y';
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
	TableProps,
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
	columns?: DataTableColumnKey[];
	tableLayout?: TableProps['tableLayout'];
};

export const DataTable = forwardRef<HTMLTableElement, DataTableProps>(
	function DataTable(
		{ headingId, selectable, columns = defaultHeaders, tableLayout = 'fixed' },
		ref
	) {
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
			<Stack gap={0.5}>
				{headingId ? (
					<div css={visuallyHiddenStyles} id={descriptionId}>
						Table column headers with buttons are sortable.
					</div>
				) : null}
				<TableWrapper>
					<Table
						aria-rowcount={totalItems}
						{...(headingId && {
							'aria-labelledby': headingId,
							'aria-describedby': descriptionId,
						})}
						id={tableId}
						ref={ref}
						tabIndex={-1}
						tableLayout={tableLayout}
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
								{(
									['businessName', ...columns] as (keyof BusinessForAudit)[]
								).map((sortKey) => {
									const {
										label,
										textAlign,
										width,
										isSortable: isFieldSortable,
									} = dataTableHeaders[sortKey];
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
								})}
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
											{columns.map((columnKey) => {
												if (columnKey === 'assignee') {
													return (
														<TableCell key={columnKey}>
															<SkeletonBox height={32} />
															<VisuallyHidden>Loading</VisuallyHidden>
														</TableCell>
													);
												}

												return (
													<TableCell key={columnKey}>
														<SkeletonText />
														<VisuallyHidden>Loading</VisuallyHidden>
													</TableCell>
												);
											})}
										</TableRow>
									))}
								</Fragment>
							) : (
								<Fragment>
									{data.map((item) => {
										const {
											index,
											id,
											assignee,
											businessName,
											city,
											state,
											requestDate,
											status,
										} = item;
										// Adding 2 because the table header row is the first row
										const rowIndex = index + 2;
										return (
											<DataTableRow
												key={id}
												selectable={selectable}
												itemId={id}
												businessName={businessName}
												rowIndex={rowIndex}
											>
												<TableCell as="th" scope="row">
													<TextLink href={`#${id}`}>{businessName}</TextLink>
												</TableCell>
												{columns.map((columnKey) => {
													switch (columnKey) {
														case 'assignee':
															return (
																<DataTableRowAssignee assignee={assignee} />
															);
														case 'requestDate':
															return (
																<TableCell>
																	{format(requestDate, 'dd/MM/yyyy')}
																</TableCell>
															);
														case 'status': {
															return <DataTableRowStatus status={status} />;
														}
														case 'city': {
															return (
																<TableCell>
																	{city}, {state}
																</TableCell>
															);
														}
														case 'services':
														case 'destinations': {
															return (
																<TableCell>
																	{item[columnKey].join(', ') || '-'}
																</TableCell>
															);
														}

														default:
															return (
																<TableCell>{item[columnKey] || '-'}</TableCell>
															);
													}
												})}
											</DataTableRow>
										);
									})}
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

type Headers = {
	[key in keyof BusinessForAudit]: {
		label: string;
		isSortable: boolean;
		width?: TableHeaderProps['width'];
		textAlign?: TableHeaderProps['textAlign'];
	};
};

export const dataTableHeaders: Headers = {
	businessName: {
		label: 'Business name',
		width: { xs: '20rem', lg: 'auto' },
		isSortable: true,
	},
	assignee: {
		label: 'Assignee',
		width: '12rem',
		isSortable: true,
	},
	city: {
		label: 'City',
		width: { xs: '16rem', lg: 'auto' },
		isSortable: false,
	},
	requestDate: {
		label: 'Date registered',
		textAlign: 'right',
		width: '12rem',
		isSortable: true,
	},
	status: {
		label: 'Status',
		width: '11rem',
		isSortable: true,
	},
	id: {
		label: 'ID',
		width: 'auto',
		isSortable: false,
	},
	services: {
		label: 'Services',
		width: 'auto',
		isSortable: false,
	},
	destinations: {
		label: 'Destinations',
		width: 'auto',
		isSortable: false,
	},
	state: {
		label: 'State',
		width: 'auto',
		isSortable: true,
	},
};

type DataTableColumnKey = keyof BusinessForAudit;

const defaultHeaders = [
	'assignee',
	'city',
	'requestDate',
	'status',
] as DataTableColumnKey[];
