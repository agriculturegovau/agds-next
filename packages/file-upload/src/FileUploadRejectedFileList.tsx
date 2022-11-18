import { Stack } from '@ag.ds-next/box';
import { FileUploadRejectedFile } from './FileUploadRejectedFile';

export type RejectedFile = {
	fileName: string;
	fileSize: number;
	errors: { message: string; code: string }[];
};

export const FileUploadRejectedFileList = ({
	fileRejections,
	handleRemoveRejection,
}: {
	fileRejections: RejectedFile[];
	handleRemoveRejection: (fileName: string) => void;
}) => {
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
