import { PropsWithChildren } from 'react';
import { Text } from '../text';

export type FieldHintProps = PropsWithChildren<{
	/** Defines an identifier (ID) which must be unique. */
	id: string;
}>;

export const FieldHint = ({ children, id }: FieldHintProps) => (
	<Text display="block" color="muted" id={id}>
		{children}
	</Text>
);
