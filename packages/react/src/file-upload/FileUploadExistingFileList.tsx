import { Stack } from '../stack';
import { FileUploadExistingFile } from './FileUploadExistingFile';
import { ExistingFile } from './utils';

type FileUploadExistingFileListProps = {
	files: ExistingFile[];
	onRemove?: (file: ExistingFile) => void;
	hideThumbnails?: boolean;
};

export const FileUploadExistingFileList = ({
	files,
	hideThumbnails,
	onRemove,
}: FileUploadExistingFileListProps) => {
	if (!files.length) {
		return null;
	}

	return (
		<Stack aria-label="Existing files" as="ul" gap={0.5}>
			{files.map((file, index) => (
				<FileUploadExistingFile
					file={file}
					hideThumbnails={hideThumbnails}
					key={index}
					onRemove={onRemove ? () => onRemove?.(file) : undefined}
				/>
			))}
		</Stack>
	);
};
