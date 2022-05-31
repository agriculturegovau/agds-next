import { Box } from '@ag.ds-next/box';
import { LinkProps } from '@ag.ds-next/core';
import { TextLink, TextLinkExternal } from '@ag.ds-next/text';

export type LinkListItemProps = LinkProps;

export const LinkListItem = (props: LinkListItemProps) => {
	const TextComponent = props.target == '_blank' ? TextLinkExternal : TextLink;
	return (
		<Box as="li">
			<TextComponent {...props} />
		</Box>
	);
};
