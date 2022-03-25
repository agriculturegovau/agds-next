import { ReactNode } from 'react';

export const TableWrapper = ({ children }: { children: ReactNode }) => {
	return (
		<div
			css={{
				overflowX: 'auto',
			}}
		>
			{children}
		</div>
	);
};
