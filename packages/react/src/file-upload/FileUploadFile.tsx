import { MouseEventHandler, useMemo } from 'react';
import { Box } from '../box';
import { Flex } from '../flex';
import { Text } from '../text';
import { Button } from '../button';
import { LoadingDots } from '../loading';
import { CloseIcon, SuccessFilledIcon } from '../icon';
import { TextLink } from '../text-link';
import { FileUploadFileThumbnail } from './FileUploadFileThumbnail';
import { FileWithStatus, formatFileSize, getImageThumbnail } from './utils';

type FileUploadFileProps = {
	file: FileWithStatus;
	hideThumbnails?: boolean;
	onRemove?: MouseEventHandler<HTMLButtonElement>;
};

export const FileUploadFile = ({
	file,
	hideThumbnails,
	onRemove,
}: FileUploadFileProps) => {
	const { download, href, name, size, status = 'none' } = file;
	const showThumbnail = !hideThumbnails;
	const imagePreview = useMemo(() => getImageThumbnail(file), [file]);
	return (
		<Flex
			as="li"
			background={status === 'success' ? status : 'shade'}
			gap={0.5}
			justifyContent="space-between"
			rounded
		>
			<Flex>
				{showThumbnail && <FileUploadFileThumbnail src={imagePreview} />}
				<Flex alignItems="center" gap={0.5} paddingLeft={1}>
					{status == 'success' && (
						<Box flexShrink={0}>
							<SuccessFilledIcon
								aria-hidden="false"
								aria-label="Success"
								color="success"
								css={{ display: 'block' }}
								size="md"
							/>
						</Box>
					)}
					{href ? (
						<Text breakWords paddingY={1.5}>
							<TextLink
								download={download}
								href={href}
								rel="noopener noreferrer"
								target="_blank"
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
			<Flex alignItems="center" flexShrink={0} paddingRight={1}>
				{status === 'uploading' ? (
					<Box paddingY={1}>
						<LoadingDots label="Uploading" />
					</Box>
				) : onRemove ? (
					<Button
						aria-label={`Remove file: ${name}`}
						iconBefore={CloseIcon}
						onClick={onRemove}
						size="sm"
						variant="text"
					>
						Remove
					</Button>
				) : null}
			</Flex>
		</Flex>
	);
};
