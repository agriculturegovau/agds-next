import { ReactNode } from 'react';
import { Text } from '@ag.ds-next/text';

export type ModalTitleProps = { children: ReactNode };

export const ModalTitle = ({ children }: ModalTitleProps) => {
	return (
		<Text fontSize="lg" fontWeight="bold">
			{children}
		</Text>
	);
};
