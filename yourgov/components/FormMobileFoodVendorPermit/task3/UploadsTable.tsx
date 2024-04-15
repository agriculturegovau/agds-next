import { useState } from 'react';
import { Button, ButtonGroup } from '@ag.ds-next/react/button';
import { Drawer } from '@ag.ds-next/react/drawer';
import { FileUpload, FileWithStatus } from '@ag.ds-next/react/file-upload';
import { Stack } from '@ag.ds-next/react/stack';
import {
	Table,
	TableBody,
	TableCell,
	TableHead,
	TableHeader,
	TableRow,
	TableWrapper,
} from '@ag.ds-next/react/table';
import { SetStateFn } from '../types';
import { FileCode, Task3Step1Schema } from './FormTask3FormState';

interface UploadTableProps {
	onFileUpload: (
		file: FileWithStatus,
		openDrawer: FileCode | undefined
	) => void;
	readOnly?: boolean;
	fileCollection: Task3Step1Schema['fileCollection'];
}

export function UploadsTable({
	readOnly,
	onFileUpload,
	fileCollection,
}: UploadTableProps) {
	const [openDrawer, setOpenDrawer] = useState<FileCode>();

	const fileList = Object.values(fileCollection);

	return (
		<TableWrapper>
			<Stack gap={1.5} alignItems="flex-start" width="100%">
				<Table>
					<TableHead>
						<TableRow>
							<TableHeader scope="col">Document type</TableHeader>
							<TableHeader scope="col">File</TableHeader>
							<TableHeader scope="col">Size</TableHeader>
							{!readOnly && <TableHeader scope="col">Action</TableHeader>}
						</TableRow>
					</TableHead>
					<TableBody>
						{fileList?.map((file) => {
							return (
								<TableRow key={file?.code}>
									<TableCell>{file?.type}</TableCell>
									<TableCell>{file?.file?.name}</TableCell>
									{!readOnly && (
										<TableCell>
											<Button
												onClick={() => setOpenDrawer?.(file?.code)}
												variant="text"
											>
												Upload
											</Button>
										</TableCell>
									)}
								</TableRow>
							);
						})}
					</TableBody>
				</Table>
			</Stack>
			<UploadDrawer
				openDrawer={openDrawer}
				setOpenDrawer={setOpenDrawer}
				onFileUpload={onFileUpload}
			/>
		</TableWrapper>
	);
}

interface UploadDrawerProps {
	openDrawer: FileCode | undefined;
	setOpenDrawer: SetStateFn<FileCode | undefined>;
	onFileUpload: (
		file: FileWithStatus,
		openDrawer: FileCode | undefined
	) => void;
}

function UploadDrawer({
	openDrawer,
	setOpenDrawer,
	onFileUpload,
}: UploadDrawerProps) {
	const [filesList, setFilesList] = useState<Array<FileWithStatus>>([]);
	return (
		<Drawer
			isOpen={Boolean(openDrawer)}
			onClose={() => setOpenDrawer(undefined)}
			title="Drawer title"
			actions={
				<ButtonGroup>
					<Button
						onClick={() => {
							onFileUpload(filesList[0], openDrawer);
							setOpenDrawer(undefined);
						}}
					>
						Upload file
					</Button>
					<Button variant="tertiary" onClick={() => setOpenDrawer(undefined)}>
						Cancel
					</Button>
				</ButtonGroup>
			}
		>
			<FileUpload
				label="Upload document"
				value={filesList}
				onChange={setFilesList}
			/>
		</Drawer>
	);
}
