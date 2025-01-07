import { PropsWithChildren } from 'react';
import { Box } from '../box';

export type CardHeaderProps = PropsWithChildren<{
	background?: 'body' | 'bodyAlt';
}>;

export const CardHeader = ({ background, children }: CardHeaderProps) => (
	<Box background={background} borderBottom borderColor="muted" padding={1.5}>
		{children}
	</Box>
);
