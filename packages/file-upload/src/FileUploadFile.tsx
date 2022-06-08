import { MouseEventHandler } from 'react';
import { Box, Flex } from '@ag.ds-next/box';
import { boxPalette, globalPalette } from '@ag.ds-next/core';
import { Text } from '@ag.ds-next/text';
import { Button } from '@ag.ds-next/button';
import formatFileSize from 'filesize';
import { SuccessFilledIcon } from '@ag.ds-next/icon';
import { FileWithStatus } from './utils';

export const FileUploadFile = ({
	file,
	onRemove,
	tone = 'none',
}: {
	file: FileWithStatus;
	onRemove: MouseEventHandler<HTMLButtonElement>;
	tone?: 'none' | 'uploading' | 'success';
}) => {
	return (
		<Flex
			rounded
			alignItems="center"
			as="li"
			paddingY={0.5}
			paddingLeft={1}
			justifyContent="space-between"
			css={{
				backgroundColor: toneMapper[tone],
			}}
		>
			<Flex alignItems="center" gap={0.5}>
				{tone == 'success' && <SuccessFilledIcon color="success" size="md" />}
				{/* TODO: Loading icon */}

				<Text css={{ wordBreak: 'break-all' }}>
					{file.name} ({formatFileSize(file.size)})
				</Text>
			</Flex>

			<Box flexShrink={0}>
				<Button variant="tertiary" onClick={onRemove}>
					Remove file
				</Button>
			</Box>
		</Flex>
	);
};

const toneMapper = {
	none: boxPalette.backgroundShade,
	uploading: globalPalette.infoMuted,
	success: globalPalette.successMuted,
} as const;
