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
		gap={0.5}
		paddingLeft={invalid ? 1 : undefined}
		borderLeft={invalid}
		borderLeftWidth="xl"
		id={id}
		css={{
			borderLeftColor: invalid ? boxPalette.systemError : undefined,
		}}
	>
		{children}
	</Stack>
);
