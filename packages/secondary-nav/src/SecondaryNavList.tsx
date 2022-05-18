import type { ReactNode } from 'react';
import { Flex } from '@ag.ds-next/box';
import { useLinkComponent, LinkProps } from '@ag.ds-next/core';

import { SecondaryNavListItem } from './SecondaryNavListItem';

export type SecondaryNavListLink = Omit<LinkProps, 'children'> & {
	label: ReactNode;
};

export type SecondaryNavListProps = {
	links: SecondaryNavListLink[];
	activePath?: string;
};

export function SecondaryNavList({ links, activePath }: SecondaryNavListProps) {
	const Link = useLinkComponent();
	return (
		<Flex
			as="ul"
			flexDirection={['column', 'row']}
			flexWrap="wrap"
			css={{ position: 'relative', zIndex: 1 }}
		>
			{links.map(({ href, label, ...props }, index) => {
				const active = href === activePath;
				return (
					<SecondaryNavListItem key={index} active={active}>
						<Link
							href={href}
							aria-current={active ? 'page' : undefined}
							{...props}
						>
							{label}
						</Link>
					</SecondaryNavListItem>
				);
			})}
		</Flex>
	);
}
