import { Stack } from '@ag.ds-next/box';
import { H2 } from '@ag.ds-next/heading';
import { Text } from '@ag.ds-next/text';

export const TaskListHeading = ({
	stepsCompleted,
	totalSteps,
}: {
	stepsCompleted: number;
	totalSteps: number;
}) => {
	return (
		<Stack gap={1}>
			<H2>Task list</H2>
			<Text fontSize="sm" color="muted">
				{stepsCompleted} of {totalSteps} steps completed
			</Text>
		</Stack>
	);
};
