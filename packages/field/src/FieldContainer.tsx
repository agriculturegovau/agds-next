import { ReactNode } from 'react';
import { Stack } from '@ag.ds-next/box';
import { globalPalette } from '@ag.ds-next/core';

export type FieldContainerProps = {
	children: ReactNode;
	invalid?: boolean;
};

export const FieldContainer = ({ children, invalid }: FieldContainerProps) => (
	<Stack
		gap={0.5}
		paddingLeft={invalid ? 1 : undefined}
		borderLeft={invalid}
		borderLeftWidth="xl"
		css={{
			borderLeftColor: invalid ? globalPalette.error : undefined,
		}}
	>
		{children}
	</Stack>
);
