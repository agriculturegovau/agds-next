import { Fragment } from 'react';
import { Stack } from '@ag.ds-next/box';
import { Text } from '@ag.ds-next/text';
import { FileUploadFile } from './FileUploadFile';
import { FileWithStatus, getFilesTotal } from './utils';

export const FileUploadFileList = ({
	files,
	onRemove,
}: {
	files: FileWithStatus[];
	onRemove: (file: FileWithStatus) => void;
}) => (
	<Fragment>
		<Text color="muted">{getFilesTotal(files)}</Text>
		<Stack as="ul" gap={0.5}>
			{files.map((file, index) => (
				<FileUploadFile
					key={index}
					name={file.name}
					size={file.size}
					status={file.status}
					onRemove={() => onRemove(file)}
				/>
			))}
		</Stack>
	</Fragment>
);
