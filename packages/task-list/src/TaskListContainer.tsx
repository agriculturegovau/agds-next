import type { ReactNode } from 'react';
import { Stack } from '@ag.ds-next/box';

export type TaskListContainerProps = {
	children: ReactNode;
};

export const TaskListContainer = ({ children }: TaskListContainerProps) => (
	<Stack gap={1.5}>{children}</Stack>
);
