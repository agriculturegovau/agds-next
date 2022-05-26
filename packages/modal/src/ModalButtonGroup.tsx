import { ReactNode } from 'react';
import { ButtonGroup } from '@ag.ds-next/button';

export type ModalButtonGroupProps = { children: ReactNode };

export const ModalButtonGroup = ({ children }: ModalButtonGroupProps) => {
	return (
		<ButtonGroup paddingTop={1} css={{ marginTop: 'auto' }}>
			{children}
		</ButtonGroup>
	);
};
