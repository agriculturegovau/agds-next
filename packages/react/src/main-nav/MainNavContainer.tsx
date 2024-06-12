import { useRef } from 'react';
import { Box, type BorderColor } from '../box';
import { packs, tokens, type ResponsiveProp } from '../core';
import { Flex } from '../flex';
import { setLocalPaletteVars, MainNavBackground } from './localPalette';
import { MainNavOpenButton } from './MainNavMenuButtons';
import { MainNavBottomBar } from './MainNavBottomBar';
import { MainNavList, type MainNavListItemType } from './MainNavList';
import { MainNavListDropdown } from './MainNavListItemDropdown';
import { mobileBreakpoint } from './utils';

export type MainNavContainerProps = {
	activePath: string;
	background: MainNavBackground;
	borderColor: ResponsiveProp<BorderColor>;
	id?: string;
	items?: MainNavListItemType[];
	openMobileMenu: () => void;
	secondaryItems?: (MainNavListItemType | MainNavListDropdown)[];
};

export function MainNavContainer({
	activePath,
	background,
	borderColor,
	id,
	items,
	openMobileMenu,
	secondaryItems,
}: MainNavContainerProps) {
	const containerRef = useRef<HTMLDivElement>(null);
	return (
		<Box
			id={id}
			tabIndex={-1}
			ref={containerRef}
			background={background}
			color="text"
			css={[
				{ position: 'relative', '&:focus': { outline: 'none' } },
				setLocalPaletteVars(background),
				packs.print.hidden,
			]}
		>
			<Flex
				justifyContent="space-between"
				maxWidth={tokens.maxWidth.container}
				paddingX={{ xs: 0.75, [mobileBreakpoint]: 2 }}
				width="100%"
				minHeight={{ xs: '5rem', [mobileBreakpoint]: '3.5rem' }}
				css={{ margin: '0 auto' }}
			>
				{items?.length ? <MainNavOpenButton onClick={openMobileMenu} /> : null}
				<MainNavList type="primary" items={items} activePath={activePath} />
				{secondaryItems?.length ? (
					<MainNavList
						aria-label="Supplementary"
						type="secondary"
						items={secondaryItems}
						activePath={activePath}
					/>
				) : null}
			</Flex>
			<MainNavBottomBar borderColor={borderColor} />
		</Box>
	);
}
