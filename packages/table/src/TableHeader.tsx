import { PropsWithChildren } from 'react';
import { Box, BoxProps } from '@ag.ds-next/box';

export type TableHeaderProps = PropsWithChildren<{
	textAlign?: 'left' | 'center' | 'right';
}> &
	Pick<BoxProps, 'display'>;

export const TableHeader = ({
	children,
	textAlign = 'left',
	...props
}: TableHeaderProps) => {
	return (
		<Box
			as="th"
			color="text"
			padding={0.75}
			fontWeight="bold"
			borderBottom
			focus
			css={{
				textAlign,
			}}
			{...props}
		>
			{children}
		</Box>
	);
};
