import { forwardRef, Fragment } from 'react';
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
	TableWrapper,
	TableRow,
} from '@ag.ds-next/react/table';
import { Text } from '@ag.ds-next/react/text';
import { Button } from '@ag.ds-next/react/button';
import { Stack } from '@ag.ds-next/react/stack';
import { AlertFilledIcon, UploadIcon } from '@ag.ds-next/react/icon';
import { Heading } from '@ag.ds-next/react/heading';
import { Box } from '@ag.ds-next/react/box';
import { generateTableCaption } from '../lib/utils';

const descriptionId = 'data-table-description';

type DataTableProps = {
	/** The id of the heading that describes the table. */
	headingId?: string;
	/** The id of the table. */
	tableId?: string;
};

export const DataTable = forwardRef<HTMLTableElement, DataTableProps>(
	function DataTable({ headingId, tableId }, ref) {
		const error = false;
		const loading = false;

		const caption = generateTableCaption({
			loading,
			totalItems: 100,
			pagination: {
				page: 1,
				perPage: 10,
			},
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

		// if (!loading && data.length === 0) {
		// 	return (
		// 		<Stack gap={2} alignItems="flex-start" paddingY={1}>
		// 			<Stack gap={1}>
		// 				<HelpIcon size="lg" color="muted" />
		// 				<Heading type="h2" fontSize="lg">
		// 					No results found
		// 				</Heading>
		// 				<Text>Try adjusting your filter options.</Text>
		// 			</Stack>
		// 		</Stack>
		// 	);
		// }

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
									{data.map(
										({ documentType, error, file, size, label }, index) => {
											// Adding 2 because the table header row is the first row
											const rowIndex = index + 2;
											return (
												<TableRow aria-rowindex={rowIndex} key={documentType}>
													<TableCell as="th" scope="row">
														{documentType}
													</TableCell>
													<TableCell>
														<Box background={error ? 'error' : undefined}>
															{file}
														</Box>
													</TableCell>
													<TableCell>{size}</TableCell>
													<TableCell>
														<Button iconBefore={UploadIcon} variant="text">
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
	// sortKey: keyof BusinessForAudit;
	width?: TableHeaderProps['width'];
	textAlign?: TableHeaderProps['textAlign'];
}[] = [
	{
		label: 'Document type',
		// sortKey: 'documentType',
		width: { xs: '20rem', lg: 'auto' },
	},
	{
		label: 'File',
		// sortKey: 'file',
		width: '12rem',
	},
	{
		label: 'Size',
		// sortKey: 'size',
		width: { xs: '16rem', lg: 'auto' },
	},
	{
		label: 'Label',
		// sortKey: 'label',
		textAlign: 'left',
		width: '12rem',
	},
];

const data = [
	{
		documentType: 'RMS Vehicle registration',
		file: 'filename.pdf',
		size: '88kb',
		label: 'Upload',
	},
	{
		documentType: 'Operational Plan of Management',
		file: 'filename.pdf',
		size: '88kb',
		label: 'Upload',
	},
	{
		documentType: 'Vehicle build and layout plans',
		file: 'filename.pdf',
		size: '',
		label: 'Upload',
		error: true,
	},
	{
		documentType: 'Food Safety Supervisor Certificate for Alex',
		file: 'filename.pdf',
		size: '88kb',
		label: 'Upload',
	},
	{
		documentType: 'Suggested menu or list of foods being sold',
		file: 'filename.pdf',
		size: '88kb',
		label: 'Upload',
	},
];
