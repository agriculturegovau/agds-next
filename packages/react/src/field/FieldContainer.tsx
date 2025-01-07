import { PropsWithChildren } from 'react';
import { Stack } from '../stack';
import { boxPalette } from '../core';

export type FieldContainerProps = PropsWithChildren<{
	/** If true, the invalid state will be rendered. */
	invalid?: boolean;
	/** Defines an identifier (ID) which must be unique. */
	id?: string;
}>;

export const FieldContainer = ({
	children,
	invalid,
	id,
}: FieldContainerProps) => (
	<Stack
		borderLeft={invalid}
		borderLeftWidth="xl"
		css={{
			borderLeftColor: invalid ? boxPalette.systemError : undefined,
		}}
		gap={0.5}
		id={id}
		paddingLeft={invalid ? 1 : undefined}
	>
		{children}
	</Stack>
);
