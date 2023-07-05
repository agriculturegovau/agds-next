import { KeyboardEvent, PropsWithChildren, ReactNode } from 'react';
import { BaseButton } from '../button';
import { Box } from '../box';
import { boxPalette, fontGrid, mapSpacing, packs, tokens } from '../core';
import { useTabsContext } from './TabsContext';
import { useTabListContext } from './TabListContext';
import { useTabIds, useTabsOrientation } from './utils';
import { localPalette } from './localPalette';

export type TabProps = PropsWithChildren<{
	endElement?: ReactNode;
}>;

export function Tab({ children, endElement }: TabProps) {
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
	const { tabId, panelId } = useTabIds(tabsId, tabIndex);
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
			as={BaseButton}
			onKeyDown={onKeyDown}
			onClick={onClick}
			role="tab"
			aria-selected={isSelected}
			id={tabId}
			tabIndex={isSelected ? 0 : -1}
			aria-controls={panelId}
			paddingX={1.5}
			paddingY={0.75}
			focus
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

				'&:focus': {
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

					':before': {
						content: "''",
						position: 'absolute',
						top: 0,
						left: 0,
						bottom: 0,
						width: isSelected ? tokens.borderWidth.xxl : tokens.borderWidth.xl,
						background: isSelected
							? boxPalette.foregroundAction
							: boxPalette.borderMuted,
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
						':before': {
							content: "''",
							position: 'absolute',
							top: 0,
							left: 0,
							right: 0,
							height: tokens.borderWidth.xl,
							background: boxPalette.foregroundAction,
						},
						':after': {
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
			}}
		>
			<span>{children}</span>
			{endElement}
		</Box>
	);
}
