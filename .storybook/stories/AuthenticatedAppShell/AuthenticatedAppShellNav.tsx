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
import { MouseEventHandler } from 'react';
import {
	AuthenticatedAppShellNavItem,
	AuthenticatedAppShellNavItemType,
} from './AuthenticatedAppShellNavItem';
import { AuthenticatedAppShellNavPortalController } from './AuthenticatedAppShellNavPortalController';

export type AuthenticatedAppShellNavListItemType =
	| AuthenticatedAppShellNavItemType
	| {
			isSeperator?: boolean;
	  };

/** The vertical navigation bar for the UI shell. A lot of this code was copied from Main-nav NavContainerDialog */
export const AuthenticatedAppShellNav = ({
	items,
	isOpen,
	closeMenu,
}: {
	items: AuthenticatedAppShellNavListItemType[];
	isOpen: boolean;
	closeMenu: () => void;
}) => {
	const { windowWidth } = useWindowSize();
	const isOpenAsModal =
		isOpen && (windowWidth || 0) <= tokens.breakpoint.lg - 1;

	return (
		<Box>
			<AuthenticatedAppShellNavPortalController
				isOpenAsModal={isOpenAsModal}
				isHidden={!isOpen}
				closeMenu={closeMenu}
			>
				<Box
					dark
					background="bodyAlt"
					width={{ xs: '100%', md: tokens.maxWidth.mobileMenu }}
					height="100vh"
					css={mq({
						position: mapResponsiveProp({ xs: 'absolute', lg: 'relative' }),
						borderLeft: `8px solid ${boxPalette.accent}`,
					})}
				>
					{isOpenAsModal ? <LockScroll /> : null}
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
							{items.map(({ isSeperator, ...props }, index) => {
								if (isSeperator) {
									return <Box as="hr" borderBottom key={index} />;
								}

								return <AuthenticatedAppShellNavItem key={index} {...props} />;
							})}
						</Stack>
					</Box>
				</Box>
			</AuthenticatedAppShellNavPortalController>
			{isOpenAsModal ? <Overlay onClick={close} /> : null}
		</Box>
	);
};

function Overlay({ onClick }: { onClick: MouseEventHandler<HTMLDivElement> }) {
	return (
		<Box
			css={{
				position: 'fixed',
				top: 0,
				left: 0,
				bottom: 0,
				right: 0,
				backgroundColor: `rgba(0, 0, 0, 0.8)`,
				zIndex: 100,
			}}
			onClick={onClick}
		/>
	);
}

function LockScroll() {
	return <Global styles={{ body: { overflow: 'hidden' } }} />;
}
