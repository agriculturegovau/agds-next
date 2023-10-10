import { useMemo } from 'react';
import { Box } from '../box';
import { tokens } from '../core';
import { Flex } from '../flex';
import { FileIcon } from '../icon/icons/FileIcon';
import { FileWithStatus, getImageThumbnail } from './utils';

export const FileUploadFileThumbnail = ({ file }: { file: FileWithStatus }) => {
	const imagePreview = useMemo(() => getImageThumbnail(file), [file]);
	const width = '4.5rem';
	return imagePreview ? (
		<Box
			flexShrink={0}
			display={{ xs: 'none', md: 'block' }}
			css={{
				borderTopLeftRadius: tokens.borderRadius,
				borderBottomLeftRadius: tokens.borderRadius,
				backgroundImage: `url(${imagePreview})`,
				backgroundSize: 'cover',
				backgroundPosition: 'center',
				width: width,
			}}
		/>
	) : (
		<Flex
			flexShrink={0}
			alignItems="center"
			justifyContent="center"
			display={{ xs: 'none', md: 'flex' }}
			css={{
				borderTopLeftRadius: tokens.borderRadius,
				borderBottomLeftRadius: tokens.borderRadius,
				width: width,
			}}
		>
			<FileIcon size="md" color="muted" />
		</Flex>
	);
};
