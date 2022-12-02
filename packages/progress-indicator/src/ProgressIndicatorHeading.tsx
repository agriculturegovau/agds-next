import { Stack } from '@ag.ds-next/box';
import { Text } from '@ag.ds-next/text';
import { tokens } from '@ag.ds-next/core';

export const ProgressIndicatorHeading = ({
	heading,
	subHeading,
}: {
	heading: string;
	subHeading: string;
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
				{heading}
			</Text>
			<Text color="muted" fontSize="xs">
				{subHeading}
			</Text>
		</Stack>
	);
};
