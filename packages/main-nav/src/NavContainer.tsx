import React from 'react';
import FocusTrap from 'focus-trap-react';

import { Box, Flex } from '@ag.ds-next/box';
import {
	boxPalette,
	useTernaryState,
	mapSpacing,
	tokens,
	globalVars,
} from '@ag.ds-next/core';

import { localValues, localVars } from './utils';
import { CloseButton, ToggleButton } from './MenuButtons';

const variantMap = {
	light: {
		theme: 'light',
		background: 'body',
		hover: 'shade',
	},
	lightAlt: {
		theme: 'light',
		background: 'bodyAlt',
		hover: 'shadeAlt',
	},
	dark: {
		theme: 'dark',
		background: 'body',
		hover: 'shade',
	},
	darkAlt: {
		theme: 'dark',
		background: 'bodyAlt',
		hover: 'shadeAlt',
	},
	agriculture: {
		theme: 'dark',
		background: 'shade',
		hover: 'body',
	},
} as const;

export type NavContainerProps = React.PropsWithChildren<{
	variant: keyof typeof variantMap;
}>;

export function NavContainer({ variant, children }: NavContainerProps) {
	const { theme, background, hover } = variantMap[variant];
	const [menuOpen, open, close] = useTernaryState(false);

	return (
		<Box
			data-name="nav-container" // TODO: make this (or something like this) a pattern for providing end users a consistent handle for applying style overrides.
			palette={theme}
			background={background}
			color="text"
			css={{
				position: 'relative',
				[localVars.linkHoverBg]: boxPalette.background[hover],
				[localVars.linkActiveBg]: boxPalette.background[background],
				[localVars.bottomBar]: globalVars.accent,
			}}
		>
			<BottomBar />
			<Flex as="nav" justifyContent="center" css={{ position: 'relative' }}>
				<Box
					maxWidth={tokens.maxWidth.container}
					width="100%"
					paddingX={{ xs: 0.75, md: 2 }}
				>
					<ToggleButton onClick={open} />
					<FocusTrap
						active={menuOpen}
						focusTrapOptions={{
							clickOutsideDeactivates: true,
							onDeactivate: close,
						}}
					>
						<div
							css={{
								[tokens.mediaQuery.max.sm]: {
									zIndex: 200,
									position: 'fixed',
									display: menuOpen ? 'block' : 'none',
									background: boxPalette.background.body,
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
								flexDirection={{ xs: 'column', md: 'row' }}
							>
								{children}
							</Flex>
						</div>
					</FocusTrap>
				</Box>
			</Flex>
			<Overlay menuOpen={menuOpen} />
		</Box>
	);
}

function Overlay({ menuOpen }: { menuOpen: boolean }) {
	if (!menuOpen) return null;
	return (
		<Box
			display={{
				xs: 'block',
				md: 'none',
			}}
			css={{
				position: 'fixed',
				top: 0,
				left: 0,
				bottom: 0,
				right: 0,
				background: '#000',
				opacity: 0.8,
				zIndex: 100,
			}}
		/>
	);
}

function BottomBar() {
	return (
		<Box
			data-name="nav-bottom-bar"
			display={{ xs: 'none', md: 'block' }}
			paddingTop={0.5}
			css={{
				position: 'absolute',
				bottom: 0,
				left: 0,
				right: 0,
				backgroundColor: localValues.bottomBar,
			}}
		/>
	);
}
