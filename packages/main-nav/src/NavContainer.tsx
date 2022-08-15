import { PropsWithChildren, ReactNode, MouseEventHandler } from 'react';
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
	'aria-label': string;
	background?: MainNavBackground;
	hasItems?: boolean;
	id?: string;
	rightContent?: ReactNode;
}>;

export function NavContainer({
	id,
	rightContent,
	'aria-label': ariaLabel,
	children,
	background = 'body',
	hasItems,
}: NavContainerProps) {
	const hover = hoverMap[background];

	const { windowWidth } = useWindowSize();
	const [menuOpen, open, close] = useTernaryState(false);
	const menuVisiblyOpen =
		menuOpen && (windowWidth || 0) <= tokens.breakpoint.lg - 1;

	return (
		<Box
			id={id}
			background={background}
			color="text"
			css={{
				position: 'relative',
				[localPaletteVars.linkHoverBg]: backgroundColorMap[hover],
				[localPaletteVars.linkActiveBg]: backgroundColorMap[background],
				[localPaletteVars.bottomBar]: boxPalette.accent,
				...packs.print.hidden,
			}}
		>
			{menuVisiblyOpen ? <LockScroll /> : null}
			<BottomBar />
			<Flex
				as="nav"
				justifyContent="center"
				css={{ position: 'relative' }}
				aria-label={ariaLabel}
			>
				<Flex
					justifyContent="space-between"
					alignItems="center"
					maxWidth={tokens.maxWidth.container}
					width="100%"
					paddingX={{ xs: 0.75, lg: 2 }}
				>
					{hasItems ? <OpenButton onClick={open} /> : null}
					<FocusLock returnFocus disabled={!menuVisiblyOpen}>
						<div
							role={menuVisiblyOpen ? 'dialog' : 'none'}
							aria-label="Main navigation"
							aria-modal={menuVisiblyOpen ? 'true' : 'false'}
							id="main-nav-dialog"
							css={{
								[tokens.mediaQuery.max.md]: {
									zIndex: 200,
									position: 'fixed',
									display: menuOpen ? 'block' : 'none',
									background: boxPalette.backgroundBody,
									top: 0,
									left: 0,
									bottom: 0,
									width: '100%',
									maxWidth: tokens.maxWidth.mobileMenu,
									padding: mapSpacing(1),
									boxSizing: 'border-box',
								},
							}}
						>
							<CloseButton onClick={close} />
							<Flex
								justifyContent="space-between"
								width="100%"
								flexDirection={{ xs: 'column', lg: 'row' }}
							>
								{children}
							</Flex>
						</div>
					</FocusLock>
					{rightContent}
				</Flex>
			</Flex>
			{menuVisiblyOpen ? <Overlay onClick={close} /> : null}
		</Box>
	);
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
