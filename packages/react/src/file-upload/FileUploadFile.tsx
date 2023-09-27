import { MouseEventHandler, useMemo } from 'react';
import { Box } from '../box';
import { Flex } from '../flex';
import { boxPalette, mapSpacing, tokens } from '../core';
import { Text } from '../text';
import { Button } from '../button';
import { LoadingDots } from '../loading';
import { SuccessFilledIcon } from '../icon';
import { FileIcon } from '../icon/icons/FileIcon';
import { FileWithStatus, formatFileSize, getImageThumbnail } from './utils';

type FileUploadFileProps = {
	file: FileWithStatus;
	onRemove: MouseEventHandler<HTMLButtonElement>;
};

export const FileUploadFile = ({ file, onRemove }: FileUploadFileProps) => {
	const { name, size, status = 'none' } = file;

	return (
		<Flex
			rounded
			alignItems="center"
			as="li"
			aria-label={`${status === 'success' ? 'Uploaded file' : 'File'}. ${name}`}
			paddingY={0.5}
			paddingLeft={0.5}
			justifyContent="space-between"
			css={{ backgroundColor: TONE_MAP[status] }}
		>
			<Flex alignItems="center" gap={0.5}>
				{status == 'success' && (
					<Box flexShrink={0} paddingX={0.5}>
						<SuccessFilledIcon
							color="success"
							size="md"
							aria-hidden="false"
							aria-label="Success"
							css={{ display: 'block' }}
						/>
					</Box>
				)}
				<FileUploadFileThumbnail file={file} />
				<Text css={{ wordBreak: 'break-all' }}>
					{name} ({formatFileSize(size)})
				</Text>
			</Flex>
			<Box flexShrink={0}>
				{status === 'uploading' ? (
					<Box paddingY={1} paddingX={1.5}>
						<LoadingDots label="uploading" />
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

export const FileUploadFileThumbnail = ({ file }: { file: FileWithStatus }) => {
	const imagePreview = useMemo(() => getImageThumbnail(file), [file]);
	return imagePreview ? (
		<img
			alt=""
			role="presentation"
			src={imagePreview}
			css={{
				width: mapSpacing(4),
				height: mapSpacing(4),
				'object-fit': 'cover',
				borderRadius: tokens.borderRadius,
			}}
		/>
	) : (
		<Flex
			background="shadeAlt"
			rounded
			alignItems="center"
			justifyContent="center"
			width={mapSpacing(4)}
			height={mapSpacing(4)}
		>
			<FileIcon size="lg" />
		</Flex>
	);
};

const TONE_MAP = {
	none: boxPalette.backgroundShade,
	uploading: boxPalette.backgroundShade,
	success: boxPalette.systemSuccessMuted,
} as const;
