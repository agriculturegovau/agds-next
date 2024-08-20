import { Stack } from '../stack';
import { H2 } from '../heading';
import { Text } from '../text';

export const TaskListHeading = ({
	stepsCompleted,
	totalSteps,
}: {
	stepsCompleted: number;
	totalSteps: number;
}) => {
	return (
		<Stack gap={1}>
			<H2>Complete these tasks</H2>
			<Text fontSize="sm" color="muted">
				{stepsCompleted} of {totalSteps} tasks completed
			</Text>
		</Stack>
	);
};
