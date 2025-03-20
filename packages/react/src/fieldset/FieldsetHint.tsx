import { isValidElement, PropsWithChildren } from 'react';
import { Text } from '../text';
import { mapSpacing } from '../core';

export type FieldsetHintProps = PropsWithChildren<{ id?: string }>;

export const FieldsetHint = ({ children, id }: FieldsetHintProps) => {
	return isValidElement(children) ? (
		<div css={{ marginTop: mapSpacing(0.75) }} id={id}>
			{children}
		</div>
	) : (
		<Text
			color="muted"
			css={{ marginTop: mapSpacing(0.75) }}
			display="block"
			fontSize="sm"
			id={id}
		>
			{children}
		</Text>
	);
};
