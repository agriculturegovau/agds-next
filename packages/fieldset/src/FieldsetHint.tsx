import { isValidElement, ReactNode } from 'react';
import { Text } from '@ag.ds-next/text';
import { mapSpacing } from '@ag.ds-next/core';

export type FieldsetHintProps = {
	children: ReactNode;
};

export const FieldsetHint = ({ children }: FieldsetHintProps) => {
	return isValidElement(children) ? (
		children
	) : (
		<Text
			fontSize="sm"
			color="muted"
			display="block"
			css={{ mariginTop: mapSpacing(0.75) }}
		>
			{children}
		</Text>
	);
};
