import { ReactNode } from 'react';
import { Box } from '@ag.ds-next/react/box';

export const TableWrapper = ({ children }: { children: ReactNode }) => {
	return (
		<Box css={{ overflowX: 'auto' }} focusFor="keyboard" tabIndex={0}>
			{children}
		</Box>
	);
};
