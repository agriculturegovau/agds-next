import { forwardRef, Fragment } from 'react';
import { VisuallyHidden } from '@ag.ds-next/react/a11y';
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
import {
	AlertFilledIcon,
	DeleteIcon,
	UploadIcon,
} from '@ag.ds-next/react/icon';
import { Heading } from '@ag.ds-next/react/heading';
import { StatusBadge } from '@ag.ds-next/react/status-badge';
import { Document } from './steps/FormStep9';

type UploadFileTableProps = {
	/** The id of the heading that describes the table. */
	headingId?: string;
	/** The id of the table. */
	tableId?: string;
	/** Open drawer. */
	openDrawer: (document: Document) => void;
	/** Remove an uploaded file. */
	removeFile: (document: Document) => void;
	/** Data for upload documents table. */
	documents: Document[];
};

export const UploadFileTable = forwardRef<
	HTMLTableElement,
	UploadFileTableProps
>(function UploadFileTable(
	{ documents, headingId, openDrawer, removeFile, tableId },
	ref
) {
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
					There was an error loading the data. Please try refreshing the page to
					try again.
				</Text>
			</Stack>
		);
	}

	return (
		<Stack gap={0.5}>
			<TableWrapper>
				<Table
					{...(headingId && {
						'aria-labelledby': headingId,
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
								{documents.map((document, index) => {
									const { id, documentType, error, file, size } = document;
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
												<Text breakWords>{file}</Text>
											</TableCell>
											<TableCell>
												{error ? (
													<StatusBadge
														label="File missing"
														appearance="subtle"
														tone="errorHigh"
													/>
												) : (
													size
												)}
											</TableCell>
											<TableCell>
												<Button
													aria-label={`${
														size ? 'Remove' : 'Upload'
													}: ${documentType}`}
													focusRingFor="all"
													iconBefore={size ? DeleteIcon : UploadIcon}
													id={id}
													onClick={() =>
														size
															? removeFile(document)
															: openDrawer({
																	id,
																	documentType,
																	error,
																	file,
																	size,
															  })
													}
													variant="text"
												>
													{size ? 'Remove' : 'Upload'}
												</Button>
											</TableCell>
										</TableRow>
									);
								})}
							</Fragment>
						)}
					</TableBody>
				</Table>
			</TableWrapper>
		</Stack>
	);
});

const headers: {
	label: string;
	width?: TableHeaderProps['width'];
	textAlign?: TableHeaderProps['textAlign'];
}[] = [
	{
		label: 'Document type',
		width: '16rem',
	},
	{
		label: 'File',
		width: '16rem',
	},
	{
		label: 'Size',
		width: '10rem',
	},
	{
		label: 'Action',
		textAlign: 'left',
		width: '8rem',
	},
];
