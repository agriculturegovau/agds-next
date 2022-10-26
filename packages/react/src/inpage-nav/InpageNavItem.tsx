import { Box } from '../box';
import { TextLink } from '../text-link';
import { LinkProps } from '../core';

export type InpageNavItemProps = LinkProps & { href: string };

export const InpageNavItem = (props: InpageNavItemProps) => (
	<Box as="li">
		<TextLink {...props} />
	</Box>
);
