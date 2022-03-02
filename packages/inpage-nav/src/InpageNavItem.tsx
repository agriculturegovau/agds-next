import { Box } from '@ag.ds-next/box';
import { Text, TextLink } from '@ag.ds-next/text';
import { LinkProps } from '@ag.ds-next/core';

export type InpageNavItemProps = LinkProps;

export const InpageNavItem = (props: InpageNavItemProps) => {
	const { children, href } = props;
	return (
		<Box as="li">
			{href ? <TextLink href={href} {...props} /> : <Text>{children}</Text>}
		</Box>
	);
};
