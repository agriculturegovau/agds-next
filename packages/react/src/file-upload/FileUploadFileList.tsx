import { Stack } from '../stack';
import { FileUploadFile } from './FileUploadFile';
import { FileWithStatus } from './utils';

type FileUploadFileListProps = {
	files: FileWithStatus[];
	hideThumbnails?: boolean;
	onRemove?: (index: number) => void;
};

export const FileUploadFileList = ({
	files,
	hideThumbnails,
	onRemove,
}: FileUploadFileListProps) => {
	if (!files.length) {
		return null;
	}

	return (
		<Stack aria-label="Selected files" as="ul" gap={0.5}>
			{files.map((file, index) => (
				<FileUploadFile
					file={file}
					hideThumbnails={hideThumbnails}
					key={index}
					onRemove={onRemove ? () => onRemove(index) : undefined}
				/>
			))}
		</Stack>
	);
};
