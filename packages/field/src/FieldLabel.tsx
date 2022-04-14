import type { PropsWithChildren, ReactNode } from 'react';
import { Text } from '@ag.ds-next/text';

export type FieldLabelProps = PropsWithChildren<{
	htmlFor: string;
}>;

export const FieldLabel = ({ children, htmlFor }: FieldLabelProps) => (
	<Text
		as="label"
		htmlFor={htmlFor}
		display="flex"
		gap={0.25}
		fontWeight="bold"
	>
		{children}
	</Text>
);

export type FieldSecondaryLabelProps = { children: ReactNode };

export const FieldSecondaryLabel = ({ children }: FieldSecondaryLabelProps) => (
	<Text color="muted">{children}</Text>
);
