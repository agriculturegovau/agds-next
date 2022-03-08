import { isValidElement, ReactNode } from 'react';
import { Text } from '@ag.ds-next/text';

export type FieldsetHintProps = {
	children: ReactNode;
};

export const FieldsetHint = ({ children }: FieldsetHintProps) => {
	return isValidElement(children) ? (
		children
	) : (
		<Text fontSize="sm" color="muted">
			{children}
		</Text>
	);
};
