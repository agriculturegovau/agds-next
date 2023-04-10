import { PropsWithChildren } from 'react';
import { Box, Flex } from '../box';
import { boxPalette, mapSpacing, tokens } from '../core';
import { MenuIcon } from '../icon';
import { BaseButton } from '../button';
import { HEADER_HEIGHT, HEADER_BUTTON_HEIGHT, BORDER_WIDTH_XXL } from './utils';
import { useAppLayoutContext } from './AppLayoutContext';

export type AppLayoutHeaderProps = PropsWithChildren<{
	logo: JSX.Element;
}>;

export function AppLayoutHeader({ children, logo }: AppLayoutHeaderProps) {
	const { isMenuOpen } = useAppLayoutContext();
	return (
		<Flex
			as="header"
			palette={{ xs: 'dark', lg: 'light' }}
			gap={1}
			height={HEADER_HEIGHT}
			paddingLeft={{ xs: 0.5, lg: isMenuOpen ? tokens.containerPadding.md : 0 }}
			paddingRight={{ xs: 0.5, lg: tokens.containerPadding.md }}
			background="body"
			alignItems="center"
			borderBottom
			borderColor="muted"
			css={{
				zIndex: 1,
				boxShadow: '0 2px 4px rgba(0, 0, 0, 0.1)',
				borderBottom: `${BORDER_WIDTH_XXL}px solid ${boxPalette.accent}`,
				[tokens.mediaQuery.min.lg]: {
					borderBottom: 'none',
				},
			}}
		>
			<AppLayoutHeaderMenuTrigger />
			<Box
				display={{ xs: 'none', md: 'block', lg: 'none' }}
				color="text"
				css={{
					marginLeft: 'auto',
					borderRight: `${tokens.borderWidth.sm}px solid ${boxPalette.foregroundText}`,
					paddingRight: mapSpacing(1),
					svg: { display: 'block', width: 150 },
				}}
			>
				{logo}
			</Box>
			{children}
		</Flex>
	);
}

function AppLayoutHeaderMenuTrigger() {
	const { isMenuOpen, showMenu, showMenuButtonRef } = useAppLayoutContext();
	return (
		<Flex
			// eslint-disable-next-line @typescript-eslint/ban-ts-comment
			// @ts-ignore
			ref={showMenuButtonRef}
			as={BaseButton}
			onClick={showMenu}
			borderRight
			borderColor="muted"
			borderRightWidth={{ xs: undefined, lg: 'sm' }}
			flexDirection="column"
			alignItems="center"
			justifyContent="center"
			height={HEADER_BUTTON_HEIGHT}
			width={HEADER_BUTTON_HEIGHT}
			color="action"
			focus
			css={{
				flexShrink: 0,
				'&:hover': {
					background: boxPalette.backgroundShade,
				},
				...(isMenuOpen && {
					[tokens.mediaQuery.min.lg]: {
						display: 'none',
					},
				}),
			}}
		>
			<MenuIcon aria-hidden />
			Menu
		</Flex>
	);
}
