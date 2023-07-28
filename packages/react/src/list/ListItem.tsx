import { PropsWithChildren } from 'react';
import { mapSpacing } from '../core';
import { Text } from '../text';

type ListItemProps = PropsWithChildren<{}>;

export function ListItem({ children, ...props }: ListItemProps) {
	return (
		<Text
			as="li"
			css={{
				listStyle: 'unset',
				'&:not(:first-of-type)': {
					marginTop: mapSpacing(0.5),
				},
			}}
			{...props}
		>
			{children}
		</Text>
	);
}
