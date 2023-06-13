import type { ElementType, ReactNode } from 'react';
import { Stack } from '../stack';

export type TaskListItemsContainerProps = {
	as?: ElementType;
	children: ReactNode;
};

export const TaskListItemsContainer = ({
	children,
	as = 'ul',
}: TaskListItemsContainerProps) => (
	<Stack as={as} borderTop css={{ counterReset: 'task-count' }}>
		{children}
	</Stack>
);
