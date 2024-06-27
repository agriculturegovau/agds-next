import { MouseEventHandler, useEffect } from 'react';
import { createPortal } from 'react-dom';
import FocusLock from 'react-focus-lock';
import { Global } from '@emotion/react';
import { Box } from '../box';
import { boxPalette, tokens, useAriaModalPolyfill, canUseDOM } from '../core';
import { Flex } from '../flex';
import { MainNavCloseButton } from './MainNavMenuButtons';
import { MainNavListItemType } from './MainNavList';
import { MainNavDialogNavList } from './MainNavDialogNavList';
import { mobileBreakpoint, mobileMaxWidth } from './utils';

export type MainNavDialogProps = {
	activePath: string;
	closeMobileMenu: () => void;
	isMobileMenuOpen: boolean;
	items?: MainNavListItemType[];
};

export function MainNavDialog({
	isMobileMenuOpen,
	closeMobileMenu,
	items,
	activePath,
}: MainNavDialogProps) {
	// Polyfill usage of `aria-modal`
	const { modalContainerRef } = useAriaModalPolyfill(isMobileMenuOpen);

	// Close the component when the user presses the escape key
	useEffect(() => {
		const handleKeyDown = (e: KeyboardEvent) => {
			if (e.code === 'Escape') {
				e.preventDefault();
				e.stopPropagation();
				closeMobileMenu();
			}
		};
		window.addEventListener('keydown', handleKeyDown);
		return () => window.removeEventListener('keydown', handleKeyDown);
	}, [closeMobileMenu]);

	// Since react portals can not be rendered on the server and this component is always closed by default
	// This component doesn't need to be server side rendered
	if (!canUseDOM()) return null;

	if (!isMobileMenuOpen) return null;

	return createPortal(
		<Box ref={modalContainerRef} display={{ [mobileBreakpoint]: 'none' }}>
			<LockScroll />
			<Overlay onClick={closeMobileMenu} />
			<FocusLock returnFocus>
				<Flex
					aria-label="Main menu"
					role="dialog"
					aria-modal="true"
					background="body"
					flexDirection="column"
					padding={1}
					gap={0.5}
					width={mobileMaxWidth}
					css={{
						position: 'fixed',
						zIndex: tokens.zIndex.dialog,
						top: 0,
						left: 0,
						bottom: 0,
						overflowY: 'auto',
					}}
				>
					<MainNavCloseButton onClick={closeMobileMenu} />
					<MainNavDialogNavList
						aria-label="Main"
						items={items}
						activePath={activePath}
					/>
				</Flex>
			</FocusLock>
		</Box>,
		document.body
	);
}

function LockScroll() {
	return (
		<Global
			styles={{
				body: { overflow: 'hidden' },
			}}
		/>
	);
}

function Overlay({ onClick }: { onClick: MouseEventHandler<HTMLDivElement> }) {
	return (
		<Box
			css={{
				position: 'fixed',
				inset: 0,
				backgroundColor: boxPalette.overlay,
				zIndex: tokens.zIndex.overlay,
			}}
			onClick={onClick}
		/>
	);
}
