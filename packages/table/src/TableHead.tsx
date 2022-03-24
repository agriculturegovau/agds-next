import { PropsWithChildren } from 'react';
import { Box } from '@ag.ds-next/box';

export type TableHeadProps = PropsWithChildren<{}>;

export const TableHead = ({ children }: TableHeadProps) => {
	return (
		<Box
			as="thead"
			borderBottom
			borderBottomWidth="xl"
			css={{
				display: 'table-header-group',
			}}
		>
			{children}
		</Box>
	);
};
