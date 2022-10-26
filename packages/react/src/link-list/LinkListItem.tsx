import { Box } from '../box';
import { LinkProps } from '../core';
import { TextLink, TextLinkExternal } from '../text-link';

export type LinkListItemProps = LinkProps;

export const LinkListItem = (props: LinkListItemProps) => {
	const TextComponent = props.target == '_blank' ? TextLinkExternal : TextLink;
	return (
		<Box as="li">
			<TextComponent {...props} />
		</Box>
	);
};
