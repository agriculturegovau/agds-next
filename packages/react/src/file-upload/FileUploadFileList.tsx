import { Stack } from '../stack';
import { FileUploadFile } from './FileUploadFile';
import { FileWithStatus } from './utils';

type FileUploadFileListProps = {
	files: FileWithStatus[];
	hideThumbnails?: boolean;
	onRemove: (index: number) => void;
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
		<Stack as="ul" aria-label="Selected files" gap={0.5}>
			{files.map((file, index) => (
				<FileUploadFile
					key={index}
					file={file}
					onRemove={() => onRemove(index)}
					hideThumbnails={hideThumbnails}
				/>
			))}
		</Stack>
	);
};
