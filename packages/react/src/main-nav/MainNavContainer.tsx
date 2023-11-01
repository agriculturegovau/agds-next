import { useRef } from 'react';
import { Box } from '../box';
import { Flex } from '../flex';
import { tokens, packs } from '../core';
import { setLocalPaletteVars, MainNavBackground } from './localPalette';
import { MainNavOpenButton } from './MainNavMenuButtons';
import { MainNavBottomBar } from './MainNavBottomBar';
import { MainNavList, MainNavListItemType } from './MainNavList';
import { MainNavListDropdown } from './MainNavListItemDropdown';
import { mobileBreakpoint } from './utils';

export type MainNavContainerProps = {
	activePath: string;
	background: MainNavBackground;
	id?: string;
	openMobileMenu: () => void;
	items?: MainNavListItemType[];
	secondaryItems?: (MainNavListItemType | MainNavListDropdown)[];
};

export function MainNavContainer({
	id,
	background,
	openMobileMenu,
	items,
	secondaryItems,
	activePath,
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
				<MainNavList
					aria-label="main"
					type="primary"
					items={items}
					activePath={activePath}
				/>
				{secondaryItems?.length ? (
					<MainNavList
						aria-label="secondary"
						type="secondary"
						items={secondaryItems}
						activePath={activePath}
					/>
				) : null}
			</Flex>
			<MainNavBottomBar />
		</Box>
	);
}
