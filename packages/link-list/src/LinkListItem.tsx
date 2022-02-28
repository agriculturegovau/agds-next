import { Box } from '@ag.ds-next/box';
import { TextLink, TextLinkProps } from '@ag.ds-next/text';

export type LinkListItemProps = TextLinkProps;

export const LinkListItem = (props: LinkListItemProps) => (
	<Box as="li">
		<TextLink {...props} />
	</Box>
);
