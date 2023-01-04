import { PropsWithChildren } from 'react';
import { Box } from '../box';

export type CardHeaderProps = PropsWithChildren<{
	background?: 'body' | 'bodyAlt';
}>;

export const CardHeader = ({ background, children }: CardHeaderProps) => (
	<Box padding={1.5} borderBottom borderColor="muted" background={background}>
		{children}
	</Box>
);
