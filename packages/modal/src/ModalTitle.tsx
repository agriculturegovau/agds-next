import { ReactNode } from 'react';
import { Text } from '@ag.ds-next/text';

export const ModalTitle = ({ children }: { children: ReactNode }) => {
	return (
		<Text fontSize="lg" fontWeight="bold">
			{children}
		</Text>
	);
};
