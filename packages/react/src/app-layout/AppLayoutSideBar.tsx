import {
	Fragment,
	MouseEventHandler,
	ReactNode,
	useEffect,
	useRef,
} from 'react';
import { Global } from '@emotion/react';
import { createPortal } from 'react-dom';
import FocusLock from 'react-focus-lock';
import { boxPalette, tokens } from '@ag.ds-next/react/core';
import { Box, Flex, Stack } from '@ag.ds-next/react/box';
import { Button } from '@ag.ds-next/react/button';
import { Logo } from '@ag.ds-next/react/ag-branding';
import { useAuthenticatedAppShellContext } from './AppLayoutContext';
import { ChevronsLeftIcon } from './icons';
import { authenticatedAppShellHeaderHeight } from './utils';

export function AppLayoutSideBar({ children }: { children: ReactNode }) {
	const { isMenuOpen, isMobile } = useAuthenticatedAppShellContext();

	if (isMobile) {
		return <AppLayoutSideBarMobile>{children}</AppLayoutSideBarMobile>;
	}

	return (
		<Stack
			as="aside"
			gap={1}
			dark
			background="bodyAlt"
			css={{
				display: isMenuOpen ? 'flex' : 'none',
				position: 'sticky',
				top: 0,
				flexShrink: 0,
				height: '100vh',
				width: tokens.maxWidth.mobileMenu,
				borderLeft: `8px solid ${boxPalette.accent}`,
				// This component should never be visible on smaller devices
				[tokens.mediaQuery.max.md]: {
					display: 'none',
				},
			}}
		>
			<Flex
				paddingX={1.5}
				justifyContent="center"
				alignItems="center"
				color="text"
				height={authenticatedAppShellHeaderHeight}
				flexShrink={0}
				maxWidth={tokens.maxWidth.mobileMenu}
				borderBottom
				borderColor="muted"
				css={{ svg: { display: 'block' } }}
			>
				<Logo />
			</Flex>
			<Flex justifyContent="flex-end" paddingX={1.5}>
				<HideMenuButton />
			</Flex>
			{children}
		</Stack>
	);
}

function AppLayoutSideBarMobile({ children }: { children: ReactNode }) {
	const { isMenuOpen, hideMenu } = useAuthenticatedAppShellContext();
	const dialogRef = useRef<HTMLDivElement>(null);

	// Close the component when the user presses the escape key
	useEffect(() => {
		const handleKeyDown = (e: KeyboardEvent) => {
			if (e.code === 'Escape') {
				e.preventDefault();
				e.stopPropagation();
				hideMenu();
			}
		};
		window.addEventListener('keydown', handleKeyDown);
		return () => window.removeEventListener('keydown', handleKeyDown);
	}, [hideMenu]);

	// The following `useEffect` will add `aria-hidden="true"` to every direct child of the `body` element when the modal is opened.
	// This is because `aria-modal` is not yet supported by all browsers (https://a11ysupport.io/tech/aria/aria-modal_attribute).
	// This fixes a bug in certain devices where focus is not trapped correctly such as VoiceOver on iOS.
	// This has been inspired by Reach UI (https://github.com/reach/reach-ui/blob/main/packages/dialog/src/index.tsx)
	useEffect(() => {
		if (!isMenuOpen || !dialogRef.current) return;

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
	}, [isMenuOpen]);

	if (!isMenuOpen) {
		return null;
	}

	return createPortal(
		<Fragment>
			<LockScroll />
			<Overlay onClick={hideMenu} />
			<FocusLock returnFocus disabled={!isMenuOpen}>
				<Stack
					dark
					background="bodyAlt"
					paddingY={1}
					gap={1}
					css={{
						position: 'fixed',
						zIndex: 100,
						top: 0,
						left: 0,
						bottom: 0,
						overflowY: 'auto',
						width: '100%',
						borderLeft: `8px solid ${boxPalette.accent}`,
						[tokens.mediaQuery.min.md]: {
							width: tokens.maxWidth.mobileMenu,
						},
					}}
				>
					<Box
						paddingX={1.5}
						maxWidth={tokens.maxWidth.mobileMenu}
						color="text"
						css={{ svg: { display: 'block' } }}
					>
						<Logo />
					</Box>
					<Flex paddingX={1.5} justifyContent="flex-end">
						<HideMenuButton />
					</Flex>
					{children}
				</Stack>
			</FocusLock>
		</Fragment>,
		document.body
	);
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
				zIndex: 99,
			}}
			onClick={onClick}
		/>
	);
}

function LockScroll() {
	return <Global styles={{ body: { overflow: 'hidden' } }} />;
}

function HideMenuButton() {
	const { hideMenu, hideMenuButtonRef } = useAuthenticatedAppShellContext();
	return (
		<Button
			ref={hideMenuButtonRef}
			onClick={hideMenu}
			variant="text"
			iconBefore={ChevronsLeftIcon}
			css={{
				textDecoration: 'none',
			}}
		>
			Hide menu
		</Button>
	);
}
