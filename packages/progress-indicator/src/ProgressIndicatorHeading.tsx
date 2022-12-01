import { Stack } from '@ag.ds-next/box';
import { Text } from '@ag.ds-next/text';
import { tokens } from '@ag.ds-next/core';

export const ProgressIndicatorHeading = ({
	stepsCompleted,
	totalSteps,
}: {
	stepsCompleted: number;
	totalSteps: number;
}) => {
	return (
		<Stack
			gap={0.5}
			paddingBottom={1.5}
			css={{
				display: 'none',
				[tokens.mediaQuery.min.md]: {
					display: 'flex',
				},
			}}
		>
			<Text fontSize="md" fontWeight="bold" lineHeight="heading">
				Progress
			</Text>
			<Text
				color="muted"
				fontSize="xs"
			>{`${stepsCompleted} of ${totalSteps} steps completed`}</Text>
		</Stack>
	);
};
