import { ReactNode } from 'react';
import { Stack } from '@ag.ds-next/box';

export type ModalButtonGroupProps = { children: ReactNode };

export const ModalButtonGroup = ({ children }: ModalButtonGroupProps) => {
	return (
		<Stack
			gap={0.5}
			flexDirection={{ xs: 'column', sm: 'row' }}
			paddingTop={1}
			css={{
				marginTop: 'auto',
			}}
		>
			{children}
		</Stack>
	);
};
