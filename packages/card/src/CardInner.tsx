import { ReactNode } from 'react';
import { Box } from '@ag.ds-next/box';

export type CardInnerProps = { children: ReactNode };

export const CardInner = ({ children }: CardInnerProps) => (
	<Box padding={1.5}>{children}</Box>
);
