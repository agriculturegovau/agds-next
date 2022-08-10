import { MouseEventHandler } from 'react';
import formatFileSize from 'filesize';
import { Box, Flex, Stack } from '@ag.ds-next/box';
import { Button } from '@ag.ds-next/button';
import { boxPalette } from '@ag.ds-next/core';
import { AlertFilledIcon } from '@ag.ds-next/icon';
import { Text } from '@ag.ds-next/text';

type FileRejectionProps = {
	fileName: string;
	fileSize: number;
	message: string;
	onRemove: MouseEventHandler<HTMLButtonElement>;
};

// TODO: Rename to FileUploadRejectedFile
export const FileRejection = ({
	fileName,
	fileSize,
	message,
	onRemove,
}: FileRejectionProps) => {
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
				<Box flexShrink={1}>
					<AlertFilledIcon color="error" size="md" />
				</Box>
				<Stack gap={0}>
					<Text fontWeight="bold" color="error">
						{message}
					</Text>
					<Text>
						{fileName} ({formatFileSize(fileSize)})
					</Text>
				</Stack>
			</Flex>
			<Box flexShrink={0}>
				<Button variant="tertiary" onClick={onRemove}>
					Remove error
				</Button>
			</Box>
		</Flex>
	);
};
