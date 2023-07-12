import { PropsWithChildren } from 'react';
import flattenChildren from 'react-keyed-flatten-children';
import { TabPanelsContext } from './TabPanelsContext';

export type TabPanelsProps = PropsWithChildren<{}>;

export function TabPanels({ children }: TabPanelsProps) {
	return (
		<div>
			{flattenChildren(children).map((child, index) => (
				<TabPanelsContext.Provider key={index} value={{ panelIndex: index }}>
					{child}
				</TabPanelsContext.Provider>
			))}
		</div>
	);
}
