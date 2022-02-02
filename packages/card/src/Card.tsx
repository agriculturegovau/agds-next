import { PropsWithChildren } from 'react';
import { Box } from '@ag.ds-next/box';

export type CardProps = PropsWithChildren<{
	shadow?: boolean;
	clickable?: boolean;
}>;

export const Card = ({ children, shadow }: CardProps) => {
	return <Box border={!shadow}>{children}</Box>;
};
