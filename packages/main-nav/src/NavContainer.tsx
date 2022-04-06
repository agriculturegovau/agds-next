import React, { PropsWithChildren, ReactNode } from 'react';
import FocusLock from 'react-focus-lock';
import { Box, Flex, backgroundColorMap } from '@ag.ds-next/box';
import {
	boxPalette,
	useTernaryState,
	mapSpacing,
	tokens,
	globalPalette,
	useWindowSize,
} from '@ag.ds-next/core';

import { localPalette, localPaletteVars } from './utils';
import { CloseButton, ToggleButton } from './MenuButtons';
import { Global } from '@emotion/react';

const variantMap = {
	light: {
		palette: 'light',
		background: 'body',
		hover: 'shade',
		bottomBar: boxPalette.foregroundAction,
	},
	lightAlt: {
		palette: 'light',
		background: 'bodyAlt',
		hover: 'shadeAlt',
		bottomBar: boxPalette.foregroundAction,
	},
	dark: {
		palette: 'dark',
		background: 'body',
		hover: 'shade',
		bottomBar: boxPalette.foregroundAction,
	},
	darkAlt: {
		palette: 'dark',
		background: 'bodyAlt',
		hover: 'shadeAlt',
		bottomBar: boxPalette.foregroundAction,
	},
	agriculture: {
		palette: 'dark',
		background: 'shade',
		hover: 'body',
		bottomBar: globalPalette.accent,
	},
} as const;

export type NavContainerProps = PropsWithChildren<{
	id?: string;
	'aria-label': string;
	rightContent?: ReactNode;
	variant: keyof typeof variantMap;
}>;

export function NavContainer({
	id,
	rightContent,
	'aria-label': ariaLabel,
	children,
	variant,
}: NavContainerProps) {
	const { background, bottomBar, hover, palette } = variantMap[variant];

	const { windowWidth } = useWindowSize();
	const [menuOpen, open, close] = useTernaryState(false);
	const menuVisiblyOpen =
		menuOpen && (windowWidth || 0) <= tokens.breakpoint.lg - 1;

	return (
		<Box
			id={id}
			data-name="nav-container" // TODO: make this (or something like this) a pattern for providing end users a consistent handle for applying style overrides.
			palette={palette}
			background={background}
			color="text"
			css={{
				position: 'relative',
				[localPaletteVars.linkHoverBg]: backgroundColorMap[hover],
				[localPaletteVars.linkActiveBg]: backgroundColorMap[background],
				[localPaletteVars.bottomBar]: bottomBar, // <-- special case
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
					<ToggleButton onClick={open} />
					<FocusLock returnFocus disabled={!menuVisiblyOpen}>
						<div
							role={menuVisiblyOpen ? 'dialog' : 'none'}
							aria-label="Main navigation"
							aria-modal={menuVisiblyOpen ? 'true' : 'false'}
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

function Overlay({
	onClick,
}: {
	onClick: React.MouseEventHandler<HTMLDivElement>;
}) {
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
			data-name="nav-bottom-bar"
			paddingTop={0.5}
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
