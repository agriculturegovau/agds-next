import { useRef } from 'react';
import { Box, type BorderColor } from '../box';
import { packs, tokens, type ResponsiveProp } from '../core';
import { Flex } from '../flex';
import { setLocalPaletteVars, MainNavBackground } from './localPalette';
import { MainNavOpenButton } from './MainNavMenuButtons';
import { MainNavList, type MainNavListItemType } from './MainNavList';
import { MainNavListDropdown } from './MainNavListItemDropdown';
import { mobileBreakpoint } from './utils';

export type MainNavContainerProps = {
	activePath: string;
	background: MainNavBackground;
	borderColor: ResponsiveProp<BorderColor>;
	focusMode?: boolean;
	id?: string;
	items?: MainNavListItemType[];
	openMobileMenu: () => void;
	secondaryItems?: (MainNavListItemType | MainNavListDropdown)[];
};

export function MainNavContainer({
	activePath,
	background,
	borderColor,
	focusMode = false,
	id,
	items,
	openMobileMenu,
	secondaryItems,
}: MainNavContainerProps) {
	const containerRef = useRef<HTMLDivElement>(null);
	return (
		<Box
			background={background}
			color="text"
			css={[
				{ position: 'relative', '&:focus': { outline: 'none' } },
				setLocalPaletteVars(background),
				packs.print.hidden,
			]}
			id={id}
			ref={containerRef}
			tabIndex={-1}
		>
			{!focusMode && (
				<Flex
					css={{ margin: '0 auto' }}
					flexWrap={{ xs: 'wrap', [mobileBreakpoint]: 'wrap-reverse' }}
					justifyContent="space-between"
					maxWidth={tokens.maxWidth.container}
					paddingX={{ xs: 0.75, [mobileBreakpoint]: 2 }}
					width="100%"
				>
					{items?.length ? (
						<MainNavOpenButton onClick={openMobileMenu} />
					) : null}
					<MainNavList activePath={activePath} items={items} type="primary" />
					{secondaryItems?.length ? (
						<MainNavList
							activePath={activePath}
							aria-label="Supplementary"
							items={secondaryItems}
							type="secondary"
						/>
					) : null}
				</Flex>
			)}
			<Box borderBottom borderBottomWidth="xxl" borderColor={borderColor} />
		</Box>
	);
}
