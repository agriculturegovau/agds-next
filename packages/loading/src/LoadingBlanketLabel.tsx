import { ReactNode } from 'react';
import { Text } from '@ag.ds-next/text';

export type LoadingBlanketLabelProps = {
	children: ReactNode;
	role?: 'status';
};

export const LoadingBlanketLabel = ({
	children,
	role,
}: LoadingBlanketLabelProps) => (
	<Text fontSize="lg" fontWeight="bold" lineHeight="heading" role={role}>
		{children}
	</Text>
);
