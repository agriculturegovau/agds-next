import { forwardRef } from 'react';
import {
	Table,
	TableBody,
	TableCell,
	TableHead,
	TableHeader,
	TableWrapper,
	TableRow,
} from '@ag.ds-next/react/table';
import { Text } from '@ag.ds-next/react/text';
import { Button } from '@ag.ds-next/react/button';
import { Stack } from '@ag.ds-next/react/stack';
import { DeleteIcon, UploadIcon } from '@ag.ds-next/react/icon';
import { StatusBadge } from '@ag.ds-next/react/status-badge';
import { Document } from './steps/FormStep9';

type UploadFileTableProps = {
	/** The id of the element to assign the table an accessible name. */
	ariaLabelledby?: string;
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
	{ ariaLabelledby, documents, openDrawer, removeFile, tableId },
	ref
) {
	return (
		<Stack gap={0.5}>
			<TableWrapper>
				<Table
					aria-labelledby={ariaLabelledby}
					id={tableId}
					ref={ref}
					tabIndex={-1}
					tableLayout="fixed"
				>
					<TableHead>
						<TableRow aria-rowindex={1}>
							{headers.map(({ label, width }) => {
								return (
									<TableHeader key={label} scope="col" width={width}>
										{label}
									</TableHeader>
								);
							})}
						</TableRow>
					</TableHead>
					<TableBody>
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
									<TableCell as="th" id={`document-type-${id}`} scope="row">
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
										{size ? (
											<Button
												aria-describedby={`document-type-${id}`}
												focusRingFor="all"
												iconBefore={DeleteIcon}
												onClick={() => removeFile(document)}
												variant="text"
											>
												Remove
											</Button>
										) : (
											<Button
												aria-describedby={`document-type-${id}`}
												focusRingFor="all"
												iconBefore={UploadIcon}
												id={id}
												onClick={() =>
													openDrawer({
														id,
														documentType,
														error,
														file,
														size,
													})
												}
												variant="text"
											>
												Upload
											</Button>
										)}
									</TableCell>
								</TableRow>
							);
						})}
					</TableBody>
				</Table>
			</TableWrapper>
		</Stack>
	);
});

const headers = [
	{
		label: 'Document type',
		width: '16rem',
	},
	{
		label: 'File',
		width: { xs: '10rem', xl: '16rem' },
	},
	{
		label: 'Size',
		width: '10rem',
	},
	{
		label: 'Action',
		width: '8rem',
	},
];
