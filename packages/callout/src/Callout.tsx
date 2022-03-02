import { ReactNode, ElementType } from 'react';
import { Box } from '@ag.ds-next/box';

export const Callout = ({
	as,
	children,
}: {
	as?: ElementType;
	children: ReactNode;
}) => {
	return (
		<Box
			as={as}
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
