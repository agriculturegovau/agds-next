import { forwardRef, Fragment } from 'react';
import { format } from 'date-fns';
import {
	VisuallyHidden,
	visuallyHiddenStyles,
} from '../../../../packages/react/src/a11y';
import { SkeletonText } from '../../../../packages/react/src/skeleton';
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
import { Box } from '../../../../packages/react/src/box';
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
	DropdownMenu,
	DropdownMenuButton,
	DropdownMenuItem,
	DropdownMenuPanel,
} from '../../../../packages/react/src/dropdown-menu';
import {
	DataTableRow,
	DataTableRowAssignee,
	DataTableRowStatus,
} from './DataTableRow';
import { DataTableBatchActionsBar } from './DataTableBatchActionsBar';
import { DataTableSelectAllCheckbox } from './DataTableSelectAllCheckbox';
import { defaultActiveColumns } from './DashboardPagination';

export const tableId = 'data-table';
const descriptionId = 'data-table-description';

type DataTableProps = {
	activeColumns?: typeof defaultActiveColumns;
	hasActionColumn?: boolean;
	onOpenDrawer?: (newCurrentItem: BusinessForAudit) => void;
	onClickMarkCompleted?: (newCurrentItem: BusinessForAudit) => void;
	onClickMarkCompletedBatch?: (batchItems: string[]) => void;
	onClickDelete?: (newCurrentItem: BusinessForAudit) => void;
	onClickDeleteBatch?: (batchItems: string[]) => void;
	/** The id of the heading that describes the table */
	headingId?: string;
	/** Whether the table should be selectable */
	selectable?: boolean;
};

export const DataTable = forwardRef<HTMLTableElement, DataTableProps>(
	function DataTable(
		{
			activeColumns,
			hasActionColumn,
			headingId,
			onClickMarkCompleted,
			onClickMarkCompletedBatch,
			onClickDelete,
			onClickDeleteBatch,
			onOpenDrawer,
			selectable,
		},
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
			<>
				{selectable && (
					<Box paddingLeft={0.75} paddingY={0.75} borderBottom>
						<DataTableSelectAllCheckbox />
					</Box>
				)}
				<Stack gap={0.5}>
					{headingId ? (
						<div css={visuallyHiddenStyles} id={descriptionId}>
							Table column headers with buttons are sortable.
						</div>
					) : null}
					<div role="status" css={visuallyHiddenStyles}>
						{loading ? 'Loading audits' : ''}
					</div>
					<TableWrapper>
						<Table
							aria-rowcount={totalItems}
							aria-labelledby={
								headingId ? `${headingId} ${descriptionId}` : undefined
							}
							id={tableId}
							ref={ref}
							tabIndex={-1}
							tableLayout="fixed"
							frozenColumns={[1, 2, 7]}
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
										<TableHeader scope="col" width={`${73 / 16}rem`}>
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
												const isFieldTheActiveSortField =
													sort?.field === sortKey;
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
														display={
															activeColumns === undefined ||
															activeColumns[label]
																? undefined
																: 'none'
														}
														key={sortKey}
														textAlign={textAlign}
														width={width}
														sort={
															isFieldTheActiveSortField
																? sort?.order
																: undefined
														}
														onClick={onClick}
													>
														{label}
													</TableHeaderSortable>
												);
											}
											return (
												<TableHeader
													display={
														activeColumns === undefined || activeColumns[label]
															? undefined
															: 'none'
													}
													key={sortKey}
													scope="col"
													width={width}
												>
													{label}
												</TableHeader>
											);
										}
									)}
									{hasActionColumn && (
										<TableHeader scope="col" width={`${118 / 16}rem`}>
											Action
										</TableHeader>
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
												{headers.map(({ label }) => (
													<TableCell
														display={
															activeColumns === undefined ||
															activeColumns[label]
																? undefined
																: 'none'
														}
														key={label}
													>
														<SkeletonText />
														<VisuallyHidden>Loading</VisuallyHidden>
													</TableCell>
												))}
												{hasActionColumn && (
													<TableCell>
														<SkeletonText />
														<VisuallyHidden>Loading</VisuallyHidden>
													</TableCell>
												)}
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
												...businessData
											}) => {
												// Adding 2 because the table header row is the first row
												const rowIndex = index + 2;

												const newCurrentItem = {
													id,
													assignee,
													businessName,
													city,
													state,
													requestDate,
													status,
													...businessData,
												};

												return (
													<DataTableRow
														key={id}
														selectable={selectable}
														itemId={id}
														businessName={businessName}
														rowIndex={rowIndex}
													>
														<TableCell
															as="th"
															display={
																activeColumns === undefined ||
																activeColumns?.['Business name']
																	? undefined
																	: 'none'
															}
															scope="row"
														>
															<TextLink href={`#${id}`} id={`business-${id}`}>
																{businessName}
															</TextLink>
														</TableCell>
														<DataTableRowAssignee
															assignee={assignee}
															display={
																activeColumns === undefined ||
																activeColumns?.['Assignee']
																	? undefined
																	: 'none'
															}
														/>
														<TableCell
															display={
																activeColumns === undefined ||
																activeColumns?.['City']
																	? undefined
																	: 'none'
															}
														>
															{city}, {state}
														</TableCell>
														<TableCell
															display={
																activeColumns === undefined ||
																activeColumns?.['Date registered']
																	? undefined
																	: 'none'
															}
														>
															{format(requestDate, 'dd/MM/yyyy')}
														</TableCell>
														<DataTableRowStatus
															display={
																activeColumns === undefined ||
																activeColumns?.['Status']
																	? undefined
																	: 'none'
															}
															status={status}
														/>
														{hasActionColumn && (
															<TableCell>
																<DropdownMenu>
																	<DropdownMenuButton
																		aria-describedby={`business-${id}`}
																		focusRingFor="all"
																	>
																		Action
																	</DropdownMenuButton>
																	<DropdownMenuPanel>
																		<DropdownMenuItem
																			onClick={() => {
																				onOpenDrawer?.(newCurrentItem);
																			}}
																		>
																			Change assignee
																		</DropdownMenuItem>
																		<DropdownMenuItem
																			onClick={() => {
																				onClickMarkCompleted?.(newCurrentItem);
																			}}
																		>
																			Mark as completed
																		</DropdownMenuItem>
																		<DropdownMenuItem
																			onClick={() => {
																				onClickDelete?.(newCurrentItem);
																			}}
																		>
																			Delete audit
																		</DropdownMenuItem>
																	</DropdownMenuPanel>
																</DropdownMenu>
															</TableCell>
														)}
													</DataTableRow>
												);
											}
										)}
									</Fragment>
								)}
							</TableBody>
						</Table>
					</TableWrapper>
					<DataTableBatchActionsBar
						onClickDeleteBatch={onClickDeleteBatch}
						onClickMarkCompletedBatch={onClickMarkCompletedBatch}
					/>
				</Stack>
			</>
		);
	}
);

export const headers: {
	label: string;
	sortKey: keyof BusinessForAudit;
	isSortable: boolean;
	width?: TableHeaderProps['width'];
	textAlign?: TableHeaderProps['textAlign'];
}[] = [
	{
		label: 'Business name',
		sortKey: 'businessName',
		width: `${268 / 16}rem`,
		isSortable: true,
	},
	{
		label: 'Assignee',
		sortKey: 'assignee',
		width: `${195 / 16}rem`,
		isSortable: true,
	},
	{
		label: 'City',
		sortKey: 'city',
		width: `${240 / 16}rem`,
		isSortable: false,
	},
	{
		label: 'Date registered',
		sortKey: 'requestDate',
		width: `${197 / 16}rem`,
		isSortable: true,
	},
	{
		label: 'Status',
		sortKey: 'status',
		width: `${180 / 16}rem`,
		isSortable: true,
	},
];
