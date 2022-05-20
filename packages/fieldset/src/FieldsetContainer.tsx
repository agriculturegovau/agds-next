import { ReactNode } from 'react';

export type FieldsetContainerProps = {
	children: ReactNode;
};

export const FieldsetContainer = ({ children }: FieldsetContainerProps) => (
	<fieldset css={{ padding: 0, margin: 0, border: 'none' }}>
		{children}
	</fieldset>
);
