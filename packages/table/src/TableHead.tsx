import { ReactNode } from 'react';
import { Box } from '@ag.ds-next/box';

export type TableHeadProps = { children: ReactNode };

export const TableHead = ({ children }: TableHeadProps) => {
	return (
		<Box
			as="thead"
			borderBottom
			borderBottomWidth="xl"
			borderColor="muted"
			css={{
				display: 'table-header-group',
			}}
		>
			{children}
		</Box>
	);
};
