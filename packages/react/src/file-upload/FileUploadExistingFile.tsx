import { MouseEventHandler } from 'react';
import { Box } from '../box';
import { Flex } from '../flex';
import { Text } from '../text';
import { Button } from '../button';
import { CloseIcon, SuccessFilledIcon } from '../icon';
import { TextLink } from '../text-link';
import { FileUploadFileThumbnail } from './FileUploadFileThumbnail';
import { ExistingFile, formatFileSize } from './utils';

type FileUploadExistingFileProps = {
	file: ExistingFile;
	hideThumbnails?: boolean;
	onRemove: MouseEventHandler<HTMLButtonElement>;
};

export const FileUploadExistingFile = ({
	file,
	hideThumbnails,
	onRemove,
}: FileUploadExistingFileProps) => {
	const { name, size, href, thumbnailSrc } = file;
	const showThumbnail = !hideThumbnails;
	return (
		<Flex
			as="li"
			background="success"
			gap={0.5}
			justifyContent="space-between"
			rounded
		>
			<Flex>
				{showThumbnail && <FileUploadFileThumbnail src={thumbnailSrc} />}
				<Flex alignItems="center" gap={0.5} paddingLeft={1}>
					<Box flexShrink={0}>
						<SuccessFilledIcon
							aria-hidden="false"
							aria-label="Success"
							color="success"
							css={{ display: 'block' }}
							size="md"
						/>
					</Box>
					{href ? (
						<Text breakWords paddingY={1.5}>
							<TextLink href={href} rel="noopener noreferrer" target="_blank">
								{name}
								{size ? ` (${formatFileSize(size)})` : null}
							</TextLink>
						</Text>
					) : (
						<Text breakWords paddingY={1.5}>
							{name}
							{size ? (
								<Text css={{ whiteSpace: 'nowrap' }}>
									{' '}
									({formatFileSize(size)})
								</Text>
							) : null}
						</Text>
					)}
				</Flex>
			</Flex>
			<Flex alignItems="center" flexShrink={0} paddingRight={1}>
				<Button
					aria-label={`Remove file: ${name}`}
					iconBefore={CloseIcon}
					onClick={onRemove}
					variant="text"
				>
					Remove
				</Button>
			</Flex>
		</Flex>
	);
};
