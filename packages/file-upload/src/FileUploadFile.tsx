import React, { MouseEventHandler } from 'react';
import { Box, Flex } from '@ag.ds-next/box';
import { boxPalette, globalPalette } from '@ag.ds-next/core';
import { Text } from '@ag.ds-next/text';
import { Button } from '@ag.ds-next/button';
import { LoadingDots } from '@ag.ds-next/loading';
import formatFileSize from 'filesize';
import { SuccessFilledIcon } from '@ag.ds-next/icon';
import { FileWithStatus } from './utils';

export const FileUploadFile = ({
	file: { status = 'none', size, name },
	onRemove,
}: {
	file: FileWithStatus;
	onRemove: MouseEventHandler<HTMLButtonElement>;
}) => {
	return (
		<div css={{ position: 'relative' }}>
			<Flex
				rounded
				alignItems="center"
				as="li"
				paddingY={0.5}
				paddingLeft={1}
				justifyContent="space-between"
				css={{
					minHeight: 64,
					backgroundColor: toneMapper[status],
				}}
			>
				<Flex alignItems="center" gap={0.5}>
					{status == 'success' && (
						<SuccessFilledIcon color="success" size="md" />
					)}

					<Text css={{ wordBreak: 'break-all' }}>
						{name} ({formatFileSize(size)})
					</Text>
				</Flex>

				<Box flexShrink={0}>
					{status === 'uploading' ? (
						<Box paddingX={1.5}>
							<LoadingDots />
						</Box>
					) : (
						<Button variant="tertiary" onClick={onRemove}>
							Remove file
						</Button>
					)}
				</Box>
			</Flex>
		</div>
	);
};

const toneMapper = {
	none: boxPalette.backgroundShade,
	uploading: boxPalette.backgroundShade,
	success: globalPalette.successMuted,
} as const;
