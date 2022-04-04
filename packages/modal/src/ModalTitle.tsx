import { ReactNode } from 'react';
import { Text } from '@ag.ds-next/text';

export type ModalTitleProps = { children: ReactNode; id?: string };

export const ModalTitle = ({ children, id }: ModalTitleProps) => {
	return (
		<Text as="h2" fontSize="lg" fontWeight="bold" lineHeight="heading" id={id}>
			{children}
		</Text>
	);
};
