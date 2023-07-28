import { PropsWithChildren } from 'react';
import { Text } from '../text';

type ListItemProps = PropsWithChildren<{}>;

export function ListItem({ children, ...props }: ListItemProps) {
	return (
		<Text
			as="li"
			css={{
				listStyle: 'unset',
				'&:not(:first-of-type)': {
					marginTop: '0.5rem',
				},
			}}
			{...props}
		>
			{children}
		</Text>
	);
}
