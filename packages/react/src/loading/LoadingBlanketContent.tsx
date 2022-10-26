import { ReactNode } from 'react';
import { Stack } from '../box';
import { Content } from '../content';

export type LoadingBlanketContentProps = {
	children: ReactNode;
};

export const LoadingBlanketContent = ({
	children,
}: LoadingBlanketContentProps) => (
	<Content as="div">
		<Stack gap={1} alignItems="center" css={{ textAlign: 'center' }}>
			{children}
		</Stack>
	</Content>
);
