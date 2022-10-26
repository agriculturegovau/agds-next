import { ReactNode } from 'react';
import { Box } from '../../box/src';

export type TableHeadProps = { children: ReactNode };

export const TableHead = ({ children }: TableHeadProps) => {
	return (
		<Box
			as="thead"
			borderBottom
			borderBottomWidth="xl"
			borderColor="muted"
			display="table-header-group"
		>
			{children}
		</Box>
	);
};
