import { PropsWithChildren } from 'react';
import { Box } from '../box';

type ListItemProps = PropsWithChildren<{}>;

export function ListItem({ children, ...props }: ListItemProps) {
	return (
		<Box
			as="li"
			css={{
				listStyle: 'unset',
			}}
			{...props}
		>
			{children}
		</Box>
	);
}
