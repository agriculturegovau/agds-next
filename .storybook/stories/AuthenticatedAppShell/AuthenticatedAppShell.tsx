import { Box, Flex, Stack } from '@ag.ds-next/react/box';
import { tokens, useTernaryState } from '@ag.ds-next/react/core';
import { ReactNode } from 'react';
import { AuthenticatedAppShellHeader } from './AuthenticatedAppShellHeader';
import { AuthenticatedAppShellSideBar } from './AuthenticatedAppShellSideBar';
import { AuthenticatedAppShellFooter } from './AuthenticatedAppShellFooter';
import {
	AuthenticatedAppShellSideBarItem,
	AuthenticatedAppShellSideBarItemType,
} from './AuthenticatedAppShellSideBarItem';
import { Logo } from '@ag.ds-next/react/ag-branding';
import { Button } from '@ag.ds-next/react/button';

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
	primaryNavItems: AuthenticatedAppShellSideBarItemType[];
	secondaryNavItems: AuthenticatedAppShellSideBarItemType[];
	signOut: () => void;
}) => {
	const [isOpen, openMenu, closeMenu] = useTernaryState(!collapseByDefault);

	return (
		<Box display="flex" flexDirection="row">
			<AuthenticatedAppShellSideBar isOpen={isOpen} closeMenu={closeMenu}>
				<Stack gap={1} padding={1}>
					<Box maxWidth={tokens.maxWidth.mobileMenu} color="text">
						<Logo />
					</Box>

					<Flex justifyContent="flex-end">
						<Button onClick={closeMenu} variant="text">
							Hide menu
						</Button>
					</Flex>
				</Stack>

				<Box as="nav">
					<Stack as="ul">
						{primaryNavItems.map(({ ...props }, index) => (
							<AuthenticatedAppShellSideBarItem key={index} {...props} />
						))}
					</Stack>
				</Box>
				<Box as="hr" borderBottom />
				<Box as="nav">
					<Stack as="ul">
						{secondaryNavItems.map(({ ...props }, index) => (
							<AuthenticatedAppShellSideBarItem key={index} {...props} />
						))}
					</Stack>
				</Box>
			</AuthenticatedAppShellSideBar>

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
