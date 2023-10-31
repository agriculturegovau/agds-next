import { MouseEventHandler, useEffect } from 'react';
import { createPortal } from 'react-dom';
import FocusLock from 'react-focus-lock';
import { Global } from '@emotion/react';
import { Box } from '../box';
import { boxPalette, tokens, useAriaModalPolyfill, canUseDOM } from '../core';
import { Flex } from '../flex';
import { MainNavCloseButton } from './MainNavMenuButtons';
import { MAIN_NAV_MOBILE_MAX_WIDTH } from './utils';
import { MainNavListItemType } from './MainNavList';
import { MainNavDialogNavList } from './MainNavDialogNavList';

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
		<Box ref={modalContainerRef} display={{ lg: 'none' }}>
			<LockScroll />
			<Overlay onClick={closeMobileMenu} />
			<FocusLock returnFocus>
				<Flex
					role="dialog"
					aria-modal="true"
					background="shade"
					flexDirection="column"
					padding={1}
					gap={1}
					width={MAIN_NAV_MOBILE_MAX_WIDTH}
					css={{
						position: 'fixed',
						zIndex: tokens.zIndex.dialog,
						top: 0,
						left: 0,
						bottom: 0,
						overflowY: 'auto',
					}}
				>
					<MainNavCloseButton onClick={close} />
					<MainNavDialogNavList
						aria-label="main"
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
