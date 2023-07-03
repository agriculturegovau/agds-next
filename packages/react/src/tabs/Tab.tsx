import { KeyboardEvent, PropsWithChildren } from 'react';
import { BaseButton } from '../button';
import { Box } from '../box';
import { boxPalette, tokens } from '../core';
import { useTabsContext } from './TabsContext';
import { useTabListContext } from './TabListContext';
import { useTabIds } from './utils';

export type TabProps = PropsWithChildren<{}>;

export function Tab({ children }: TabProps) {
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

	function onKeyDown(event: KeyboardEvent<HTMLButtonElement>) {
		switch (event.code) {
			case 'ArrowLeft':
				event.preventDefault();
				goToPreviousTab();
				break;
			case 'ArrowRight':
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
			background={isSelected ? 'body' : 'shade'}
			paddingX={1}
			paddingY={0.5}
			link
			focus
			css={{
				// Mobile
				[tokens.mediaQuery.max.xs]: {
					position: 'relative',
					textDecoration: 'none',
					color: isSelected ? boxPalette.foregroundText : undefined,
					'&:not(:last-of-type)': {
						borderBottomWidth: tokens.borderWidth.sm,
						borderStyle: 'solid',
						borderColor: boxPalette.border,
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
						position: 'relative',
						textDecoration: 'none',
						color: boxPalette.foregroundText,
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
							background: boxPalette.backgroundBody,
						},
					}),
				},
			}}
		>
			{children}
		</Box>
	);
}
