import { PropsWithChildren } from 'react';
import flattenChildren from 'react-keyed-flatten-children';
import { Flex } from '../flex';
import { TabListContext } from './TabListContext';
import { useTabsOrientation } from './utils';

export type TabListProps = PropsWithChildren<{}>;

export function TabList({ children }: TabListProps) {
	const orientation = useTabsOrientation();
	return (
		<Flex
			flexDirection={{ xs: 'column', sm: 'row' }}
			flexWrap="wrap"
			role="tablist"
			aria-orientation={orientation}
			gap={{ xs: 0, sm: 0.5 }}
		>
			{flattenChildren(children).map((child, index) => (
				<TabListContext.Provider key={index} value={{ tabIndex: index }}>
					{child}
				</TabListContext.Provider>
			))}
		</Flex>
	);
}
