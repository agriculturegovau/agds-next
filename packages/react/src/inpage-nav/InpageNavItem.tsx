import { Box } from '../box';
import { TextLink } from '../text-link';
import { LinkProps, tokens } from '../core';

export type InpageNavItemProps = LinkProps & { href: string };

export const InpageNavItem = (props: InpageNavItemProps) => (
	<Box as="li" maxWidth={tokens.maxWidth.bodyText}>
		<TextLink {...props} css={{ maxWidth: tokens.maxWidth.bodyText }} />
	</Box>
);
