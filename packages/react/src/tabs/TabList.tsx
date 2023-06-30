import { PropsWithChildren } from 'react';
import flattenChildren from 'react-keyed-flatten-children';
import { Flex } from '../flex';
import { TabListContext } from './TabListContext';

export type TabListProps = PropsWithChildren<{}>;

export function TabList({ children }: TabListProps) {
	return (
		<Flex flexWrap="wrap" role="tablist" gap={0.5}>
			{flattenChildren(children).map((child, index) => (
				<TabListContext.Provider key={index} value={{ tabIndex: index }}>
					{child}
				</TabListContext.Provider>
			))}
		</Flex>
	);
}
