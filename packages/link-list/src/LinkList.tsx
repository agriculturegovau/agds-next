import { LinkListGroup } from './LinkListGroup';
import { LinkListItem, LinkListItemType } from './LinkListItem';

export type LinkListProps = {
	links: LinkListItemType[];
	inline?: boolean;
};

export const LinkList = ({ links, inline, ...props }: LinkListProps) => {
	return (
		<LinkListGroup inline={inline} {...props}>
			{links.map((props, index) => (
				<LinkListItem key={index} {...props} />
			))}
		</LinkListGroup>
	);
};
