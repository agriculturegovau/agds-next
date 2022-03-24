import { ReactNode } from 'react';
import { Box } from '@ag.ds-next/box';

export type TableBodyProps = { children: ReactNode };

export const TableBody = ({ children }: TableBodyProps) => {
	return (
		<Box as="tbody" css={{ display: 'table-row-group' }}>
			{children}
		</Box>
	);
};
