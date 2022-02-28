import { PropsWithChildren } from 'react';
import { Box } from '@ag.ds-next/box';

export type CardFooterProps = PropsWithChildren<{
	background?: 'body' | 'bodyAlt';
}>;

export const CardFooter = ({ background, children }: CardFooterProps) => (
	<Box borderTop background={background} padding={1}>
		{children}
	</Box>
);
