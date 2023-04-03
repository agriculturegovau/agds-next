import { ReactNode } from 'react';
import { LinkListContainer } from './LinkListContainer';
import { LinkListItem, LinkListItemProps } from './LinkListItem';

export type LinkListLink = Omit<LinkListItemProps, 'children'> & {
	label: ReactNode;
};

export type LinkListProps = {
	links: LinkListLink[];
	horizontal?: boolean;
};

export const LinkList = ({ links, horizontal }: LinkListProps) => {
	return (
		<LinkListContainer horizontal={horizontal}>
			{links.map(({ label, ...props }, index) => (
				<LinkListItem key={index} {...props}>
					{label}
				</LinkListItem>
			))}
		</LinkListContainer>
	);
};
