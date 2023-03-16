import { Box, Flex, Stack } from '@ag.ds-next/react/box';
import { tokens, useTernaryState } from '@ag.ds-next/react/core';
import { ReactNode } from 'react';
import { AuthenticatedAppShellHeader } from './AuthenticatedAppShellHeader';
import { AuthenticatedAppShellNavBar } from './AuthenticatedAppShellNavBar';
import { AuthenticatedAppShellFooter } from './AuthenticatedAppShellFooter';
import {
	AuthenticatedAppShellNavItem,
	AuthenticatedAppShellNavItemType,
} from './AuthenticatedAppShellNavItem';

export const AuthenticatedAppShell = ({
	siteTitle,
	siteSubtitle,
	children,
	collapseByDefault = false,
	primaryNavItems,
	secondaryNavItems,
}: {
	siteTitle: string;
	siteSubtitle: string;
	children: ReactNode;
	collapseByDefault?: boolean;
	primaryNavItems: AuthenticatedAppShellNavItemType[];
	secondaryNavItems: AuthenticatedAppShellNavItemType[];
	signOut: () => void;
}) => {
	const [isOpen, openMenu, closeMenu] = useTernaryState(!collapseByDefault);

	return (
		<Box display="flex" flexDirection="row">
			<AuthenticatedAppShellNavBar isOpen={isOpen} closeMenu={closeMenu}>
				<Box as="nav">
					<Stack as="ul">
						{primaryNavItems.map(({ ...props }, index) => (
							<AuthenticatedAppShellNavItem key={index} {...props} />
						))}
					</Stack>
				</Box>
				<Box as="hr" borderBottom />
				<Box as="nav">
					<Stack as="ul">
						{secondaryNavItems.map(({ ...props }, index) => (
							<AuthenticatedAppShellNavItem key={index} {...props} />
						))}
					</Stack>
				</Box>
			</AuthenticatedAppShellNavBar>

			<Box width="100%">
				<AuthenticatedAppShellHeader
					title={siteTitle}
					subtitle={siteSubtitle}
					isNavbarOpen={isOpen}
					openMenu={openMenu}
				/>

				<Flex alignItems="center" flexDirection="column">
					<Box
						width="100%"
						maxWidth={tokens.maxWidth.container}
						paddingX={tokens.containerPadding}
					>
						<Box paddingTop={{ xs: 2, md: 3 }} paddingBottom={{ xs: 3, md: 4 }}>
							{children}
						</Box>
						<AuthenticatedAppShellFooter />
					</Box>
				</Flex>
			</Box>
		</Box>
	);
};
