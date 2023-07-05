import { PropsWithChildren, useEffect, useRef, useState } from 'react';
import { TabsContext } from './TabsContext';
import { useTabsId } from './utils';
import { Background, setLocalPaletteVars } from './localPalette';

export type TabsProps = PropsWithChildren<{
	/** If this component is placed on a page with a `bodyAlt` background, set this to `bodyAlt`. */
	background?: Background;
	/** If `false`, the horizontal padding and borders will be removed. */
	contained?: boolean;
	/** The index of the active tab. */
	activeIndex?: number;
	/** Function to be called when the active tab index is changed. */
	onChange?: (activeIndex: number) => void;
}>;

export function Tabs({
	children,
	background = 'body',
	contained = true,
	activeIndex: activeIndexProp,
	onChange,
}: TabsProps) {
	const ref = useRef<HTMLDivElement>(null);

	const [tabElements, setTabElements] =
		useState<NodeListOf<HTMLButtonElement>>();

	const tabsCount = tabElements?.length ? tabElements.length - 1 : 0;

	useEffect(() => {
		const tabElements = ref.current?.querySelectorAll('[role="tab"]') as
			| NodeListOf<HTMLButtonElement>
			| undefined;
		const panelElements = ref.current?.querySelectorAll('[role="tabpanel"]');

		if (tabElements?.length !== panelElements?.length) {
			throw Error(
				'The number of `Tab` components do not match the number of `TabPanel` components.'
			);
		}

		setTabElements(tabElements);
	}, [children]);

	const [activeIndexState, setActiveIndexState] = useState(0);
	const activeIndex =
		typeof activeIndexProp === 'number' ? activeIndexProp : activeIndexState;

	function setActiveIndex(index: number) {
		setActiveIndexState(index);
		onChange?.(index);
		tabElements?.[index]?.focus();
	}

	function goToPreviousTab() {
		setActiveIndex(activeIndex === 0 ? tabsCount : activeIndex - 1);
	}

	function goToNextTab() {
		setActiveIndex(activeIndex === tabsCount ? 0 : activeIndex + 1);
	}

	function goToFirstTab() {
		setActiveIndex(0);
	}

	function goToLastTab() {
		setActiveIndex(tabsCount);
	}

	const tabsId = useTabsId();

	return (
		<TabsContext.Provider
			value={{
				tabsId,
				contained,
				activeIndex,
				setActiveIndex,
				goToFirstTab,
				goToLastTab,
				goToPreviousTab,
				goToNextTab,
			}}
		>
			<div ref={ref} id={tabsId} css={setLocalPaletteVars(background)}>
				{children}
			</div>
		</TabsContext.Provider>
	);
}
