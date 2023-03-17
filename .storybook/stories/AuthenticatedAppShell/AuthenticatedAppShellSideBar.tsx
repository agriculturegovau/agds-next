import { Box, Flex, Stack } from '@ag.ds-next/react/box';
import { boxPalette, tokens, useWindowSize } from '@ag.ds-next/react/core';
import {
	Fragment,
	MouseEventHandler,
	PropsWithChildren,
	ReactNode,
	useEffect,
	useRef,
} from 'react';
import { Global } from '@emotion/react';
import { createPortal } from 'react-dom';
import FocusLock from 'react-focus-lock';
import { Button } from '@ag.ds-next/react/button';
import { Logo } from '@ag.ds-next/react/ag-branding';

export type AuthenticatedAppShellSideBarProps = PropsWithChildren<{
	isModalOpen: boolean;
	/** If focus mode is true, the menu will be visible on desktop depending on the value of isModalOpen */
	isFocusMode: boolean;
	closeModal: () => void;
}>;

export const AuthenticatedAppShellSideBar = ({
	isModalOpen,
	isFocusMode,
	closeModal,
	children,
}: AuthenticatedAppShellSideBarProps) => {
	const { windowWidth } = useWindowSize();
	// Whether the menu should be shown as a modal
	const isModal = (windowWidth || 0) <= tokens.breakpoint.lg - 1;

	if (isModal) {
		return (
			<AuthenticatedAppShellSideBarMobile
				closeModal={closeModal}
				isModalOpen={isModalOpen}
			>
				{children}
			</AuthenticatedAppShellSideBarMobile>
		);
	}

	if (!isFocusMode || (isFocusMode && isModalOpen)) {
		return (
			<Box
				dark
				background="bodyAlt"
				css={{
					position: 'fixed',
					zIndex: 200,
					display: 'block',
					top: 0,
					left: 0,
					bottom: 0,
					boxSizing: 'border-box',
					overflowY: 'auto',
					width: '100%',
					// Desktop
					[tokens.mediaQuery.min.md]: {
						position: 'sticky',
						top: 0,
						flexShrink: 0,
						height: '100vh',
						width: tokens.maxWidth.mobileMenu,
						borderLeft: `8px solid ${boxPalette.accent}`,
					},
				}}
			>
				<Stack gap={1} padding={1}>
					<Box maxWidth={tokens.maxWidth.mobileMenu} color="text">
						<Logo />
					</Box>

					{isModal || isFocusMode ? (
						<Flex justifyContent="flex-end">
							<Button onClick={closeModal} variant="text">
								Hide menu
							</Button>
						</Flex>
					) : null}
				</Stack>
				{children}
			</Box>
		);
	}

	return null;
};

const AuthenticatedAppShellSideBarMobile = ({
	children,
	isModalOpen,
	closeModal,
}: {
	children: ReactNode;
	isModalOpen: boolean;
	closeModal: () => void;
}) => {
	const dialogRef = useRef<HTMLDivElement>(null);

	// Close the component when the user presses the escape key
	useEffect(() => {
		const handleKeyDown = (e: KeyboardEvent) => {
			if (e.code === 'Escape') {
				e.preventDefault();
				e.stopPropagation();
				closeModal();
			}
		};
		window.addEventListener('keydown', handleKeyDown);
		return () => window.removeEventListener('keydown', handleKeyDown);
	}, [closeModal]);

	// The following `useEffect` will add `aria-hidden="true"` to every direct child of the `body` element when the modal is opened.
	// This is because `aria-modal` is not yet supported by all browsers (https://a11ysupport.io/tech/aria/aria-modal_attribute).
	// This fixes a bug in certain devices where focus is not trapped correctly such as VoiceOver on iOS.
	// This has been inspired by Reach UI (https://github.com/reach/reach-ui/blob/main/packages/dialog/src/index.tsx)
	useEffect(() => {
		if (!isModalOpen || !dialogRef.current) return;

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
	}, [isModalOpen]);

	if (!isModalOpen) {
		return null;
	}

	return createPortal(
		<Fragment>
			<LockScroll />
			<Overlay onClick={close} />
			<Box
				dark
				background="bodyAlt"
				css={{
					position: 'fixed',
					zIndex: 200,
					display: 'block',
					top: 0,
					left: 0,
					bottom: 0,
					overflowY: 'auto',
					width: '100%',
					[tokens.mediaQuery.min.md]: {
						width: tokens.maxWidth.mobileMenu,
					},
				}}
			>
				<FocusLock returnFocus disabled={!isModalOpen}>
					<Stack gap={1} padding={1}>
						<Box maxWidth={tokens.maxWidth.mobileMenu} color="text">
							<Logo />
						</Box>

						<Flex justifyContent="flex-end">
							<Button onClick={closeModal} variant="text">
								Hide menu
							</Button>
						</Flex>
					</Stack>
					{children}
				</FocusLock>
			</Box>
		</Fragment>,
		document.body
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
