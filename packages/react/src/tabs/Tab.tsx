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
			padding={1}
			color="action"
			focus
			css={{
				...(isSelected
					? {
							borderTop: `2px solid ${boxPalette.foregroundAction}`,
					  }
					: {
							background: boxPalette.backgroundShade,
					  }),
			}}
		>
			{children}
		</Box>
	);
}
