import { forwardRef, Fragment } from 'react';
import { format, formatDistance } from 'date-fns';
import {
	VisuallyHidden,
	visuallyHiddenStyles,
} from '../../../../../packages/react/src/a11y';
import {
	SkeletonBox,
	SkeletonText,
} from '../../../../../packages/react/src/skeleton';
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
} from '../../../../../packages/react/src/table';
import { TextLink } from '../../../../../packages/react/src/text-link';
import { Text } from '../../../../../packages/react/src/text';
import { Stack } from '../../../../../packages/react/src/stack';
import {
	AlertFilledIcon,
	HelpIcon,
} from '../../../../../packages/react/src/icon';
import { Heading } from '../../../../../packages/react/src/heading';
import { Button } from '../../../../../packages/react/src/button';
import { generateTableCaption } from '../_lib/utils';
import { useDataContext, useSortAndFilterContext } from '../_lib/contexts';
import { StaffMember } from '../_lib/types';
import { LAST_ACTIVE_RELATIVE_TIME_MS } from '../_lib/staffMembers';
import { DataTableRow, DataTableRowStatus } from './DataTableRow';
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
										({ index, name, role, status, lastActive, dateJoined }) => {
											// Adding 2 because the table header row is the first row
											const rowIndex = index + 2;
											const id = name.replace(' ', '-');

											return (
												<DataTableRow
													key={name}
													selectable={selectable}
													itemId={id}
													name={name}
													rowIndex={rowIndex}
												>
													<TableCell as="th" scope="row">
														<TextLink href={`#${id}`}>{name}</TextLink>
													</TableCell>

													{/* <DataTableRowAssignee assignee={assignee} /> */}
													<TableCell>{role}</TableCell>

													<DataTableRowStatus status={status} />

													<TableCell>
														{lastActive &&
															`${formatDistance(
																new Date(LAST_ACTIVE_RELATIVE_TIME_MS),
																new Date(lastActive)
															)} ago`}
													</TableCell>

													<TableCell>
														{dateJoined &&
															format(new Date(dateJoined), 'd MMMM yyyy')}
													</TableCell>
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
	sortKey: keyof StaffMember;
	isSortable: boolean;
	width?: TableHeaderProps['width'];
	textAlign?: TableHeaderProps['textAlign'];
}[] = [
	{
		label: 'Name',
		sortKey: 'name',
		width: { xs: '20rem', lg: 'auto' },
		isSortable: true,
	},
	{
		label: 'Role',
		sortKey: 'role',
		width: '12rem',
		isSortable: true,
	},
	{
		label: 'Status',
		sortKey: 'status',
		width: { xs: '16rem', lg: 'auto' },
		isSortable: false,
	},
	{
		label: 'Last active',
		sortKey: 'lastActive',
		width: '12rem',
		isSortable: true,
	},
	{
		label: 'Date joined',
		sortKey: 'dateJoined',
		width: '11rem',
		isSortable: true,
	},
];
