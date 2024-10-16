import { ReactNode } from 'react';
import { Box } from '../box';
import { boxPalette, tokens } from '../core';

export type TableHeadProps = { children: ReactNode };

export const TableHead = ({ children }: TableHeadProps) => {
	return (
		<Box
			as="thead"
			css={{
				'td, th': {
					'::after': {
						borderBottomColor: boxPalette.borderMuted,
						borderBottomStyle: 'solid',
						borderBottomWidth: tokens.borderWidth.xl,
						bottom: -tokens.borderWidth.xl,
						content: '""',
						pointerEvents: 'none',
						position: 'absolute',
						left: 0,
						right: 0,
					},
				},
			}}
			borderBottom
			borderBottomWidth="xl"
			borderColor="muted"
			display="table-header-group"
		>
			{children}
		</Box>
	);
};
