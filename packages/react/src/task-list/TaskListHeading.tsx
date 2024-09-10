import { Stack } from '../stack';
import { H2 } from '../heading';
import { Text } from '../text';

export const TaskListHeading = ({
	tasksCompleted,
	totalTasks,
}: {
	tasksCompleted: number;
	totalTasks: number;
}) => {
	return (
		<Stack gap={1}>
			<H2>Complete these tasks</H2>
			<Text fontSize="sm" color="muted">
				{tasksCompleted} of {totalTasks} tasks completed
			</Text>
		</Stack>
	);
};
