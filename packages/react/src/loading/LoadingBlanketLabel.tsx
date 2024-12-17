import { ReactNode } from 'react';
import { Text } from '../text';

export type LoadingBlanketLabelProps = {
	children: ReactNode;
	role: 'alert' | 'status';
};

export const LoadingBlanketLabel = ({
	children,
	role,
}: LoadingBlanketLabelProps) => (
	<Text fontSize="lg" fontWeight="bold" lineHeight="heading" role={role}>
		{children}
	</Text>
);
