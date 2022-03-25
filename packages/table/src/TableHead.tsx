import { ReactNode } from 'react';
import { Box } from '@ag.ds-next/box';
import { boxPalette } from '@ag.ds-next/core';

export type TableHeadProps = { children: ReactNode };

export const TableHead = ({ children }: TableHeadProps) => {
	return (
		<Box
			as="thead"
			borderBottom
			borderBottomWidth="xl"
			css={{
				display: 'table-header-group',
				borderBottomColor: boxPalette.borderMuted,
			}}
		>
			{children}
		</Box>
	);
};
