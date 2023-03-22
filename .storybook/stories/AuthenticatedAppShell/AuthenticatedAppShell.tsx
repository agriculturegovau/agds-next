import { PropsWithChildren, ComponentType, Fragment, useEffect } from 'react';
import { Box, Flex, Stack } from '@ag.ds-next/react/box';
import { tokens, useTernaryState } from '@ag.ds-next/react/core';
import { IconProps } from '@ag.ds-next/react/icon';
import { SkipLinks } from '@ag.ds-next/react/skip-link';
import { AuthenticatedAppShellHeader } from './AuthenticatedAppShellHeader';
import { AuthenticatedAppShellSideBar } from './AuthenticatedAppShellSideBar';
import { AuthenticatedAppShellFooter } from './AuthenticatedAppShellFooter';
import {
	AuthenticatedAppShellSideBarItem,
	AuthenticatedAppShellSideBarItemType,
	AuthenticatedAppShellSideBarDivider,
} from './AuthenticatedAppShellSideBarItem';
import { AuthenticatedAppShellContext } from './AuthenticatedAppShellContext';
import { useIsMobile } from './utils';

export type AuthenticatedAppShellProps = PropsWithChildren<{
	siteTitle: string;
	siteSubtitle: string;
	/** For screens where a user is focusing on a task, the UI should collapse */
	isFocusMode?: boolean;
	activePath: string;
	mainNavItems: AuthenticatedAppShellSideBarItemType[][];
	userMenu: {
		name: string;
		organisation: string;
		items: (
			| { label: string; href: string; icon?: ComponentType<IconProps> }
			| {
					label: string;
					onClick: () => void;
					icon?: ComponentType<IconProps>;
			  }
		)[];
	};
}>;

export function AuthenticatedAppShell({
	siteTitle,
	siteSubtitle,
	isFocusMode = false,
	activePath,
	mainNavItems,
	userMenu,
	children,
}: AuthenticatedAppShellProps) {
	const [isMenuVisible, showMenu, hideMenu] = useTernaryState(false);
	const isMobile = useIsMobile();

	// isMobile is always true on first render, so we need to hide the menu
	// when the screen size is properly detected.
	useEffect(() => {
		// Hide the menu when the screen size changes
		if (isMobile || isFocusMode) {
			hideMenu();
		} else {
			showMenu();
		}
	}, [isMobile]);

	return (
		<AuthenticatedAppShellContext.Provider
			value={{
				isMobile,
				isMenuVisible,
				showMenu,
				hideMenu,
				userMenu,
			}}
		>
			<SkipLinks
				links={[{ href: '#main-content', label: 'Skip to main content' }]}
			/>
			<Box display="flex" flexDirection="row">
				<AuthenticatedAppShellSideBar>
					<Box as="nav" aria-label="main">
						<Stack as="ul">
							{mainNavItems.map((nav, idx) => {
								const isLastItem = idx === mainNavItems.length - 1;
								return (
									<Fragment key={idx}>
										{nav.map((props, idx) => (
											<AuthenticatedAppShellSideBarItem
												key={idx}
												isActive={activePath === props.href}
												{...props}
											/>
										))}
										{!isLastItem ? (
											<AuthenticatedAppShellSideBarDivider />
										) : null}
									</Fragment>
								);
							})}
						</Stack>
					</Box>
				</AuthenticatedAppShellSideBar>
				<Box width="100%">
					<AuthenticatedAppShellHeader
						title={siteTitle}
						subtitle={siteSubtitle}
					/>
					<Flex alignItems="center" flexDirection="column">
						<Box
							width="100%"
							maxWidth={tokens.maxWidth.container}
							paddingX={tokens.containerPadding}
						>
							<Box
								id="main-content"
								paddingTop={{ xs: 2, md: 3 }}
								paddingBottom={{ xs: 3, md: 4 }}
							>
								{children}
							</Box>
							<AuthenticatedAppShellFooter />
						</Box>
					</Flex>
				</Box>
			</Box>
		</AuthenticatedAppShellContext.Provider>
	);
}
