import { MouseEventHandler } from 'react';
import formatFileSize from 'filesize';
import { Box, Flex, Stack } from '../box';
import { Button } from '../button';
import { boxPalette } from '../core';
import { AlertFilledIcon } from '../icon';
import { Text } from '../text';

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
				<Box flexShrink={0}>
					<AlertFilledIcon
						color="error"
						size="md"
						aria-hidden="false"
						aria-label="Error"
						css={{ display: 'block' }}
					/>
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
