import { ReactNode } from 'react';
import { Box } from '@ag.ds-next/box';

export const CardFooter: React.FC = ({
	background,
	children,
}: {
	background?: 'body' | 'bodyAlt';
	children?: ReactNode;
}) => (
	<Box borderTop background={background} padding={1}>
		{children}
	</Box>
);
