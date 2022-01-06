import type { ReactNode } from 'react';
import { Flex } from '@ag.ds-next/box';
import { themeVars, tokens, useLinkComponent } from '@ag.ds-next/core';

import { NavItem } from './NavItem';

export type NavListProps = {
	links: { href: string; label: ReactNode }[]; // FIXME: this is too restrictive
	activePath?: string;
};

export function NavList({ links, activePath }: NavListProps) {
	const Link = useLinkComponent();
	return (
		<Flex
			as="ul"
			flexDirection={{ xs: 'column', md: 'row' }}
			gap={{ md: 1 }}
			alignItems="stretch"
			css={{
				[tokens.mediaQuery.max.sm]: {
					'& > li': {
						borderTop: `1px solid ${themeVars.border}`,
					},
				},
			}}
		>
			{links.map(({ href, label, ...props }, index) => (
				<NavItem key={index} active={href === activePath}>
					<Link href={href} {...props}>
						{label}
					</Link>
				</NavItem>
			))}
		</Flex>
	);
}
