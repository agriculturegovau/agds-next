import { ReactNode } from 'react';
import { Flex } from '@ag.ds-next/box';
// import { tokens, mapSpacing, themeVars } from '@ag.ds-next/core';
// import { Text } from '@ag.ds-next/text';

import { MainNavContainer, MainNavContainerProps } from './MainNavContainer';
import { NavItem } from './NavItem';

export function MainNav({
	variant,
	links,
}: React.PropsWithChildren<{
	variant: MainNavContainerProps['variant'];
	links: NavLinkListProps['links'];
}>) {
	return (
		<MainNavContainer variant={variant}>
			<NavLinkList links={links} />
		</MainNavContainer>
	);
}

function NavLink({ href, label }: { href: string; label: string }) {
	return <a href={href}>{label}</a>;
}

export function NavLinkListContainer({ children }: { children: ReactNode }) {
	return (
		<Flex as="ul" flexDirection={{ xs: 'column', md: 'row' }} gap={2}>
			{children}
		</Flex>
	);
}

type NavLinkListProps = {
	links: { href: string; label: string }[];
	linkComponent?: typeof NavLink;
};

export function NavLinkList({
	links,
	linkComponent: Link = NavLink,
}: NavLinkListProps) {
	return (
		<NavLinkListContainer>
			{links.map((link, index) => (
				<NavItem key={index}>
					<Link {...link} />
				</NavItem>
			))}
		</NavLinkListContainer>
	);
}
