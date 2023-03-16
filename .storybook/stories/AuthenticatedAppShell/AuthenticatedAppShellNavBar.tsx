import { Logo } from '@ag.ds-next/react/ag-branding';
import { Box, Flex, Stack } from '@ag.ds-next/react/box';
import { Button } from '@ag.ds-next/react/button';
import {
	boxPalette,
	mapResponsiveProp,
	mq,
	tokens,
	useWindowSize,
} from '@ag.ds-next/react/core';
import { Global } from '@emotion/react';
import { Fragment, MouseEventHandler, ReactNode } from 'react';
import {
	AuthenticatedAppShellNavItem,
	AuthenticatedAppShellNavItemType,
} from './AuthenticatedAppShellNavItem';
import { AuthenticatedAppShellNavPortalController } from './AuthenticatedAppShellNavPortalController';

// TODO AuthenticatedAppShellSidebar
// Combine with AuthenticatedAppShellNavPortalController.tsx

/** The vertical navigation bar for the UI shell. A lot of this code was copied from Main-nav NavContainerDialog */
export const AuthenticatedAppShellNavBar = ({
	isOpen,
	closeMenu,
	children,
}: {
	isOpen: boolean;
	closeMenu: () => void;
	children: ReactNode;
}) => {
	return (
		<AuthenticatedAppShellNavPortalController
			isOpen={isOpen}
			closeMenu={closeMenu}
		>
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
			{children}
		</AuthenticatedAppShellNavPortalController>
	);
};
