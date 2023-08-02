import { ReactNode } from 'react';
import { Box } from '../box';

export type TableHeadProps = { children: ReactNode };

export const TableHead = ({ children, ...props }: TableHeadProps) => {
	return (
		<Box
			as="thead"
			borderBottom
			borderBottomWidth="xl"
			borderColor="muted"
			display="table-header-group"
			{...props}
		>
			{children}
		</Box>
	);
};
