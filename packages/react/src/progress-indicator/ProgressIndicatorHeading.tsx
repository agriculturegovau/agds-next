import { Stack } from '../box';
import { Text } from '../text';
import { tokens } from '../core';

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
				[tokens.mediaQuery.min.md]: { display: 'flex' },
			}}
		>
			<Text as="h2" fontSize="md" fontWeight="bold" lineHeight="heading">
				{heading}
			</Text>
			<Text color="muted" fontSize="xs">
				{subHeading}
			</Text>
		</Stack>
	);
};
