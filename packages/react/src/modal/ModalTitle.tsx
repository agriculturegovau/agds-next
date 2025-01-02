import { PropsWithChildren } from 'react';
import { Text } from '../text';

export type ModalTitleProps = PropsWithChildren<{ id: string }>;

export const ModalTitle = ({ children, id }: ModalTitleProps) => {
	return (
		<Text
			as="h2"
			data-autofocus
			focusRingFor="keyboard"
			fontSize="lg"
			fontWeight="bold"
			id={id}
			lineHeight="heading"
			tabIndex={-1}
		>
			{children}
		</Text>
	);
};
