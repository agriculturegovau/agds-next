import { PropsWithChildren } from 'react';
import { Box } from '@ag.ds-next/box';

export type CardHeaderProps = PropsWithChildren<{
	background?: 'body' | 'bodyAlt';
}>;

export const CardHeader = ({ background, children }: CardHeaderProps) => (
	<Box padding={1.5} borderBottom background={background}>
		{children}
	</Box>
);
