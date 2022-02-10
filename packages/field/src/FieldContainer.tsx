import { ReactNode } from 'react';
import { Stack } from '@ag.ds-next/box';
import { globalPalette, mapSpacing } from '@ag.ds-next/core';
import { useField } from './FieldProvider';

export type FieldContainerProps = {
	children: ReactNode;
};

export const FieldContainer = ({ children }: FieldContainerProps) => {
	const { invalid } = useField();
	return (
		<Stack
			gap={0.5}
			css={
				invalid
					? {
							borderLeftWidth: 4,
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
};
