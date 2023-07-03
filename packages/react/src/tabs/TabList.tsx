import { PropsWithChildren } from 'react';
import flattenChildren from 'react-keyed-flatten-children';
import { boxPalette, tokens } from '../core';
import { Flex } from '../flex';
import { TabListContext } from './TabListContext';

export type TabListProps = PropsWithChildren<{}>;

export function TabList({ children }: TabListProps) {
	return (
		<Flex
			flexDirection={{ xs: 'column', sm: 'row' }}
			flexWrap="wrap"
			role="tablist"
			gap={{ xs: 0, sm: 0.5 }}
			css={{
				[tokens.mediaQuery.max.xs]: {
					borderWidth: tokens.borderWidth.sm,
					borderStyle: 'solid',
					borderColor: boxPalette.border,
				},
			}}
		>
			{flattenChildren(children).map((child, index) => (
				<TabListContext.Provider key={index} value={{ tabIndex: index }}>
					{child}
				</TabListContext.Provider>
			))}
		</Flex>
	);
}
