import { PropsWithChildren, useEffect, useRef, useState } from 'react';
import { TabsContext } from './TabsContext';
import { useTabsId } from './utils';

export type TabsProps = PropsWithChildren<{
	activeIndex?: number;
	onChange?: (index: number) => void;
}>;

export function Tabs({
	children,
	activeIndex: activeIndexProp,
	onChange,
}: TabsProps) {
	const ref = useRef<HTMLDivElement>(null);

	const [tabElements, setTabElements] =
		useState<NodeListOf<HTMLButtonElement>>();

	const tabsCount = tabElements?.length ? tabElements.length - 1 : 0;

	useEffect(() => {
		const tabElements = ref.current?.querySelectorAll('[role="tab"]');
		const panelElements = ref.current?.querySelectorAll('[role="tabpanel"]');

		if (tabElements && panelElements) {
			if (tabElements.length !== panelElements.length) {
				throw Error('something went wrong.');
			}
		}

		// eslint-disable-next-line @typescript-eslint/ban-ts-comment
		// @ts-ignore
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
				activeIndex,
				setActiveIndex,
				goToFirstTab,
				goToLastTab,
				goToPreviousTab,
				goToNextTab,
			}}
		>
			<div ref={ref} id={tabsId}>
				{children}
			</div>
		</TabsContext.Provider>
	);
}
