import { useRef } from 'react';
import { Box } from '../box';
import { Flex } from '../flex';
import { tokens, packs } from '../core';
import { setLocalPaletteVars, MainNavBackground } from './localPalette';
import { MainNavOpenButton } from './MainNavMenuButtons';
import { MainNavBottomBar } from './MainNavBottomBar';
import { MainNavList, MainNavListItemType } from './MainNavList';

export type MainNavContainerProps = {
	activePath: string;
	background: MainNavBackground;
	id?: string;
	items?: MainNavListItemType[];
	openMobileMenu: () => void;
	secondaryItems?: MainNavListItemType[];
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
	const hasItems = Boolean(items?.length);
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
				paddingX={tokens.containerPadding}
				width="100%"
				minHeight="3.5rem"
				css={{ margin: '0 auto' }}
			>
				{hasItems ? <MainNavOpenButton onClick={openMobileMenu} /> : null}
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
