import {
	PropsWithChildren,
	MouseEventHandler,
	ComponentType,
	useEffect,
} from 'react';
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
} from './AuthenticatedAppShellSideBarItem';
import { AuthenticatedAppShellContext } from './AuthenticatedAppShellContext';
import { useIsMobile } from './utils';

export type AuthenticatedAppShellProps = PropsWithChildren<{
	siteTitle: string;
	siteSubtitle: string;
	/** For screens where a user is focusing on a task, the UI should collapse */
	isFocusMode?: boolean;
	activePath: string;
	mainNavItems: {
		primary: AuthenticatedAppShellSideBarItemType[];
		secondary: AuthenticatedAppShellSideBarItemType[];
	};
	userMenu: {
		name: string;
		organisation: string;
		items: (
			| { label: string; href: string; icon?: ComponentType<IconProps> }
			| {
					label: string;
					onClick: MouseEventHandler<HTMLButtonElement>;
					icon?: ComponentType<IconProps>;
			  }
		)[];
	};
}>;

export const AuthenticatedAppShell = ({
	siteTitle,
	siteSubtitle,
	isFocusMode = false,
	activePath,
	mainNavItems,
	userMenu,
	children,
}: AuthenticatedAppShellProps) => {
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
			<Box display="flex" flexDirection="row">
				<AuthenticatedAppShellSideBar>
					<Stack gap={1}>
						<SkipLinks
							links={[{ href: '#main-content', label: 'Skip to main content' }]}
						/>
						<Box as="nav" aria-label="main">
							<Stack as="ul">
								{mainNavItems.primary.map((props, index) => (
									<AuthenticatedAppShellSideBarItem
										key={index}
										isActive={activePath === props.href}
										{...props}
									/>
								))}
							</Stack>
						</Box>
						<Box paddingX={2}>
							<Box
								as="hr"
								borderBottom
								borderColor="muted"
								aria-hidden="true"
							/>
						</Box>
						<Box as="nav" aria-label="secondary">
							<Stack as="ul">
								{mainNavItems.secondary.map((props, index) => (
									<AuthenticatedAppShellSideBarItem
										key={index}
										isActive={activePath === props.href}
										{...props}
									/>
								))}
							</Stack>
						</Box>
					</Stack>
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
};
