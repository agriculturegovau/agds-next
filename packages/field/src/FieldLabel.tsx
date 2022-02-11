import type { ReactNode } from 'react';
import { Text } from '@ag.ds-next/text';

export const FieldLabel = ({
	children,
	htmlFor,
}: {
	children: ReactNode;
	htmlFor: string;
}) => (
	<Text as="label" htmlFor={htmlFor} display="block" fontWeight="bold">
		{children}
	</Text>
);
