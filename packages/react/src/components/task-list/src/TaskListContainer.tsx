import type { ElementType, ReactNode } from 'react';
import { Stack } from '../../box/src';

export type TaskListContainerProps = {
	as?: ElementType;
	children: ReactNode;
};

export const TaskListContainer = ({
	children,
	as = 'ul',
}: TaskListContainerProps) => (
	<Stack as={as} borderTop css={{ counterReset: 'task-count' }}>
		{children}
	</Stack>
);
