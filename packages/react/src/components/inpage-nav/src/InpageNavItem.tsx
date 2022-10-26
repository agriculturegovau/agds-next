import { Box } from '../../box/src';
import { TextLink } from '../../text-link/src';
import { LinkProps } from '../../core/src';

export type InpageNavItemProps = LinkProps & { href: string };

export const InpageNavItem = (props: InpageNavItemProps) => (
	<Box as="li">
		<TextLink {...props} />
	</Box>
);
