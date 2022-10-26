import { Box } from '../box';
import { TextLink } from '../text-link';
import { boxPalette, LinkProps } from '../core';

export type TagProps = LinkProps;

export const Tag = (props: TagProps) => {
	const { children, href } = props;
	return (
		<Box
			as={href ? TextLink : 'span'}
			display="inline-block"
			border
			rounded
			paddingX={0.5}
			fontSize="sm"
			color={href ? 'action' : 'text'}
			css={{
				'&:hover': {
					backgroundColor: href ? boxPalette.backgroundShade : undefined,
				},
			}}
			{...props}
		>
			{children}
		</Box>
	);
};
