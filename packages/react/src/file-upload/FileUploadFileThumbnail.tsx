import { useMemo } from 'react';
import { Box } from '../box';
import { mapSpacing } from '../core';
import { Flex } from '../flex';
import { FileIcon } from '../icon/icons/FileIcon';
import { FileWithStatus, getImageThumbnail } from './utils';

export const FileUploadFileThumbnail = ({ file }: { file: FileWithStatus }) => {
	const imagePreview = useMemo(() => getImageThumbnail(file), [file]);
	const size = { xs: mapSpacing(3), lg: mapSpacing(4) };

	return imagePreview ? (
		<Box
			as="img"
			alt=""
			role="presentation"
			src={imagePreview}
			width={size}
			height={size}
			rounded
			flexShrink={0}
			flexGrow={0}
			display={{ xs: 'none', md: 'block' }}
			css={{
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
			width={size}
			height={size}
			display={{ xs: 'none', md: 'flex' }}
		>
			<FileIcon size="md" color="muted" />
		</Flex>
	);
};
