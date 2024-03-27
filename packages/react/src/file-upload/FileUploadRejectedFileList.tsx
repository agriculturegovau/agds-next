import { Stack } from '../stack';
import { FileUploadRejectedFile } from './FileUploadRejectedFile';
import type { FileWithStatus, RejectedFile } from './utils';

type FileUploadRejectedFileListProps = {
	fileRejections: RejectedFile[];
	handleRemoveRejection: (index: number, file: FileWithStatus) => void;
	hideThumbnails: boolean;
};

export const FileUploadRejectedFileList = ({
	fileRejections,
	handleRemoveRejection,
	hideThumbnails,
}: FileUploadRejectedFileListProps) => {
	if (!fileRejections.length) {
		return null;
	}

	return (
		<Stack as="ul" aria-label="Invalid files" gap={0.5}>
			{fileRejections.map((rejection, index) => (
				<FileUploadRejectedFile
					key={rejection.file.name}
					{...rejection}
					onRemove={() => handleRemoveRejection(index, rejection.file)}
					hideThumbnails={hideThumbnails}
				/>
			))}
		</Stack>
	);
};
