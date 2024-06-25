import { ReactNode } from 'react';
import { TableScroller } from './TableScroller';

export const TableWrapper = ({ children }: { children: ReactNode }) => {
	return <TableScroller>{children}</TableScroller>;
};
