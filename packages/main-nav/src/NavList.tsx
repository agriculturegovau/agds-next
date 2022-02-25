import type { ReactNode } from 'react';
import { Flex } from '@ag.ds-next/box';
import { boxPalette, tokens, useLinkComponent } from '@ag.ds-next/core';

import { NavItem } from './NavItem';

export type NavListProps = {
	links: { href: string; label: ReactNode; icon?: ReactNode }[]; // FIXME: this is too restrictive
	activePath?: string;
};

export function NavList({ links, activePath }: NavListProps) {
	const Link = useLinkComponent();
	return (
		<Flex
			as="ul"
			flexDirection={{ xs: 'column', md: 'row' }}
			alignItems="stretch"
			css={{
				[tokens.mediaQuery.max.sm]: {
					'& > li': {
						borderTop: `1px solid ${boxPalette.border}`,
					},
				},
			}}
		>
			{links.map(({ href, label, icon, ...props }, index) => (
				<NavItem key={index} active={href === activePath}>
					<Link href={href} {...props}>
						{label}
						{icon}
					</Link>
				</NavItem>
			))}
		</Flex>
	);
}
