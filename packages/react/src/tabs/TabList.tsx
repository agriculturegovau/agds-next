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
			aria-orientation={orientation}
			flexDirection={{ xs: 'column', sm: 'row' }}
			flexWrap="wrap"
			gap={{ xs: 0, sm: 0.5 }}
			role="tablist"
		>
			{flattenChildren(children).map((child, index) => (
				<TabListContext.Provider key={index} value={{ tabIndex: index }}>
					{child}
				</TabListContext.Provider>
			))}
		</Flex>
	);
}
