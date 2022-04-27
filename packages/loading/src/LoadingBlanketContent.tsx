import { ReactNode } from 'react';
import { Stack } from '@ag.ds-next/box';
import { Content } from '@ag.ds-next/content';

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
