import { MouseEventHandler } from 'react';
import formatFileSize from 'filesize';
import { Box, Flex } from '@ag.ds-next/box';
import { boxPalette } from '@ag.ds-next/core';
import { Text } from '@ag.ds-next/text';
import { Button } from '@ag.ds-next/button';
import { LoadingDots } from '@ag.ds-next/loading';
import { SuccessFilledIcon } from '@ag.ds-next/icon';
import { FileStatus } from './utils';

type FileUploadFileProps = {
	name: string;
	size: number;
	status?: FileStatus;
	onRemove: MouseEventHandler<HTMLButtonElement>;
};

// TODO: Rename to FileUploadAcceptedFile
export const FileUploadFile = ({
	status = 'none',
	size,
	name,
	onRemove,
}: FileUploadFileProps) => {
	return (
		<Flex
			rounded
			alignItems="center"
			as="li"
			aria-label={`${status === 'success' ? 'Uploaded file' : 'File'}. ${name}`}
			paddingY={0.5}
			paddingLeft={1}
			justifyContent="space-between"
			css={{ backgroundColor: TONE_MAP[status] }}
		>
			<Flex alignItems="center" gap={0.5}>
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
				<Text css={{ wordBreak: 'break-all' }}>
					{name} ({formatFileSize(size)})
				</Text>
			</Flex>
			<Box flexShrink={0}>
				{status === 'uploading' ? (
					<Box paddingY={1} paddingX={1.5}>
						<LoadingDots aria-label="uploading" />
					</Box>
				) : (
					<Button
						variant="tertiary"
						onClick={onRemove}
						aria-label={`Remove file, ${name}`}
					>
						Remove file
					</Button>
				)}
			</Box>
		</Flex>
	);
};

const TONE_MAP = {
	none: boxPalette.backgroundShade,
	uploading: boxPalette.backgroundShade,
	success: boxPalette.systemSuccessMuted,
} as const;
