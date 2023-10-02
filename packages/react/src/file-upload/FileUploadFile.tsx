import { MouseEventHandler } from 'react';
import { Box } from '../box';
import { Flex } from '../flex';
import { boxPalette } from '../core';
import { Text } from '../text';
import { Button } from '../button';
import { LoadingDots } from '../loading';
import { SuccessFilledIcon } from '../icon';
import { FileUploadFileThumbnail } from './FileUploadFileThumbnail';
import { FileWithStatus, formatFileSize } from './utils';

type FileUploadFileProps = {
	file: FileWithStatus;
	onRemove: MouseEventHandler<HTMLButtonElement>;
};

export const FileUploadFile = ({ file, onRemove }: FileUploadFileProps) => {
	const { name, size, status = 'none' } = file;

	return (
		<Flex
			rounded
			as="li"
			aria-label={`${status === 'success' ? 'Uploaded file' : 'File'}. ${name}`}
			gap={0.5}
			justifyContent="space-between"
			css={{ backgroundColor: TONE_MAP[status] }}
		>
			<Flex>
				<FileUploadFileThumbnail file={file} />
				<Flex alignItems="center" paddingLeft={0.5} gap={0.5}>
					{status == 'success' && (
						<Box flexShrink={0}>
							<SuccessFilledIcon
								color="success"
								size="md"
								aria-hidden="false"
								aria-label="Success"
								css={{ display: 'block' }}
							/>
						</Box>
					)}
					<Text paddingY={1.5} css={{ wordBreak: 'break-all' }}>
						{name} ({formatFileSize(size)})
					</Text>
				</Flex>
			</Flex>

			<Flex flexShrink={0} alignItems="center">
				{status === 'uploading' ? (
					<Box paddingY={1} paddingX={1.5}>
						<LoadingDots label="uploading" />
					</Box>
				) : (
					<Box paddingRight={0.5}>
						<Button
							variant="text"
							onClick={onRemove}
							aria-label={`Remove file, ${name}`}
						>
							Remove file
						</Button>
					</Box>
				)}
			</Flex>
		</Flex>
	);
};

const TONE_MAP = {
	none: boxPalette.backgroundShade,
	uploading: boxPalette.backgroundShade,
	success: boxPalette.systemSuccessMuted,
} as const;
