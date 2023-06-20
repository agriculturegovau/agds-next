import { PropsWithChildren } from 'react';
import { Text } from '../text';

export type ModalTitleProps = PropsWithChildren<{ id: string }>;

export const ModalTitle = ({ children, id }: ModalTitleProps) => {
	return (
		<Text
			as="h2"
			fontSize="lg"
			fontWeight="bold"
			lineHeight="heading"
			id={id}
			data-autofocus
			focus
			tabIndex={-1}
		>
			{children}
		</Text>
	);
};
