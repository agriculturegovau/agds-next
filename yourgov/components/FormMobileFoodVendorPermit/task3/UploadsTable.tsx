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
import { Modal } from '@ag.ds-next/react/modal';
import { isTruthy } from '../../../lib/isTruthy';
import { SetStateFn } from '../types';
import {
	FileCode,
	Task3FileSchema,
	Task3Step1Schema,
} from './FormTask3FormState';

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

export function UploadsTable({
	readOnly,
	onFileUpload,
	onFileDelete,
	fileCollection,
}: UploadTableProps) {
	const [uploadKey, setUploadKey] = useState<FileCode>();
	const [successFile, setSuccessFile] = useState<Task3FileSchema>();
	const [deletionFile, setDeletionFile] = useState<Task3FileSchema>();

	const handleFileUpload: FileUploadFn = (file, uploadCode) => {
		onFileUpload(file, uploadCode);
		uploadCode && setSuccessFile(fileCollection[uploadCode]);
	};

	function handleFileDelete() {
		onFileDelete(deletionFile?.code);
		setDeletionFile(undefined);
	}

	const fileList = Object.values(fileCollection);

	return (
		<>
			{successFile && (
				<SectionAlert
					tone="success"
					title={`${successFile?.type} has been added`}
					onClose={() => setSuccessFile(undefined)}
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
														onClick={() => setDeletionFile(fileData)}
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
					key={uploadKey}
					uploadKey={uploadKey}
					setUploadKey={setUploadKey}
					onFileUpload={handleFileUpload}
					fileCollection={fileCollection}
				/>
			</TableWrapper>
			<Modal
				title={`Are you sure you want to remove "${deletionFile?.fileName}"?`}
				onClose={() => setDeletionFile(undefined)}
				isOpen={Boolean(deletionFile)}
				actions={
					<ButtonGroup>
						<Button onClick={handleFileDelete}>Delete file</Button>
						<Button
							variant="tertiary"
							onClick={() => setDeletionFile(undefined)}
						>
							Cancel
						</Button>
					</ButtonGroup>
				}
			>
				<Text as="p">
					The {deletionFile?.type} file is about to be deleted.
				</Text>
				<Text as="p">
					It will be deleted immediately. You can’t undo this action.
				</Text>
			</Modal>
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

	const selectedFileData = uploadKey ? fileCollection?.[uploadKey] : undefined;

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
			title={selectedFileData?.type || 'Upload document'}
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
					'application/zip',
				]}
			/>
		</Drawer>
	);
}
