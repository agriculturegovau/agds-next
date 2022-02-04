import type { ReactNode } from 'react';
import { Flex } from '@ag.ds-next/box';
import { boxPalette, tokens, useLinkComponent } from '@ag.ds-next/core';

import { NavItem } from './NavItem';

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
			alignItems="stretch"
			css={{
				[tokens.mediaQuery.max.sm]: {
					'& > li': {
						borderTop: `1px solid ${boxPalette.border}`,
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
