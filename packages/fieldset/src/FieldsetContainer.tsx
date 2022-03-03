import { ReactNode } from 'react';
import { Stack } from '@ag.ds-next/box';

export type FieldsetProps = {
	children: ReactNode;
};

export const FieldsetContainer = ({ children }: FieldsetProps) => (
	<fieldset css={{ padding: 0, margin: 0, border: 'none' }}>
		<Stack gap={1.5}>{children}</Stack>
	</fieldset>
);
