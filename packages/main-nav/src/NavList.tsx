import type { ReactNode } from 'react';
import { Flex } from '@ag.ds-next/box';
import { themeVars, tokens, useLinkComponent } from '@ag.ds-next/core';

import { NavItem } from './NavItem';
import { active } from '../../../docs/public/storybook/vendors~main.903e0c9f354136890982.manager.bundle';

export type NavListProps = {
	links: { href: string; label: ReactNode }[]; // FIXME: this is too restrictive
	activePath?: string;
};

export function NavList({ links, activePath }: NavListProps) {
	const Link = useLinkComponent();
	const bestMatch = findBestMatch(links, activePath);
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
				<NavItem key={index} active={href === bestMatch}>
					<Link href={href} {...props}>
						{label}
					</Link>
				</NavItem>
			))}
		</Flex>
	);
}

function findBestMatch(links: { href: string }[], activePath?: string) {
	if (!activePath) return '';
	let bestMatch = '';

	for (const link of links) {
		if (link.href === activePath) return link.href;
		if (
			activePath?.startsWith(link.href) &&
			link.href.length > bestMatch.length
		) {
			bestMatch = link.href;
		}
	}

	return bestMatch;
}
