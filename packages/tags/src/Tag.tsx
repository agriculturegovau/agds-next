import { Box } from '@ag.ds-next/box';
import { TextLink } from '@ag.ds-next/text';
import { LinkProps } from '@ag.ds-next/core';

export type TagProps = Omit<LinkProps, 'color'>;

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
			{...props}
		>
			{children}
		</Box>
	);
};
