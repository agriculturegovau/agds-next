import { Box } from '../box';
import { tokens } from '../core';
import { Flex } from '../flex';
import { FileIcon } from '../icon/icons/FileIcon';

export const width = '4.5rem';

export const FileUploadFileThumbnail = ({ src }: { src?: string }) => {
	return src ? (
		<Box
			flexShrink={0}
			display={{ xs: 'none', md: 'block' }}
			css={{
				borderTopLeftRadius: tokens.borderRadius,
				borderBottomLeftRadius: tokens.borderRadius,
				backgroundImage: `url(${src})`,
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
