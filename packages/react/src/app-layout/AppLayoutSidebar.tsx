import {
	Fragment,
	MouseEventHandler,
	PropsWithChildren,
	useEffect,
	useRef,
} from 'react';
import { Global } from '@emotion/react';
import { createPortal } from 'react-dom';
import FocusLock from 'react-focus-lock';
import { boxPalette, tokens } from '../core';
import { Box, Stack } from '../box';
import { useAppLayoutContext } from './AppLayoutContext';
import { BORDER_WIDTH_XXL } from './utils';
import { AppLayoutSidebarNav, NavItem } from './AppLayoutSidebarNav';

export type AppLayoutSidebarProps = {
	/** Used for highlighting the active element. */
	activePath?: string;
	/** Groups of navigation items to display at the top of the sidebar. */
	items: NavItem[][];
};

export function AppLayoutSidebar({ activePath, items }: AppLayoutSidebarProps) {
	const { isMenuOpen, isMobile } = useAppLayoutContext();

	if (isMobile) {
		return (
			<AppLayoutSideBarMobile>
				<AppLayoutSidebarNav activePath={activePath} items={items} />
			</AppLayoutSideBarMobile>
		);
	}

	return (
		<Stack
			as="aside"
			aria-hidden={!isMenuOpen}
			gap={1}
			dark
			background="bodyAlt"
			css={{
				position: 'fixed',
				top: 0,
				left: 0,
				bottom: 0,
				width: tokens.maxWidth.mobileMenu,
				transform: isMenuOpen ? 'translateX(0)' : 'translateX(-100%)',
				borderLeft: `${BORDER_WIDTH_XXL}px solid ${boxPalette.accent}`,
				overflowY: 'auto',
				// This component should never be visible on smaller devices
				[tokens.mediaQuery.max.md]: {
					display: 'none',
				},
			}}
		>
			<AppLayoutSidebarNav activePath={activePath} items={items} />
		</Stack>
	);
}

function AppLayoutSideBarMobile({ children }: PropsWithChildren<{}>) {
	const { isMenuOpen, hideMenu } = useAppLayoutContext();
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
					paddingTop={1}
					gap={1}
					css={{
						position: 'fixed',
						zIndex: 100,
						top: 0,
						left: 0,
						bottom: 0,
						overflowY: 'auto',
						width: '100%',
						borderLeft: `${BORDER_WIDTH_XXL}px solid ${boxPalette.accent}`,
						[tokens.mediaQuery.min.md]: {
							width: tokens.maxWidth.mobileMenu,
						},
					}}
				>
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
