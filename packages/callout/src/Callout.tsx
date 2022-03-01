import { ReactNode } from 'react';
import { Box } from '@ag.ds-next/box';

export const Callout = ({ children }: { children: ReactNode }) => {
	return (
		<Box
			borderLeft
			background="shade"
			padding={1.5}
			css={{
				borderLeftWidth: '0.25rem',
			}}
		>
			{children}
		</Box>
	);
};
