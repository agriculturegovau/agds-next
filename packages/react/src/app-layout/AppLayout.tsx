import { PropsWithChildren, Fragment } from 'react';
import { Box, Stack } from '@ag.ds-next/react/box';
import { SkipLinks } from '@ag.ds-next/react/skip-link';
import { Content } from '@ag.ds-next/react/content';
import { AppLayoutHeader } from './AppLayoutHeader';
import { AppLayoutSideBar } from './AppLayoutSideBar';
import { AppLayoutFooter } from './AppLayoutFooter';
import {
	AppLayoutSideBarItem,
	AuthenticatedAppShellSideBarItemType,
	AuthenticatedAppShellSideBarDivider,
} from './AppLayoutSideBarItem';
import { AppLayoutContext } from './AppLayoutContext';
import {
	useIsMobile,
	useSidebarMenuState,
	useSidebarMenuToggles,
} from './utils';

export type AppLayoutProps = PropsWithChildren<{
	/** Title of the website */
	siteTitle: string;
	/** Subtitle of the website */
	siteSubtitle: string;
	/** For screens where a user is focusing on a task, the UI should collapse */
	isFocusMode?: boolean;
	/** Used for highlighting the active element. */
	activePath: string;
	/** Groups of items to display in the sidebar. */
	mainNavItems: AuthenticatedAppShellSideBarItemType[][];
	/** Configuration of the user dropdown menu. */
	userMenu: {
		name: string;
		organisation?: string;
		href: string;
	};
	handleSignOut: () => Promise<void>;
}>;

export function AppLayout({
	siteTitle,
	siteSubtitle,
	isFocusMode = false,
	activePath,
	mainNavItems,
	userMenu,
	children,
	handleSignOut,
}: AppLayoutProps) {
	const isMobile = useIsMobile();

	const [isMenuOpen, _showMenu, _hideMenu] = useSidebarMenuState({
		isFocusMode,
		isMobile,
	});

	const { showMenu, showMenuButtonRef, hideMenu, hideMenuButtonRef } =
		useSidebarMenuToggles({
			showMenu: _showMenu,
			hideMenu: _hideMenu,
		});

	return (
		<AppLayoutContext.Provider
			value={{
				isMobile,
				isMenuOpen,
				showMenu,
				hideMenu,
				userMenu,
				showMenuButtonRef,
				hideMenuButtonRef,
				handleSignOut,
			}}
		>
			<SkipLinks
				links={[{ href: '#main-content', label: 'Skip to main content' }]}
			/>
			<Box display="flex" flexDirection="row">
				<AppLayoutSideBar>
					<Box as="nav" aria-label="main">
						<Stack as="ul">
							{mainNavItems.map((group, idx, arr) => {
								const isLastItem = idx === arr.length - 1;
								return (
									<Fragment key={idx}>
										{group.map((item, idx) => (
											<AppLayoutSideBarItem
												key={idx}
												isActive={activePath === item.href}
												{...item}
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
				</AppLayoutSideBar>
				<Stack width="100%" minHeight={'100vh'}>
					<AppLayoutHeader title={siteTitle} subtitle={siteSubtitle} />

					<Box
						as="main"
						id="main-content"
						paddingTop={2}
						paddingBottom={3}
						flexGrow={1}
					>
						<Content>{children}</Content>
					</Box>

					<Content>
						<AppLayoutFooter />
					</Content>
				</Stack>
			</Box>
		</AppLayoutContext.Provider>
	);
}

// export type AppLayoutNavItem = {
// 	label: string;
// 	icon: FC;
// 	href: string;
// };

// export type AppLayoutProps = {
// 	isFocusMode?: boolean;
// 	userName: string;
// 	userOrganisation?: string;
// 	unreadMessageCount?: number;
// 	activePath: string;
// 	handleSignOut: () => Promise<void>;
// 	navigationItems?: AppLayoutNavItem[][];
// };

// /** Common application shell for apps in the user-facing authenticated space of the Export Service */
// export const AppLayout = ({
// 	children,
// 	isFocusMode,
// 	userName,
// 	userOrganisation,
// 	navigationItems,
// 	activePath,
// 	handleSignOut,
// }: PropsWithChildren<AppLayoutProps>) => {
// 	const bestActivePath = findBestMatch(
// 		navigationItems.flatMap((xs) => xs),
// 		activePath
// 	);

// 	return (
// 		<AuthenticatedAppShell
// 			siteTitle="Export Service"
// 			siteSubtitle="Supporting Australian agricultural exports"
// 			userMenu={{
// 				name: userName,
// 				organisation: userOrganisation,
// 				href: '/account/preferences',
// 			}}
// 			mainNavItems={navigationItems}
// 			isFocusMode={isFocusMode}
// 			activePath={bestActivePath}
// 			handleSignOut={handleSignOut}
// 		>
// 			{children}
// 		</AuthenticatedAppShell>
// 	);
// };
