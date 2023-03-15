import { Box, Flex } from '@ag.ds-next/react/box';
import { tokens, useTernaryState } from '@ag.ds-next/react/core';
import { ReactNode } from 'react';
import { AuthenticatedAppShellHeader } from './AuthenticatedAppShellHeader';
import {
	AuthenticatedAppShellNav,
	AuthenticatedAppShellNavListItemType,
} from './AuthenticatedAppShellNav';
import { AuthenticatedAppShellFooter } from './AuthenticatedAppShellFooter';

export const AuthenticatedAppShell = ({
	siteTitle,
	siteSubtitle,
	children,
	collapseByDefault = false,
	navItems,
}: {
	siteTitle: string;
	siteSubtitle: string;
	children: ReactNode;
	collapseByDefault?: boolean;
	navItems: AuthenticatedAppShellNavListItemType[];
	signOut: () => void;
}) => {
	const [isOpen, openMenu, closeMenu] = useTernaryState(!collapseByDefault);

	return (
		<Box display="flex" flexDirection="row">
			<AuthenticatedAppShellNav
				isOpen={isOpen}
				closeMenu={closeMenu}
				items={navItems}
			/>

			<Box
				width="100%"
				css={{
					overflow: 'scroll',
				}}
			>
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
