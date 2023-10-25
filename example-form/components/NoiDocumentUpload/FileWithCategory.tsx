import { useState } from 'react';
import { Flex } from '@ag.ds-next/react/flex';
import { Button } from '@ag.ds-next/react/button';
import { Select } from '@ag.ds-next/react/select';
import { Text } from '@ag.ds-next/react/text';
import { LoadingDots } from '@ag.ds-next/react/loading';
import {
	FileUploadFileThumbnail,
	FileWithStatus,
} from '@ag.ds-next/react/file-upload';
import {
	categories,
	changeFileCategory,
	FileCategory,
	FileWithCategory as FileWithCategoryType,
	uploadFile,
} from './utils';

// type FileAndCategory = { file: File; category: string };

type FileWithCategoryProps = {
	file: FileWithCategoryType;
	onCategoryChange: (category: FileCategory) => void;
	onArtifactIdChange: (artifactId: string) => void;
	onRemove: () => void;
};

export const FileWithCategory = ({
	file,
	onCategoryChange,
	onArtifactIdChange,
	onRemove,
}: FileWithCategoryProps) => {
	const [loading, setLoading] = useState(false);
	const [attemptedUpload, setAttemptedUpload] = useState(false);

	const handleChangeCategory = async (newCategory: FileCategory) => {
		console.log('handleChangeCategory', newCategory);
		onCategoryChange(newCategory);

		if (file.artifactId) {
			setLoading(true);
			await changeFileCategory(file.artifactId, newCategory);
			setLoading(false);
		}
	};

	const handleUploadFile = async (file: FileWithStatus) => {
		console.log('handleUploadFile', file);
		setLoading(true);
		const artifactId = await uploadFile(file);
		onArtifactIdChange(artifactId);
		setLoading(false);
	};

	if (!file.artifactId && !attemptedUpload) {
		setAttemptedUpload(true);
		handleUploadFile(file.file);
	}

	// const imagePreview = useMemo(() => getImageThumbnail(file.file), [file]);
	const imagePreview = undefined;

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
				<FileUploadFileThumbnail src={imagePreview} />
				<Text>{file.file.name}</Text>
			</Flex>

			<Flex gap={1} alignItems="center" padding={1}>
				<FileCategorySelect
					value={file.category}
					onChange={handleChangeCategory}
					disabled={loading}
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

const FileCategorySelect = ({
	value,
	onChange,
	disabled,
}: {
	value: FileCategory | undefined;
	onChange: (category: FileCategory) => void;
	disabled: boolean;
}) => {
	return (
		<Select
			label="Category"
			hideOptionalLabel
			placeholder="Select a category"
			options={categories}
			value={value}
			disabled={disabled}
			onChange={(event) => onChange(event.target.value as FileCategory)}
		/>
	);
};
