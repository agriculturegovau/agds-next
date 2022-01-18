import { StackProps } from '@ag.ds-next/box';

import { LinkListGroup } from './LinkListGroup';
import { LinkListItem, LinkListItemType } from './LinkListItem';

export type LinkListProps = StackProps & {
	links: LinkListItemType[];
	horizontal?: boolean;
};

export const LinkList = ({ links, horizontal, ...props }: LinkListProps) => {
	return (
		<LinkListGroup horizontal={horizontal} {...props}>
			{links.map((props, index) => (
				<LinkListItem key={index} {...props} />
			))}
		</LinkListGroup>
	);
};
