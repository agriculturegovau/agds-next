import type { ReactNode } from 'react';
import { Stack, StackProps } from '@ag.ds-next/box';

export type LinkListGroupProps = StackProps & {
	children: ReactNode;
	horizontal?: boolean;
};

export const LinkListGroup = ({
	children,
	horizontal,
	...props
}: LinkListGroupProps) => {
	return (
		<Stack
			as="ul"
			gap={horizontal ? 1 : 0.5}
			flexDirection={horizontal ? 'row' : 'column'}
			fontFamily="body"
			{...props}
		>
			{children}
		</Stack>
	);
};
