import { ReactNode } from 'react';
import { Stack } from '../stack';
import { Content } from '../content';

export type LoadingBlanketContentProps = {
	children: ReactNode;
};

export const LoadingBlanketContent = ({
	children,
}: LoadingBlanketContentProps) => (
	<Content as="div">
		<Stack alignItems="center" gap={1} textAlign="center">
			{children}
		</Stack>
	</Content>
);
