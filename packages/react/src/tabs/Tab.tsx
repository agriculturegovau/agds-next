import { KeyboardEvent, PropsWithChildren } from 'react';
import { BaseButton } from '../button';
import { Box } from '../box';
import { boxPalette } from '../core';
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
				goToPreviousTab();
				break;
			case 'ArrowRight':
				goToNextTab();
				break;
			case 'Home':
				goToFirstTab();
				break;
			case 'End':
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
			border
			rounded
			focus
			css={{
				borderBottomWidth: 0,
				borderBottomLeftRadius: 0,
				borderBottomRightRadius: 0,
				...(isSelected
					? {
							position: 'relative',
							textDecoration: 'none',
							color: boxPalette.foregroundText,
							borderTop: `4px solid ${boxPalette.foregroundAction}`,
							':after': {
								content: "''",
								position: 'absolute',
								bottom: -1,
								left: 0,
								right: 0,
								height: 1,
								background: boxPalette.backgroundBody,
							},
					  }
					: {}),
			}}
		>
			{children}
		</Box>
	);
}
