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
		<Stack as="ul" aria-label="Existing files" gap={0.5}>
			{files.map((file, index) => (
				<FileUploadExistingFile
					key={index}
					file={file}
					hideThumbnails={hideThumbnails}
					onRemove={() => onRemove?.(file)}
				/>
			))}
		</Stack>
	);
};
