import { MouseEventHandler } from 'react';
import { FileWithPath } from 'react-dropzone';
import formatFileSize from 'filesize';
import { Box, Flex } from '@ag.ds-next/box';
import { Text } from '@ag.ds-next/text';
import { Button } from '@ag.ds-next/button';

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
			paddingLeft={1}
			justifyContent="space-between"
		>
			<Text css={{ wordBreak: 'break-all' }}>
				{file.path} ({formatFileSize(file.size)})
			</Text>

			<Box flexShrink={0}>
				<Button variant="tertiary" onClick={onRemove}>
					Remove file
				</Button>
			</Box>
		</Flex>
	);
};
