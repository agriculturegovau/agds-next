import { Box } from '../box';
import { tokens } from '../core';
import { Flex } from '../flex';
import { FileIcon } from '../icon/icons/FileIcon';

export const width = '4.5rem';

export const FileUploadFileThumbnail = ({ src }: { src?: string }) => {
	return src ? (
		<Box
			css={{
				borderTopLeftRadius: tokens.borderRadius,
				borderBottomLeftRadius: tokens.borderRadius,
				backgroundImage: `url(${src})`,
				backgroundSize: 'cover',
				backgroundPosition: 'center',
				width: width,
			}}
			display={{ xs: 'none', md: 'block' }}
			flexShrink={0}
		/>
	) : (
		<Flex
			alignItems="center"
			css={{
				borderTopLeftRadius: tokens.borderRadius,
				borderBottomLeftRadius: tokens.borderRadius,
				width: width,
			}}
			display={{ xs: 'none', md: 'flex' }}
			flexShrink={0}
			justifyContent="center"
		>
			<FileIcon color="muted" size="md" />
		</Flex>
	);
};
