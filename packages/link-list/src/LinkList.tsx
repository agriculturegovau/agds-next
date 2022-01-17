import { LinkListGroup } from './LinkListGroup';
import { LinkListItem } from './LinkListItem';

export type LinkListProps = {
	links: { href: string; label: string }[];
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
