import { Box, Flex } from '../box';
import { AlertFilledIcon } from '../icon';
import { Text } from '../text';

export const FieldMessage = ({
	children,
	id,
}: {
	children: string;
	id: string;
}) => (
	<Flex gap={0.5} alignItems="center">
		<Box flexShrink={0}>
			<AlertFilledIcon
				color="error"
				size="md"
				aria-label="Error"
				aria-hidden="false"
				css={{ display: 'block' }}
			/>
		</Box>
		<Text display="block" fontWeight="bold" color="error" id={id}>
			{children}
		</Text>
	</Flex>
);
