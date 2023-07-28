import { PropsWithChildren } from 'react';
import { mapSpacing } from '../core';
import { ListContext, useListDepth } from './context';

export type OrderedListProps = PropsWithChildren<{}>;

export function OrderedList({ children }: OrderedListProps) {
	const depth = useListDepth();
	const value = depth + 1;
	return (
		<ListContext.Provider value={value}>
			<ListContext.Consumer>
				{(depth) => (
					<ol
						css={{
							marginTop: depth > 1 ? mapSpacing(0.5) : 0,
							marginBottom: 0,
						}}
					>
						{children}
					</ol>
				)}
			</ListContext.Consumer>
		</ListContext.Provider>
	);
}
