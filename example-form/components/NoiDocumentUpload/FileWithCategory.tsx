import { useEffect, useState } from 'react';
import { Flex } from '@ag.ds-next/react/flex';
import { Button } from '@ag.ds-next/react/button';
import { Select } from '@ag.ds-next/react/select';
import { Text } from '@ag.ds-next/react/text';
import { LoadingDots } from '@ag.ds-next/react/loading';
import { FileUploadFileThumbnail } from '@ag.ds-next/react/file-upload';
import {
	categories,
	changeFileCategory,
	FileCategory,
	FileWithCategory as FileWithCategoryType,
	uploadFile,
} from './utils';

// type FileAndCategory = { file: File; category: string };

type FileWithCategoryProps = {
	file: File;
	category?: string;
	onCategoryChange: (category: FileCategory) => void;
	onRemove: () => void;
};

export const FileWithCategory = ({
	file,
	category,
	onCategoryChange,
	onRemove,
}: FileWithCategoryProps) => {
	const loading = false;
	// const [category, setCategory] = useState<FileCategory | undefined>(
	// 	file.category
	// );
	// const [loading, setLoading] = useState(false);
	// /** The ID of the uploaded artifact, for purposes of updating it */
	// const [fileId, setFileId] = useState<string | undefined>(undefined);

	// const handleChangeCategory = async (newCategory: FileCategory) => {
	// 	console.log('handleChangeCategory', newCategory);
	// 	setCategory(newCategory);
	// 	setLoading(true);
	// 	await changeFileCategory(fileId, newCategory);
	// 	setLoading(false);
	// };

	// const handleUploadFile = async (file: FileWithCategoryType) => {
	// 	console.log('handleUploadFile', file);
	// 	setLoading(true);
	// 	const artifactId = await uploadFile(file);
	// 	setFileId(artifactId);
	// 	setLoading(false);
	// };

	// const handleOnRemove = async () => {
	// 	if (fileId) {
	// 		onRemove(fileId);
	// 	}
	// };

	// useEffect(() => {
	// 	if (file.id) {
	// 		setLoading(false);
	// 	}

	// 	handleUploadFile(file);
	// }, [file]);

	return (
		<Flex
			as="li"
			background="shade"
			alignItems="center"
			gap={1}
			paddingRight={1}
			justifyContent="space-between"
		>
			<Flex gap={1} alignItems="center">
				<FileUploadFileThumbnail src={undefined} />
				<Text>{file.name}</Text>
			</Flex>

			<Flex gap={1} alignItems="center" padding={1}>
				<Select
					label="Category"
					hideOptionalLabel
					placeholder="Select a category"
					options={categories}
					value={category}
					// disabled={loading}
					onChange={(event) =>
						onCategoryChange(event.target.value as FileCategory)
					}
				/>

				{loading ? (
					<LoadingDots />
				) : (
					<Button variant="text" onClick={onRemove}>
						Remove file
					</Button>
				)}
			</Flex>
		</Flex>
	);
};
