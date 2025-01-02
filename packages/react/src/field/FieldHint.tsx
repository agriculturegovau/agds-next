import { PropsWithChildren } from 'react';
import { Text } from '../text';

export type FieldHintProps = PropsWithChildren<{
	/** Defines an identifier (ID) which must be unique. */
	id: string;
}>;

export const FieldHint = ({ children, id }: FieldHintProps) => (
	<Text color="muted" display="block" id={id}>
		{children}
	</Text>
);
