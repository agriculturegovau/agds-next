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
	hideThumbnails: boolean;
	errors: { message: string; code: string }[];
	file: FileWithPath;
	onRemove: MouseEventHandler<HTMLButtonElement>;
};

export const FileUploadRejectedFile = ({
	file,
	errors,
	onRemove,
	hideThumbnails,
}: FileUploadRejectedFileProps) => {
	const showThumbnail = !hideThumbnails;
	return (
		<Flex
			as="li"
			gap={0.5}
			rounded
			justifyContent="space-between"
			css={{
				background: boxPalette.systemErrorMuted,
			}}
		>
			<Flex>
				{showThumbnail && <FileUploadFileThumbnail file={file} />}
				<Flex paddingLeft={0.5} gap={0.5} paddingY={0.75}>
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
			</Flex>

			<Flex flexShrink={0} alignItems="center" paddingRight={0.5}>
				<Button variant="text" onClick={onRemove}>
					Remove file
				</Button>
			</Flex>
		</Flex>
	);
};
