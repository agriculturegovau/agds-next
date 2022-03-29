import { ReactNode } from 'react';
import { Stack } from '@ag.ds-next/box';

export const ModalButtonGroup = ({ children }: { children: ReactNode }) => {
	return (
		<Stack gap={1} paddingTop={2} flexDirection={{ xs: 'column', md: 'row' }}>
			{children}
		</Stack>
	);
};
