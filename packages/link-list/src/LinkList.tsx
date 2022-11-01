import { ReactNode } from 'react';
import { LinkListContainer } from './LinkListContainer';
import { LinkListItem, LinkListItemProps } from './LinkListItem';

export type LinkListProps = {
	links: (Omit<LinkListItemProps, 'children'> & { label: ReactNode })[];
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
