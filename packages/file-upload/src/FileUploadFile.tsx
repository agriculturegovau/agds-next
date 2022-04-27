import { MouseEventHandler } from 'react';
import { Flex } from '@ag.ds-next/box';
import { Text } from '@ag.ds-next/text';
import { Button } from '@ag.ds-next/button';
import { FileWithPath } from 'react-dropzone';
import formatFileSize from 'filesize';

export const FileUploadFile = ({
	file,
	onRemove,
}: {
	file: FileWithPath;
	onRemove: MouseEventHandler<HTMLButtonElement>;
}) => {
	return (
		<Flex
			background="shade"
			rounded
			alignItems="center"
			as="li"
			paddingY={0.5}
			paddingLeft={1.5}
			justifyContent="space-between"
		>
			<Text>
				{file.path} ({formatFileSize(file.size)})
			</Text>

			<Button variant="tertiary" onClick={onRemove}>
				Remove file
			</Button>
		</Flex>
	);
};
