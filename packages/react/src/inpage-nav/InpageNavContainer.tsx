import type { PropsWithChildren } from 'react';
import { Stack } from '../stack';
import { boxPalette } from '../core';

export type InpageNavContainerProps = PropsWithChildren<{
	'aria-label': string;
}>;

export const InpageNavContainer = ({
	children,
	'aria-label': ariaLabel,
}: InpageNavContainerProps) => (
	<Stack
		aria-label={ariaLabel}
		as="nav"
		borderLeft
		borderLeftWidth="xl"
		css={{
			borderLeftColor: boxPalette.foregroundAction,
		}}
		gap={1}
		paddingLeft={1.5}
	>
		{children}
	</Stack>
);
