import { MouseEventHandler } from 'react';
import { Box } from '../box';
import { Flex } from '../flex';
import { Text } from '../text';
import { Button } from '../button';
import { SuccessFilledIcon } from '../icon';
import { TextLink } from '../text-link';
import { FileUploadFileThumbnail } from './FileUploadFileThumbnail';
import { ExistingFile, formatFileSize } from './utils';

type FileUploadExistingFileProps = {
	file: ExistingFile;
	onRemove: MouseEventHandler<HTMLButtonElement>;
	hideThumbnails?: boolean;
};

export const FileUploadExistingFile = ({
	file,
	onRemove,
	hideThumbnails,
}: FileUploadExistingFileProps) => {
	const { name, size, href, thumbnailSrc } = file;
	const showThumbnail = !hideThumbnails;
	return (
		<Flex
			rounded
			as="li"
			aria-label={`Uploaded file. ${name}`}
			gap={0.5}
			justifyContent="space-between"
			background="success"
		>
			<Flex>
				{showThumbnail && <FileUploadFileThumbnail src={thumbnailSrc} />}
				<Flex alignItems="center" paddingLeft={1} gap={0.5}>
					<Box flexShrink={0}>
						<SuccessFilledIcon
							color="success"
							size="md"
							aria-hidden="false"
							aria-label="Success"
							css={{ display: 'block' }}
						/>
					</Box>
					{href ? (
						<Text paddingY={1.5}>
							<TextLink
								breakWords
								href={href}
								target="_blank"
								rel="noopener noreferrer"
							>
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
			<Flex flexShrink={0} alignItems="center" paddingRight={1}>
				<Box>
					<Button
						variant="text"
						onClick={onRemove}
						aria-label={`Remove file, ${name}`}
					>
						Remove file
					</Button>
				</Box>
			</Flex>
		</Flex>
	);
};
