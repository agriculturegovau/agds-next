import { PropsWithChildren } from 'react';
import { mapSpacing } from '../core';
import { ListContext, useListDepth } from './context';

export type UnorderedListProps = PropsWithChildren<{}>;

export function UnorderedList({ children }: UnorderedListProps) {
	const currentDepth = useListDepth();
	const depth = currentDepth + 1;
	return (
		<ListContext.Provider value={depth}>
			<ul
				css={{
					marginTop: depth > 1 ? mapSpacing(0.5) : 0,
					marginBottom: 0,
				}}
			>
				{children}
			</ul>
		</ListContext.Provider>
	);
}
