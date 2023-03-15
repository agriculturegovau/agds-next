import { Box } from '@ag.ds-next/react/box';
import {
	tokens,
	useTernaryState,
	useToggleState,
} from '@ag.ds-next/react/core';
import { ReactNode } from 'react';
import { AuthenticatedAppShellHeader } from './AuthenticatedAppShellHeader';
import {
	AuthenticatedAppShellNav,
	AuthenticatedAppShellNavListItemType,
} from './AuthenticatedAppShellNav';

export const AuthenticatedAppShell = ({
	children,
	collapseByDefault = false,
	navItems,
}: {
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

			<Box width="100%">
				<AuthenticatedAppShellHeader
					title="Export Service"
					subtitle="Supporting Australian agricultural exports"
					isNavbarOpen={isOpen}
					openMenu={openMenu}
				/>
				<Box
					css={{
						height: '100%',
						width: '100%',
						margin: '0 auto',
						maxWidth: tokens.maxWidth.container,
						overflow: 'scroll',
					}}
					padding={1}
				>
					<Box>{children}</Box>
				</Box>
			</Box>
		</Box>
	);
};
