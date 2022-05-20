import { isValidElement, ReactNode } from 'react';
import { Text } from '@ag.ds-next/text';
import { mapSpacing } from '@ag.ds-next/core';

export type FieldsetHintProps = {
	children: ReactNode;
};

export const FieldsetHint = ({ children }: FieldsetHintProps) => {
	return isValidElement(children) ? (
		<div css={{ marginTop: mapSpacing(0.75) }}>{children}</div>
	) : (
		<Text
			fontSize="sm"
			color="muted"
			display="block"
			css={{ marginTop: mapSpacing(0.75) }}
		>
			{children}
		</Text>
	);
};
