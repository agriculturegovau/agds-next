import { useEffect, useState } from 'react';
import { Button, ButtonGroup } from '@ag.ds-next/react/button';
import { Drawer } from '@ag.ds-next/react/drawer';
import { FileUpload, FileWithStatus } from '@ag.ds-next/react/file-upload';
import { DeleteIcon, UploadIcon } from '@ag.ds-next/react/icon';
import { LoadingBlanket } from '@ag.ds-next/react/loading';
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
import { SectionAlert } from '@ag.ds-next/react/section-alert';
import { Text } from '@ag.ds-next/react/text';
import { isTruthy } from '../../../lib/isTruthy';
import { SetStateFn } from '../types';
import { FileCode, Task3Step1Schema } from './FormTask3FormState';

type FileCollection = Task3Step1Schema['fileCollection'];

type FileUploadFn = (
	file: FileWithStatus,
	uploadCode: FileCode | undefined
) => void;

interface UploadTableProps {
	onFileUpload: FileUploadFn;
	onFileDelete: (uploadCode: FileCode | undefined) => void;
	readOnly?: boolean;
	fileCollection: FileCollection;
}

// TODO: destructive action dialog on remove

export function UploadsTable({
	readOnly,
	onFileUpload,
	onFileDelete,
	fileCollection,
}: UploadTableProps) {
	const [uploadKey, setUploadKey] = useState<FileCode>();
	const [successKey, setSuccessKey] = useState<FileCode>();

	const handleFileUpload: FileUploadFn = (file, uploadCode) => {
		onFileUpload(file, uploadCode);
		setSuccessKey(uploadCode);
	};

	const fileList = Object.values(fileCollection);
	const successFile = successKey && fileCollection[successKey];

	return (
		<>
			{successKey && (
				<SectionAlert
					tone="success"
					title={`${successFile?.type} has been added`}
					onClose={() => setSuccessKey(undefined)}
				>
					<Text as="p">{successFile?.fileName} has been added</Text>
				</SectionAlert>
			)}
			<TableWrapper>
				<Stack gap={1.5} alignItems="flex-start" width="100%">
					<Table>
						<TableHead>
							<TableRow>
								<TableHeader scope="col" width="33%">
									Document type
								</TableHeader>
								<TableHeader scope="col" width="40%">
									File
								</TableHeader>
								<TableHeader scope="col">Size</TableHeader>
								{!readOnly && (
									<TableHeader scope="col" width="10%">
										Action
									</TableHeader>
								)}
							</TableRow>
						</TableHead>
						<TableBody>
							{fileList?.map((fileData) => {
								return (
									<TableRow key={fileData?.code}>
										<TableCell>{fileData?.type}</TableCell>
										<TableCell>{fileData?.fileName}</TableCell>
										<TableCell>{fileData?.fileSize}</TableCell>
										{!readOnly && (
											<TableCell>
												{fileData?.file ? (
													<Button
														onClick={() => onFileDelete?.(fileData?.code)}
														variant="text"
														iconBefore={DeleteIcon}
													>
														Remove
													</Button>
												) : (
													<Button
														onClick={() => setUploadKey?.(fileData?.code)}
														variant="text"
														iconBefore={UploadIcon}
													>
														Upload
													</Button>
												)}
											</TableCell>
										)}
									</TableRow>
								);
							})}
						</TableBody>
					</Table>
				</Stack>
				<UploadDrawer
					uploadKey={uploadKey}
					setUploadKey={setUploadKey}
					onFileUpload={handleFileUpload}
					fileCollection={fileCollection}
				/>
			</TableWrapper>
		</>
	);
}

interface UploadDrawerProps {
	uploadKey: FileCode | undefined;
	setUploadKey: SetStateFn<FileCode | undefined>;
	fileCollection: FileCollection | undefined;
	onFileUpload: (
		file: FileWithStatus,
		openDrawer: FileCode | undefined
	) => void;
}

function UploadDrawer({
	uploadKey,
	setUploadKey,
	onFileUpload,
	fileCollection,
}: UploadDrawerProps) {
	const [fileList, setFilesList] = useState<Array<FileWithStatus>>([]);
	const [isLoading, setIsLoading] = useState(false);
	const [hasError, setHasError] = useState(false);

	const prefillFile = uploadKey ? fileCollection?.[uploadKey] : undefined;

	useEffect(() => {
		setFilesList([prefillFile?.file].filter(isTruthy));
	}, [prefillFile, uploadKey]);

	useEffect(() => {
		if (fileList.length > 0) {
			setHasError(false);
		}
	}, [fileList]);

	function handleUpload(files: Array<FileWithStatus>) {
		if (files.length < 1) {
			setHasError(true);
			return;
		}
		setIsLoading(true);
		setTimeout(() => {
			onFileUpload(files[0], uploadKey);
			setUploadKey(undefined);
			setIsLoading(false);
		}, 1000);
	}

	return (
		<Drawer
			isOpen={Boolean(uploadKey)}
			onClose={() => setUploadKey(undefined)}
			title={prefillFile?.type || 'Upload document'}
			actions={
				<ButtonGroup>
					<Button
						loading={isLoading}
						onClick={() => {
							handleUpload(fileList);
						}}
						iconBefore={UploadIcon}
					>
						Upload file
					</Button>
					<Button variant="tertiary" onClick={() => setUploadKey(undefined)}>
						Cancel
					</Button>
				</ButtonGroup>
			}
		>
			{isLoading && <LoadingBlanket label="Uploading file" />}
			<FileUpload
				label="Upload document"
				value={fileList}
				onChange={setFilesList}
				hideThumbnails
				required
				disabled={isLoading}
				invalid={hasError}
				message="A valid file is required"
				accept={[
					'application/msword',
					'application/pdf',
					'application/vnd.ms-excel',
					'application/xml',
					'application/zip',
				]}
			/>
		</Drawer>
	);
}
