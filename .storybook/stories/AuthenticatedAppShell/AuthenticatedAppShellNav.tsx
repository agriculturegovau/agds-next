import { Logo } from '@ag.ds-next/react/ag-branding';
import { Box, Flex, Stack } from '@ag.ds-next/react/box';
import { Button } from '@ag.ds-next/react/button';
import {
	boxPalette,
	mapResponsiveProp,
	mapSpacing,
	mq,
	tokens,
	useWindowSize,
} from '@ag.ds-next/react/core';
import { Global } from '@emotion/react';
import { MouseEventHandler, ReactNode, useEffect, useRef } from 'react';
import { createPortal } from 'react-dom';
import FocusLock from 'react-focus-lock';
import {
	AuthenticatedAppShellNavItem,
	AuthenticatedAppShellNavItemType,
} from './AuthenticatedAppShellNavItem';

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

	console.log({ isOpenAsModal });

	return (
		<Box>
			<AuthenticatedAppShellNavPortalController
				isOpenAsModal={isOpenAsModal}
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
							{items.map(({ isSeperator, ...props }) => {
								if (isSeperator) {
									return <Box as="hr" borderBottom />;
								}

								return <AuthenticatedAppShellNavItem {...props} />;
							})}
						</Stack>
					</Box>
				</Box>
			</AuthenticatedAppShellNavPortalController>
			{isOpenAsModal ? <Overlay onClick={close} /> : null}
		</Box>
	);
};

const AuthenticatedAppShellNavPortalController = ({
	isOpenAsModal,
	children,
	closeMenu,
}: {
	children: ReactNode;
	isOpenAsModal: boolean;
	closeMenu: () => void;
}) => {
	const dialogRef = useRef<HTMLDivElement>(null);

	// Close the component when the user presses the escape key
	useEffect(() => {
		const handleKeyDown = (e: KeyboardEvent) => {
			if (e.code === 'Escape') {
				e.preventDefault();
				e.stopPropagation();
				closeMenu();
			}
		};
		window.addEventListener('keydown', handleKeyDown);
		return () => window.removeEventListener('keydown', handleKeyDown);
	}, [closeMenu]);

	// The following `useEffect` will add `aria-hidden="true"` to every direct child of the `body` element when the modal is opened.
	// This is because `aria-modal` is not yet supported by all browsers (https://a11ysupport.io/tech/aria/aria-modal_attribute).
	// This fixes a bug in certain devices where focus is not trapped correctly such as VoiceOver on iOS.
	// This has been inspired by Reach UI (https://github.com/reach/reach-ui/blob/main/packages/dialog/src/index.tsx)
	useEffect(() => {
		if (!isOpenAsModal || !dialogRef.current) return;

		const rootNodes: Element[] = [];
		const originalAttrs: (string | null)[] = [];

		document.querySelectorAll('body > *').forEach(function (node) {
			if (node === dialogRef.current) return;
			const attr = node.getAttribute('aria-hidden');
			const alreadyHidden = attr !== null && attr !== 'false';
			if (alreadyHidden) return;
			rootNodes.push(node);
			originalAttrs.push(attr);
			node.setAttribute('aria-hidden', 'true');
		});

		return () => {
			rootNodes.forEach((node, index) => {
				const originalValue = originalAttrs[index];
				if (originalValue === null) {
					node.removeAttribute('aria-hidden');
				} else {
					node.setAttribute('aria-hidden', originalValue);
				}
			});
		};
	}, [isOpenAsModal]);

	const element = (
		<Box
			css={{
				[tokens.mediaQuery.max.md]: {
					zIndex: 200,
					position: 'fixed',
					display: isOpenAsModal ? 'block' : 'none',
					top: 0,
					left: 0,
					bottom: 0,
					width: '100%',
					boxSizing: 'border-box',
					overflowY: 'auto',
				},
			}}
		>
			<FocusLock returnFocus disabled={!isOpenAsModal}>
				{children}
			</FocusLock>
		</Box>
	);

	if (isOpenAsModal) {
		return createPortal(element, document.body);
	}

	return element;
};

function LockScroll() {
	return <Global styles={{ body: { overflow: 'hidden' } }} />;
}

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
