import { Stack } from '@ag.ds-next/react/stack';
import { BatchFileUpload } from './BatchFileUpload';
import { FileWithCategory } from './FileWithCategory';
import { changeFileCategory, deleteFile, FileCategory } from './utils';

type FileAndCategory = { file: File; category?: string; artifactId?: string };

type NoiDocumentUploadInputProps = {
	value: FileAndCategory[];
	onChange: (value: FileAndCategory[]) => void;
};

export const NoiDocumentUploadInput = ({
	value,
	onChange,
}: NoiDocumentUploadInputProps) => {
	function onBatchFileUploadChange(files: File[]) {
		console.log('ONCHANGE');
		const filesWithMeta = files.map((file, index) => ({
			file,
			category: value[index]?.category,
			artifactId: value[index]?.artifactId,
		}));
		onChange(filesWithMeta);
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
					function onCategoryChange(category: FileCategory) {
						const nextValue = value;
						nextValue[index].category = category;
						onChange(nextValue);

						if (item.artifactId) {
							changeFileCategory(item.artifactId, category);
						}
					}

					function onArtifactIdChange(artifactId: string) {
						const nextValue = value;
						nextValue[index].artifactId = artifactId;
						onChange(nextValue);
					}

					function onRemove() {
						onChange(value.filter((_, itemIdx) => itemIdx !== index));
						if (item.artifactId) {
							deleteFile(item.artifactId);
						}
					}

					return (
						<FileWithCategory
							key={index}
							file={item}
							onCategoryChange={onCategoryChange}
							onArtifactIdChange={onArtifactIdChange}
							onRemove={onRemove}
						/>
					);
				})}
			</Stack>
		</Stack>
	);
};
