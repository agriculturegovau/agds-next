import { ReactNode } from 'react';
import { Text } from '@ag.ds-next/text';

export type LoadingBlanketLabelProps = {
	children: ReactNode;
};

export const LoadingBlanketLabel = ({ children }: LoadingBlanketLabelProps) => (
	<Text fontSize="lg" fontWeight="bold" lineHeight="heading">
		{children}
	</Text>
);
