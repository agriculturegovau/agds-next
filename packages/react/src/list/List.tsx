import { PropsWithChildren } from 'react';
import { Stack } from '../stack';
import { mapSpacing } from '../core';

export type UnorderedListProps = PropsWithChildren<{
	type?: 'ordered' | 'unordered';
}>;

export function List({
	children,
	type = 'unordered',
	...props
}: UnorderedListProps) {
	const Tag = type === 'ordered' ? 'ol' : 'ul';
	const listStyle = type === 'ordered' ? 'decimal' : 'disc';

	return (
		<Stack
			as={Tag}
			gap={0.5}
			css={{
				listStyle: listStyle,
				margin: 0,
				paddingLeft: mapSpacing(2),
			}}
			{...props}
		>
			{children}
		</Stack>
	);
}
