import { ReactNode } from 'react';
import { Box } from '@ag.ds-next/box';

export const CardHeader: React.FC = ({
	background,
	children,
}: {
	background?: 'body' | 'bodyAlt';
	children?: ReactNode;
}) => (
	<Box padding={1} borderBottom background={background}>
		{children}
	</Box>
);
