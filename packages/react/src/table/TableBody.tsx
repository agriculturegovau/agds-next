import { ReactNode } from 'react';
import { Box } from '../box';

export type TableBodyProps = { children: ReactNode };

export const TableBody = ({ children }: TableBodyProps) => {
	return (
		<Box as="tbody" display="table-row-group">
			{children}
		</Box>
	);
};
