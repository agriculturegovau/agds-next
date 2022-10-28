import { ReactNode } from 'react';
import { Text } from '../text';

export type LoadingBlanketLabelProps = {
	children: ReactNode;
};

export const LoadingBlanketLabel = ({ children }: LoadingBlanketLabelProps) => (
	<Text fontSize="lg" fontWeight="bold" lineHeight="heading" role="status">
		{children}
	</Text>
);
