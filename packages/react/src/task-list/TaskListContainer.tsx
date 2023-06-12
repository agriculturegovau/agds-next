import type { ReactNode } from 'react';
import { Stack } from '../stack';

export type TaskListContainerProps = {
	children: ReactNode;
};

export const TaskListContainer = ({ children }: TaskListContainerProps) => (
	<Stack gap={1.5}>{children}</Stack>
);
