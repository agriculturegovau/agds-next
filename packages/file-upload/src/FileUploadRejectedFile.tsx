import { MouseEventHandler } from 'react';
import formatFileSize from 'filesize';
import { Box, Flex, Stack } from '@ag.ds-next/box';
import { Button } from '@ag.ds-next/button';
import { boxPalette } from '@ag.ds-next/core';
import { AlertFilledIcon } from '@ag.ds-next/icon';
import { Text } from '@ag.ds-next/text';
import { Prose } from '@ag.ds-next/prose';

type FileUploadRejectedFileProps = {
	fileName: string;
	fileSize: number;
	errors: { message: string; code: string }[];
	onRemove: MouseEventHandler<HTMLButtonElement>;
};

export const FileUploadRejectedFile = ({
	fileName,
	fileSize,
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
						{fileName} ({formatFileSize(fileSize)}) could not be selected
					</Text>
					<Prose>
						<ul>
							{errors.map(({ message }, index) => (
								<li key={index}>{message}</li>
							))}
						</ul>
					</Prose>
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
