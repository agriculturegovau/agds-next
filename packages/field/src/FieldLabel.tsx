import type { PropsWithChildren } from 'react';
import { Text } from '@ag.ds-next/text';

export type FieldLabelProps = PropsWithChildren<{
	htmlFor: string;
}>;

export const FieldLabel = ({ children, htmlFor }: FieldLabelProps) => (
	<Text as="label" htmlFor={htmlFor} display="block" fontWeight="bold">
		{children}
	</Text>
);
