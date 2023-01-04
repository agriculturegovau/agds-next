import { PropsWithChildren } from 'react';
import { Box } from '../box';

export type CardFooterProps = PropsWithChildren<{
	background?: 'body' | 'bodyAlt';
}>;

export const CardFooter = ({ background, children }: CardFooterProps) => (
	<Box borderTop borderColor="muted" background={background} padding={1.5}>
		{children}
	</Box>
);
