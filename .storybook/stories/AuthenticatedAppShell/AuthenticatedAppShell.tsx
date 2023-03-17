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
type AuthenticatedAppShellProps = {
	siteTitle: string;
	siteSubtitle: string;
	children: ReactNode;
	/** For screens where a user is focusing on a task, the UI should collapse */
	isFocusMode?: boolean;
	primaryNavItems: AuthenticatedAppShellSideBarItemType[];
	secondaryNavItems: AuthenticatedAppShellSideBarItemType[];
	signOut: () => void;
};

export const AuthenticatedAppShell = ({
	siteTitle,
	siteSubtitle,
	children,
	isFocusMode = false,
	primaryNavItems,
	secondaryNavItems,
}: AuthenticatedAppShellProps) => {
	const [isModalOpen, openModal, closeModal] = useTernaryState(false);

	return (
		<Box display="flex" flexDirection="row">
			<AuthenticatedAppShellSideBar
				isFocusMode={isFocusMode}
				isModalOpen={isModalOpen}
				closeModal={closeModal}
			>
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
					isNavbarOpen={isModalOpen}
					openMenu={openModal}
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
