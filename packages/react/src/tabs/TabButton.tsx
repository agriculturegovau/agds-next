import { KeyboardEvent, PropsWithChildren, ReactNode } from 'react';
import { BaseButton } from '../button';
import { Box } from '../box';
import {
	boxPalette,
	fontGrid,
	mapSpacing,
	packs,
	print,
	tokens,
} from '../core';
import { useTabsContext } from './TabsContext';
import { useTabListContext } from './TabListContext';
import { useTabIds, useTabsOrientation } from './utils';
import { localPalette } from './localPalette';

export type TabButtonProps = PropsWithChildren<{
	endElement?: ReactNode;
}>;

export function TabButton({ children, endElement }: TabButtonProps) {
	const {
		tabsId,
		activeIndex,
		setActiveIndex,
		goToFirstTab,
		goToLastTab,
		goToPreviousTab,
		goToNextTab,
	} = useTabsContext();
	const { tabIndex } = useTabListContext();
	const { tabButtonId, panelId } = useTabIds(tabsId, tabIndex);
	const orientation = useTabsOrientation();

	function onKeyDown(event: KeyboardEvent<HTMLButtonElement>) {
		switch (event.code) {
			case 'ArrowLeft':
				if (orientation === 'vertical') break;
				event.preventDefault();
				goToPreviousTab();
				break;
			case 'ArrowRight':
				if (orientation === 'vertical') break;
				event.preventDefault();
				goToNextTab();
				break;
			case 'ArrowUp':
				if (orientation === 'horizontal') break;
				event.preventDefault();
				goToPreviousTab();
				break;
			case 'ArrowDown':
				if (orientation === 'horizontal') break;
				event.preventDefault();
				goToNextTab();
				break;
			case 'Home':
				event.preventDefault();
				goToFirstTab();
				break;
			case 'End':
				event.preventDefault();
				goToLastTab();
				break;
		}
	}

	function onClick() {
		setActiveIndex(tabIndex);
	}

	const isSelected = activeIndex === tabIndex;

	return (
		<Box
			aria-controls={panelId}
			aria-selected={isSelected}
			as={BaseButton}
			css={{
				position: 'relative',
				display: 'flex',
				alignItems: 'center',
				justifyContent: 'space-between',
				gap: mapSpacing(0.5),
				...fontGrid('sm', 'default'),

				...(isSelected
					? {
							background: localPalette.panelBg,
							'& > span:first-of-type': {
								fontWeight: tokens.fontWeight.bold,
								color: boxPalette.foregroundText,
							},
					  }
					: {
							background: localPalette.buttonBg,
							'&:hover': {
								background: localPalette.buttonBgHover,
							},
							'& > span:first-of-type': {
								...packs.underline,
								color: localPalette.buttonFg,
							},
							'&:hover > span:first-of-type': {
								color: localPalette.buttonFgHover,
								textDecoration: 'none',
							},
					  }),

				// Make sure the focus ring is not cut off by siblings
				'&:focus-visible': {
					zIndex: tokens.zIndex.elevated,
				},

				// Mobile
				[tokens.mediaQuery.max.xs]: {
					borderWidth: tokens.borderWidth.sm,
					borderBottomWidth: 0,
					borderStyle: 'solid',
					borderColor: boxPalette.border,

					'&:first-of-type': {
						overflow: 'hidden',
						borderRadius: `${tokens.borderRadius}px ${tokens.borderRadius}px 0 0`,
					},

					'&:last-of-type': {
						borderBottomWidth: tokens.borderWidth.sm,
					},

					'::before': {
						content: "''",
						position: 'absolute',
						top: 0,
						left: 0,
						bottom: 0,
						width: isSelected ? tokens.borderWidth.xxl : tokens.borderWidth.xl,
						background: isSelected
							? boxPalette.selected
							: boxPalette.borderMuted,
						// See https://www.w3.org/TR/CSS21/ui.html#system-colors
						'@media (forced-colors: active)': {
							backgroundColor: isSelected ? 'MenuText' : 'GrayText',
						},
					},
				},

				// Desktop
				[tokens.mediaQuery.min.sm]: {
					borderWidth: tokens.borderWidth.sm,
					borderBottomWidth: 0,
					borderStyle: 'solid',
					borderColor: boxPalette.border,
					borderRadius: `${tokens.borderRadius}px ${tokens.borderRadius}px 0 0`,
					...(isSelected && {
						'::before': {
							content: "''",
							position: 'absolute',
							top: 0,
							left: 0,
							right: 0,
							height: tokens.borderWidth.xl,
							background: boxPalette.selected,
						},
						'::after': {
							content: "''",
							position: 'absolute',
							bottom: -1,
							left: 0,
							right: 0,
							height: 1,
							background: localPalette.panelBg,
						},
					}),
				},

				...print.exactColor,
			}}
			focusRingFor="keyboard"
			id={tabButtonId}
			onClick={onClick}
			onKeyDown={onKeyDown}
			paddingX={1.5}
			paddingY={0.75}
			role="tab"
			tabIndex={isSelected ? 0 : -1}
		>
			<span>{children}</span>
			{endElement}
		</Box>
	);
}
