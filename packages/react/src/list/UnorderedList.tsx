import { PropsWithChildren } from 'react';
import { mapSpacing } from '../core';
import { ListContext, useListDepth } from './context';

export type UnorderedListProps = PropsWithChildren<{
	type?: 'ordered' | 'unordered';
}>;

export function UnorderedList({ children }: UnorderedListProps) {
	const depth = useListDepth();
	const value = depth + 1;
	return (
		<ListContext.Provider value={value}>
			<ListContext.Consumer>
				{(depth) => (
					<ul
						css={{
							marginTop: depth > 1 ? mapSpacing(0.5) : 0,
							marginBottom: 0,
						}}
					>
						{children}
					</ul>
				)}
			</ListContext.Consumer>
		</ListContext.Provider>
	);
}
