import { forwardRef, Fragment } from 'react';
import { VisuallyHidden, visuallyHiddenStyles } from '@ag.ds-next/react/a11y';
import { SkeletonBox, SkeletonText } from '@ag.ds-next/react/skeleton';
import {
	Table,
	TableBody,
	TableCell,
	TableHead,
	TableHeader,
	TableHeaderProps,
	TableWrapper,
	TableRow,
} from '@ag.ds-next/react/table';
import { Text } from '@ag.ds-next/react/text';
import { Button } from '@ag.ds-next/react/button';
import { Stack } from '@ag.ds-next/react/stack';
import { AlertFilledIcon, UploadIcon } from '@ag.ds-next/react/icon';
import { Heading } from '@ag.ds-next/react/heading';
import { Box } from '@ag.ds-next/react/box';
import { StatusBadge } from '@ag.ds-next/react/status-badge';

const descriptionId = 'data-table-description';

type DataTableProps = {
	/** The id of the heading that describes the table. */
	headingId?: string;
	/** The id of the table. */
	tableId?: string;
	/** Open drawer. */
	openDrawer: () => void;
	/** Data for assessment files table. */
	assessmentFiles: {
		documentType: string;
		file: string;
		size: string;
		label: string;
		buttonId: string;
		error?: boolean;
	}[];
};

export const DataTable = forwardRef<HTMLTableElement, DataTableProps>(
	function DataTable({ assessmentFiles, headingId, tableId, openDrawer }, ref) {
		const error = false;
		const loading = false;

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

		return (
			<Stack gap={0.5}>
				{headingId ? (
					<div css={visuallyHiddenStyles} id={descriptionId}>
						Table column headers with buttons are sortable.
					</div>
				) : null}
				<TableWrapper>
					<Table
						aria-rowcount={10}
						{...(headingId && {
							'aria-labelledby': headingId,
							'aria-describedby': descriptionId,
						})}
						id={tableId}
						ref={ref}
						tabIndex={-1}
						tableLayout="fixed"
					>
						<TableHead>
							<TableRow aria-rowindex={1}>
								{headers.map(({ label, textAlign, width }) => {
									return (
										<TableHeader
											key={label}
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
									{Array.from(Array(10).keys()).map((i) => (
										<TableRow key={i}>
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
									{assessmentFiles.map(
										(
											{ buttonId, documentType, error, file, size, label },
											index
										) => {
											// Adding 2 because the table header row is the first row
											const rowIndex = index + 2;
											return (
												<TableRow
													aria-rowindex={rowIndex}
													invalid={error}
													key={documentType}
												>
													<TableCell as="th" scope="row">
														{documentType}
													</TableCell>
													<TableCell>
														<Box>{file}</Box>
													</TableCell>
													<TableCell>
														{size ? (
															size
														) : (
															<StatusBadge
																label="File missing"
																appearance="subtle"
																tone="errorHigh"
															/>
														)}
													</TableCell>
													<TableCell>
														<Button
															iconBefore={UploadIcon}
															id={buttonId}
															variant="text"
															onClick={openDrawer}
														>
															{label}
														</Button>
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
			</Stack>
		);
	}
);

const headers: {
	label: string;
	width?: TableHeaderProps['width'];
	textAlign?: TableHeaderProps['textAlign'];
}[] = [
	{
		label: 'Document type',
		width: { xs: '20rem', lg: 'auto' },
	},
	{
		label: 'File',
		width: '12rem',
	},
	{
		label: 'Size',
		width: { xs: '16rem', lg: 'auto' },
	},
	{
		label: 'Label',
		textAlign: 'left',
		width: '12rem',
	},
];
