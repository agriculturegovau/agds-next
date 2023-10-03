import { Stack } from '../stack';
import { FileUploadRejectedFile } from './FileUploadRejectedFile';
import type { RejectedFile } from './utils';

type FileUploadRejectedFileListProps = {
	fileRejections: RejectedFile[];
	handleRemoveRejection: (fileName: string) => void;
	hideThumbnails: boolean;
};

export const FileUploadRejectedFileList = ({
	fileRejections,
	handleRemoveRejection,
	hideThumbnails,
}: FileUploadRejectedFileListProps) => {
	return (
		<Stack as="ul" aria-label="Invalid files" gap={0.5}>
			{fileRejections.map((rejection) => (
				<FileUploadRejectedFile
					key={rejection.file.name}
					{...rejection}
					onRemove={() => handleRemoveRejection(rejection.file.name)}
					hideThumbnails={hideThumbnails}
				/>
			))}
		</Stack>
	);
};
