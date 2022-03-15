import type { ElementType, ReactNode } from 'react';
import { Stack } from '@ag.ds-next/box';

export type TaskListContainerProps = {
	as?: ElementType;
	children: ReactNode;
};

export const TaskListContainer = ({
	children,
	as = 'ul',
}: TaskListContainerProps) => (
	<Stack as={as} borderTop>
		{children}
	</Stack>
);
