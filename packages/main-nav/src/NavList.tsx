import type { ReactNode } from 'react';
import { Flex } from '@ag.ds-next/box';
import { themeVars, tokens } from '@ag.ds-next/core';

import { NavItem } from './NavItem';

function DefaultLink({ href, label }: { href: string; label: ReactNode }) {
	return <a href={href}>{label}</a>;
}

export type NavListProps = {
	links: { href: string; label: ReactNode }[];
	linkComponent?: typeof DefaultLink;
	activePath?: string;
};

export function NavList({
	links,
	linkComponent: Link = DefaultLink,
	activePath,
}: NavListProps) {
	return (
		<Flex
			as="ul"
			flexDirection={{ xs: 'column', md: 'row' }}
			gap={{ md: 1 }}
			alignItems="stretch"
			css={{
				[`@media (max-width: ${tokens.breakpoints.md - 1}px)`]: {
					'& > li': {
						borderTop: `1px solid ${themeVars.border}`,
					},
				},
			}}
		>
			{links.map((link, index) => (
				<NavItem key={index} active={link.href === activePath}>
					<Link {...link} />
				</NavItem>
			))}
		</Flex>
	);
}
