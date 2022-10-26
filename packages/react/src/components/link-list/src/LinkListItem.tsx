import { Box } from '../../box/src';
import { LinkProps } from '../../core/src';
import { TextLink, TextLinkExternal } from '../../text-link/src';

export type LinkListItemProps = LinkProps;

export const LinkListItem = (props: LinkListItemProps) => {
	const TextComponent = props.target == '_blank' ? TextLinkExternal : TextLink;
	return (
		<Box as="li">
			<TextComponent {...props} />
		</Box>
	);
};
