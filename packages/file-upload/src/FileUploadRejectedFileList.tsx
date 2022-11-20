import { Stack } from '@ag.ds-next/box';
import { FileUploadRejectedFile } from './FileUploadRejectedFile';
import type { RejectedFile } from './utils';

type FileUploadRejectedFileListProps = {
	fileRejections: RejectedFile[];
	handleRemoveRejection: (fileName: string) => void;
};

export const FileUploadRejectedFileList = ({
	fileRejections,
	handleRemoveRejection,
}: FileUploadRejectedFileListProps) => {
	return (
		<Stack as="ul" aria-label="Invalid files" gap={0.5}>
			{fileRejections.map((rejection) => (
				<FileUploadRejectedFile
					key={rejection.fileName}
					{...rejection}
					onRemove={() => handleRemoveRejection(rejection.fileName)}
				/>
			))}
		</Stack>
	);
};
