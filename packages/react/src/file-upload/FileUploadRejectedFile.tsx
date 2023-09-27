import { MouseEventHandler } from 'react';
import { FileWithPath } from 'react-dropzone';
import { Box } from '../box';
import { Flex } from '../flex';
import { Stack } from '../stack';
import { Button } from '../button';
import { boxPalette } from '../core';
import { AlertFilledIcon } from '../icon';
import { Text } from '../text';
import { formatFileSize } from './utils';
import { FileUploadFileThumbnail } from './FileUploadFileThumbnail';

type FileUploadRejectedFileProps = {
	file: FileWithPath;
	errors: { message: string; code: string }[];
	onRemove: MouseEventHandler<HTMLButtonElement>;
};

export const FileUploadRejectedFile = ({
	file,
	errors,
	onRemove,
}: FileUploadRejectedFileProps) => {
	return (
		<Flex
			as="li"
			gap={0.5}
			alignItems="flex-start"
			rounded
			flexDirection="row"
			justifyContent="space-between"
			paddingY={1}
			paddingLeft={1}
			css={{
				background: boxPalette.systemErrorMuted,
			}}
		>
			<Flex gap={0.5}>
				<FileUploadFileThumbnail file={file} />
				<Box flexShrink={0}>
					<AlertFilledIcon
						color="error"
						size="md"
						aria-hidden="false"
						aria-label="Error"
						css={{ display: 'block' }}
					/>
				</Box>
				<Stack gap={0.5}>
					<Text fontWeight="bold" color="error">
						{file.name} ({formatFileSize(file.size)}) could not be selected
					</Text>
					<ul css={{ margin: 0, padding: 0 }}>
						{errors.map(({ message }, index) => (
							<Text as="li" key={index} css={{ listStyle: 'inside' }}>
								{message}
							</Text>
						))}
					</ul>
				</Stack>
			</Flex>
			<Box flexShrink={0}>
				<Button variant="tertiary" onClick={onRemove}>
					Remove file
				</Button>
			</Box>
		</Flex>
	);
};
