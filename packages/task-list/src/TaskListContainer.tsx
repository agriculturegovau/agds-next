import type { ReactNode } from 'react';
import { Stack } from '@ag.ds-next/box';

export type TaskListContainerProps = {
	children: ReactNode;
};

export const TaskListContainer = ({ children }: TaskListContainerProps) => (
	<Stack as="ul" borderTop>
		{children}
	</Stack>
);
