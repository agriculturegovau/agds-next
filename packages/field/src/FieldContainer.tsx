import { PropsWithChildren } from 'react';
import { Stack } from '@ag.ds-next/box';
import { boxPalette } from '@ag.ds-next/core';

export type FieldContainerProps = PropsWithChildren<{
	invalid?: boolean;
	id?: string;
}>;

export const FieldContainer = ({
	children,
	invalid,
	id,
}: FieldContainerProps) => (
	<Stack
		gap={0.5}
		paddingLeft={invalid ? 1 : undefined}
		borderLeft={invalid}
		borderLeftWidth="xl"
		id={id}
		css={{
			borderLeftColor: invalid ? boxPalette.error : undefined,
		}}
	>
		{children}
	</Stack>
);
