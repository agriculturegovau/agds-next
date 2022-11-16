import { Stack } from '@ag.ds-next/box';
import { FileUploadRejectedFile } from './FileUploadRejectedFile';

export type RejectedFile = {
	id: string;
	fileName: string;
	fileSize: number;
	code: string;
	message: string;
};

export const FileUploadRejectedFileList = ({
	fileRejections,
	handleRemoveRejection,
}: {
	fileRejections: RejectedFile[];
	handleRemoveRejection: (id: string) => void;
}) => {
	if (fileRejections.length === 0) return null;

	return (
		<Stack as="ul" gap={0.5}>
			{fileRejections.map(({ id, ...rejection }) => (
				<FileUploadRejectedFile
					key={id}
					{...rejection}
					onRemove={() => handleRemoveRejection(id)}
				/>
			))}
		</Stack>
	);
};
