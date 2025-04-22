import { PropsWithChildren } from 'react';
import { Box } from '../box';

export type CardFooterProps = PropsWithChildren<{
	background?: 'body' | 'bodyAlt';
}>;

export const CardFooter = ({ background, children }: CardFooterProps) => (
	<Box background={background} borderColor="muted" borderTop padding={1.5}>
		{children}
	</Box>
);
