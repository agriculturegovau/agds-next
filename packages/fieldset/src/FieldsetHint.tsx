import { isValidElement, PropsWithChildren } from 'react';
import { Text } from '@ag.ds-next/text';
import { mapSpacing } from '@ag.ds-next/core';

export type FieldsetHintProps = PropsWithChildren<{ id?: string }>;

export const FieldsetHint = ({ children, id }: FieldsetHintProps) => {
	return isValidElement(children) ? (
		<div id={id} css={{ marginTop: mapSpacing(0.75) }}>
			{children}
		</div>
	) : (
		<Text
			fontSize="sm"
			color="muted"
			display="block"
			css={{ marginTop: mapSpacing(0.75) }}
			id={id}
		>
			{children}
		</Text>
	);
};
