import type { ReactNode } from 'react';
import { Stack } from '@ag.ds-next/box';

export const LinkListGroup = ({
	children,
	inline,
	...props
}: {
	children: ReactNode;
	inline?: boolean;
}) => {
	return (
		<Stack
			as="ul"
			gap={inline ? 1 : 0.5}
			flexDirection={inline ? 'row' : 'column'}
			fontFamily="body"
			{...props}
		>
			{children}
		</Stack>
	);
};
