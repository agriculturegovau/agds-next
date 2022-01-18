import { StackProps } from '@ag.ds-next/box';
import { ReactNode } from 'react';

import { LinkListGroup } from './LinkListGroup';
import { LinkListItem } from './LinkListItem';

export type LinkListProps = StackProps & {
	links: { href: string; label: ReactNode }[];
	horizontal?: boolean;
};

export const LinkList = ({ links, horizontal, ...props }: LinkListProps) => {
	return (
		<LinkListGroup horizontal={horizontal} {...props}>
			{links.map(({ label, ...props }, index) => (
				<LinkListItem key={index} {...props}>
					{label}
				</LinkListItem>
			))}
		</LinkListGroup>
	);
};
