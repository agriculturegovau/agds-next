import { ReactNode } from 'react';
import { Box } from '../../box/src';

export type CardInnerProps = { children: ReactNode };

export const CardInner = ({ children }: CardInnerProps) => (
	<Box padding={1.5}>{children}</Box>
);
