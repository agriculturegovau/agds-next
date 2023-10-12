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
	hideThumbnails?: boolean;
};

export const FileUploadExistingFile = ({
	file,
	hideThumbnails,
}: FileUploadExistingFileProps) => {
	const { name, size, href, thumbnailSrc, onDelete } = file;
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
								href={href}
								target="_blank"
								rel="noopener noreferrer"
								css={{ wordBreak: 'break-all' }}
							>
								{name} ({formatFileSize(size)})
							</TextLink>
						</Text>
					) : (
						<Text paddingY={1.5} css={{ wordBreak: 'break-all' }}>
							{name} ({formatFileSize(size)})
						</Text>
					)}
				</Flex>
			</Flex>
			<Flex flexShrink={0} alignItems="center" paddingRight={1}>
				<Box>
					<Button
						variant="text"
						onClick={onDelete}
						aria-label={`Remove file, ${name}`}
					>
						Remove file
					</Button>
				</Box>
			</Flex>
		</Flex>
	);
};
