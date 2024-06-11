import { ReactNode } from 'react';
import { Scrollbar } from '@ag.ds-next/react/scrollbar';

export const TableWrapper = ({ children }: { children: ReactNode }) => {
	return <Scrollbar>{children}</Scrollbar>;
};
