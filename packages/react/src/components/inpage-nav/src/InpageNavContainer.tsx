import type { PropsWithChildren } from 'react';
import { Stack } from '../../box/src';
import { boxPalette } from '../../core/src';

export type InpageNavContainerProps = PropsWithChildren<{
	'aria-label': string;
}>;

export const InpageNavContainer = ({
	children,
	'aria-label': ariaLabel,
}: InpageNavContainerProps) => (
	<Stack
		as="nav"
		gap={1}
		borderLeft
		borderLeftWidth="xl"
		paddingLeft={1.5}
		css={{
			borderLeftColor: boxPalette.foregroundAction,
		}}
		aria-label={ariaLabel}
	>
		{children}
	</Stack>
);
