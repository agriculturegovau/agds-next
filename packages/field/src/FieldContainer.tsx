import { ReactNode } from 'react';
import { Stack } from '@ag.ds-next/box';
import { globalPalette, mapSpacing, tokens } from '@ag.ds-next/core';

export type FieldContainerProps = {
	children: ReactNode;
	invalid?: boolean;
};

export const FieldContainer = ({ children, invalid }: FieldContainerProps) => (
	<Stack
		gap={0.5}
		css={
			invalid
				? {
						borderLeftWidth: tokens.borderWidth.heavy,
						borderLeftStyle: 'solid',
						borderLeftColor: globalPalette.error,
						paddingLeft: mapSpacing(1),
				  }
				: undefined
		}
	>
		{children}
	</Stack>
);
