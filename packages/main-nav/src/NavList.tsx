import type { ReactNode } from 'react';
import { Flex } from '@ag.ds-next/box';
import {
	boxPalette,
	tokens,
	useLinkComponent,
	LinkProps,
} from '@ag.ds-next/core';

import { NavListItem } from './NavListItem';

export type NavListLink = Omit<LinkProps, 'children'> & {
	label: ReactNode;
};

export type NavListProps = {
	links: NavListLink[];
	activePath?: string;
};

export function NavList({ links, activePath }: NavListProps) {
	const Link = useLinkComponent();
	return (
		<Flex
			as="ul"
			flexDirection={{ xs: 'column', md: 'row' }}
			flexWrap="wrap"
			alignItems="stretch"
			css={{
				[tokens.mediaQuery.max.sm]: {
					'& > li': {
						borderTopWidth: tokens.borderWidth.sm,
						borderTopStyle: 'solid',
						borderTopColor: boxPalette.border,
					},
				},
			}}
		>
			{links.map(({ href, label, ...props }, index) => (
				<NavListItem key={index} active={href === activePath}>
					<Link href={href} {...props}>
						{label}
					</Link>
				</NavListItem>
			))}
		</Flex>
	);
}
