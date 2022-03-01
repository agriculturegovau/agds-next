import { Box } from '@ag.ds-next/box';
import { TextLink } from '@ag.ds-next/text';
import { LinkProps } from '@ag.ds-next/core';

export type InpageNavItemProps = LinkProps & { href: string };

export const InpageNavItem = (props: InpageNavItemProps) => (
	<Box as="li">
		<TextLink {...props} />
	</Box>
);
