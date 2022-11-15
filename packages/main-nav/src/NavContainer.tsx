import {
	PropsWithChildren,
	ReactNode,
	MouseEventHandler,
	useEffect,
	useRef,
} from 'react';
import { createPortal } from 'react-dom';
import FocusLock from 'react-focus-lock';
import { Global } from '@emotion/react';
import { Box, Flex, backgroundColorMap } from '@ag.ds-next/box';
import {
	boxPalette,
	useTernaryState,
	mapSpacing,
	tokens,
	useWindowSize,
	packs,
	useBoxPalette,
	BoxPalette,
} from '@ag.ds-next/core';
import {
	hoverMap,
	MainNavBackground,
	localPalette,
	localPaletteVars,
	bottomBarPadding,
} from './utils';
import { CloseButton, OpenButton } from './MenuButtons';

export type NavContainerProps = PropsWithChildren<{
	background?: MainNavBackground;
	hasItems?: boolean;
	id?: string;
	rightContent?: ReactNode;
}>;

export function NavContainer({
	id,
	rightContent,
	children,
	background = 'body',
	hasItems,
}: NavContainerProps) {
	const containerRef = useRef<HTMLDivElement>(null);
	const hover = hoverMap[background];

	const { windowWidth } = useWindowSize();
	const [menuOpen, open, close] = useTernaryState(false);

	const menuVisiblyOpen =
		menuOpen && (windowWidth || 0) <= tokens.breakpoint.lg - 1;

	// As the main nav element sometimes renders in a portal for a11y reasons, we need to know about the current box palette
	const palette = useBoxPalette(containerRef);

	return (
		<Box
			id={id}
			tabIndex={-1}
			ref={containerRef}
			background={background}
			color="text"
			css={{
				position: 'relative',
				'&:focus': { outline: 'none' },
				[localPaletteVars.linkHoverBg]: backgroundColorMap[hover],
				[localPaletteVars.linkActiveBg]: backgroundColorMap[background],
				[localPaletteVars.bottomBar]: boxPalette.accent,
				...packs.print.hidden,
			}}
		>
			{menuVisiblyOpen ? <LockScroll /> : null}
			<BottomBar />
			<Flex justifyContent="center" css={{ position: 'relative' }}>
				<Flex
					justifyContent="space-between"
					alignItems="center"
					maxWidth={tokens.maxWidth.container}
					width="100%"
					paddingX={{ xs: 0.75, lg: 2 }}
				>
					{hasItems ? <OpenButton onClick={open} /> : null}
					<NavContainerDialog
						palette={palette}
						menuVisiblyOpen={menuVisiblyOpen}
						close={close}
					>
						{children}
					</NavContainerDialog>
					{rightContent}
				</Flex>
			</Flex>
			{menuVisiblyOpen ? <Overlay onClick={close} /> : null}
		</Box>
	);
}

type NavContainerDialogProps = PropsWithChildren<{
	close: () => void;
	menuVisiblyOpen: boolean;
	palette?: BoxPalette;
}>;

function NavContainerDialog({
	children,
	close,
	menuVisiblyOpen,
	palette,
}: NavContainerDialogProps) {
	const dialogRef = useRef<HTMLDivElement>(null);

	// Close the component when the user presses the escape key
	useEffect(() => {
		const handleKeyDown = (e: KeyboardEvent) => {
			if (e.code === 'Escape') {
				e.preventDefault();
				e.stopPropagation();
				close();
			}
		};
		window.addEventListener('keydown', handleKeyDown);
		return () => window.removeEventListener('keydown', handleKeyDown);
	}, [close]);

	// The following `useEffect` will add `aria-hidden="true"` to every direct child of the `body` element when the modal is opened.
	// This is because `aria-modal` is not yet supported by all browsers (https://a11ysupport.io/tech/aria/aria-modal_attribute).
	// This fixes a bug in certain devices where focus is not trapped correctly such as VoiceOver on iOS.
	// This has been inspired by Reach UI (https://github.com/reach/reach-ui/blob/main/packages/dialog/src/index.tsx)
	useEffect(() => {
		if (!menuVisiblyOpen || !dialogRef.current) return;

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
	}, [menuVisiblyOpen]);

	const element = (
		<Box
			palette={palette}
			ref={dialogRef}
			{...(menuVisiblyOpen
				? {
						role: 'dialog',
						'aria-label': 'Main navigation',
						'aria-modal': 'true',
				  }
				: null)}
			id="main-nav-dialog"
			css={{
				[tokens.mediaQuery.max.md]: {
					zIndex: 200,
					position: 'fixed',
					display: menuVisiblyOpen ? 'block' : 'none',
					background: boxPalette.backgroundBody,
					top: 0,
					left: 0,
					bottom: 0,
					width: '100%',
					maxWidth: tokens.maxWidth.mobileMenu,
					padding: mapSpacing(1),
					boxSizing: 'border-box',
					overflowY: 'auto',
				},
			}}
		>
			<FocusLock returnFocus disabled={!menuVisiblyOpen}>
				<CloseButton onClick={close} />
				{children}
			</FocusLock>
		</Box>
	);

	if (menuVisiblyOpen) {
		return createPortal(element, document.body);
	}

	return element;
}

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

function BottomBar() {
	return (
		<Box
			paddingTop={bottomBarPadding}
			css={{
				position: 'absolute',
				bottom: 0,
				left: 0,
				right: 0,
				backgroundColor: localPalette.bottomBar,
			}}
		/>
	);
}
