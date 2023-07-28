import { PropsWithChildren } from 'react';
import { Stack } from '../stack';
import { mapSpacing } from '../core';

export type OrderedListProps = PropsWithChildren<{}>;

export function OrderedList({ children, ...props }: OrderedListProps) {
	return (
		<Stack
			as="ol"
			gap={0.5}
			css={{
				listStyle: 'decimal',
				margin: 0,
				paddingLeft: mapSpacing(2),
			}}
			{...props}
		>
			{children}
		</Stack>
	);
}
