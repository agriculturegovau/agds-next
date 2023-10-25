import { useEffect, useReducer, useState } from 'react';
import { FileWithStatus } from '@ag.ds-next/react/file-upload';
import { Stack } from '@ag.ds-next/react/stack';
import { Box } from '@ag.ds-next/react/box';
import { Text } from '@ag.ds-next/react/text';
import { Button } from '@ag.ds-next/react/button';
import { getUploadedFiles } from './utils';
import { BatchFileUpload } from './BatchFileUpload';
import { FileWithCategory } from './FileWithCategory';

type FileAndCategory = { file: File; category?: string; artifactId?: string };

type NoiDocumentUploadInputProps = {
	value: FileAndCategory[];
	onChange: (value: FileAndCategory[]) => void;
};

export const NoiDocumentUploadInput = ({
	value,
	onChange,
}: NoiDocumentUploadInputProps) => {
	// const handleOnChange = async (acceptedFiles: FileWithCategoryType[]) => {
	// 	// Update the UI to show loading state straight away
	// 	setFiles(
	// 		acceptedFiles.map((file) => {
	// 			if (!file.status || file.status === 'none') file.status = 'uploading';
	// 			return file;
	// 		})
	// 	);
	// 	// Show uploaded state after simulated network request
	// 	setTimeout(() => {
	// 		setFiles(
	// 			acceptedFiles.map((file) => {
	// 				if (file.status === 'uploading') file.status = 'success';
	// 				return file;
	// 			})
	// 		);
	// 	}, 3000);
	// };

	// const handleRemoveFile = (fileId: string) => {
	// 	const newFiles = files.filter((f) => f.id !== fileId);
	// 	setFiles(newFiles);
	// };

	function onBatchFileUploadChange(files: File[]) {
		const filesWithCategories = files.map((file) => ({
			file,
			category: value[0]?.category,
			artifactId: value[0]?.artifactId,
		}));
		onChange(filesWithCategories);
	}

	return (
		<Stack gap={1}>
			<BatchFileUpload
				label="Upload files"
				multiple
				value={value.map((i) => i.file)}
				onChange={onBatchFileUploadChange}
				maxSize={10000}
			/>
			<Stack as="ul" aria-label="Files" gap={0.5}>
				{value.map((item, index) => {
					function onCategoryChange(category: any) {
						// TODO type me properly
						const nextValue = value;
						nextValue[index].category = category;
						onChange(nextValue);
					}

					function onRemove() {
						onChange(value.filter((item, itemIdx) => itemIdx !== index));
					}

					return (
						<FileWithCategory
							key={index}
							name={item.file.name}
							category={item.category}
							onCategoryChange={onCategoryChange}
							onRemove={onRemove}
						/>
					);
				})}
			</Stack>
		</Stack>
	);
};
