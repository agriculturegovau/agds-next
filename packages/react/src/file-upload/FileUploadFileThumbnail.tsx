import { useMemo } from 'react';
import { Flex } from '../flex';
import { mapSpacing, tokens } from '../core';
import { FileIcon } from '../icon/icons/FileIcon';
import { FileWithStatus, getImageThumbnail } from './utils';

export const FileUploadFileThumbnail = ({ file }: { file: FileWithStatus }) => {
	const imagePreview = useMemo(() => getImageThumbnail(file), [file]);
	return imagePreview ? (
		<img
			alt=""
			role="presentation"
			src={imagePreview}
			css={{
				width: mapSpacing(4),
				height: mapSpacing(4),
				'object-fit': 'cover',
				borderRadius: tokens.borderRadius,
			}}
		/>
	) : (
		<Flex
			background="shadeAlt"
			rounded
			alignItems="center"
			justifyContent="center"
			width={mapSpacing(4)}
			height={mapSpacing(4)}
		>
			<FileIcon size="lg" />
		</Flex>
	);
};
