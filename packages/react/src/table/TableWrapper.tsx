import { ReactNode } from 'react';

export const TableWrapper = ({ children }: { children: ReactNode }) => {
	return (
		<div css={{ position: 'relative', overflowX: 'auto' }}>{children}</div>
	);
};
