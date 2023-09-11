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
import { Box } from '../box';
import { Flex } from '../flex';
import {
	boxPalette,
	useTernaryState,
	mapSpacing,
	tokens,
	useWindowSize,
	useAriaModalPolyfill,
	packs,
	useBoxPalette,
	BoxPalette,
	backgroundContextPalette,
} from '../core';
import { MainNavBackground, localPaletteVars } from './utils';
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
				[localPaletteVars.linkHoverBg]: backgroundContextPalette.shade,
				[localPaletteVars.linkActiveBg]: backgroundContextPalette.current,
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

const MOBILE_MAX_WIDTH = '17.5rem'; // 280 px

function NavContainerDialog({
	children,
	close,
	menuVisiblyOpen,
	palette,
}: NavContainerDialogProps) {
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

	// Polyfill usage of `aria-modal`
	const { modalContainerRef } = useAriaModalPolyfill(menuVisiblyOpen);

	const element = (
		<Box
			ref={modalContainerRef}
			palette={palette}
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
					zIndex: tokens.zIndex.dialog,
					position: 'fixed',
					display: menuVisiblyOpen ? 'block' : 'none',
					background: boxPalette.backgroundBody,
					top: 0,
					left: 0,
					bottom: 0,
					width: '100%',
					maxWidth: MOBILE_MAX_WIDTH,
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
				backgroundColor: boxPalette.overlay,
				zIndex: tokens.zIndex.overlay,
			}}
			onClick={onClick}
		/>
	);
}

function BottomBar() {
	return (
		<Box
			borderBottom
			borderBottomWidth="xxl"
			borderColor="accent"
			css={{
				position: 'absolute',
				bottom: 0,
				left: 0,
				right: 0,
			}}
		/>
	);
}
