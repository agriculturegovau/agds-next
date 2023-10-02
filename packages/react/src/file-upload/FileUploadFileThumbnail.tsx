import { useMemo } from 'react';
import { Box } from '../box';
import { Flex } from '../flex';
import { FileIcon } from '../icon/icons/FileIcon';
import { FileWithStatus, getImageThumbnail } from './utils';

export const FileUploadFileThumbnail = ({ file }: { file: FileWithStatus }) => {
	const imagePreview = useMemo(() => getImageThumbnail(file), [file]);
	const width = '4.5rem';
	return imagePreview ? (
		<Box
			as="img"
			alt=""
			role="presentation"
			src={imagePreview}
			rounded
			flexShrink={0}
			display={{ xs: 'none', md: 'block' }}
			css={{
				width: width,
				'object-fit': 'cover',
			}}
		/>
	) : (
		<Flex
			flexShrink={0}
			rounded
			border
			borderColor="muted"
			borderWidth="sm"
			alignItems="center"
			justifyContent="center"
			display={{ xs: 'none', md: 'flex' }}
			css={{
				width: width,
			}}
		>
			<FileIcon size="md" color="muted" />
		</Flex>
	);
};
