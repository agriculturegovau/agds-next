import { ReactNode } from 'react';
import { globalPalette } from '@ag.ds-next/core';
import { Text } from '@ag.ds-next/text';

export type LoadingBlanketLabelProps = {
	children: ReactNode;
};

export const LoadingBlanketLabel = ({ children }: LoadingBlanketLabelProps) => (
	<Text
		fontSize="lg"
		fontWeight="bold"
		lineHeight="heading"
		css={{ color: globalPalette.lightForegroundText }}
	>
		{children}
	</Text>
);
