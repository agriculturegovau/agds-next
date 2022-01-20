import { ReactNode } from 'react';

import { LinkListContainer } from './LinkListContainer';
import { LinkListItem } from './LinkListItem';

export type LinkListProps = {
	links: { href: string; label: ReactNode }[];
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
