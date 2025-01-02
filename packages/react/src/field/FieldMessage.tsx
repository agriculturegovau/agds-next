import { PropsWithChildren } from 'react';
import { Box } from '../box';
import { Flex } from '../flex';
import { AlertFilledIcon } from '../icon';
import { Text } from '../text';

export type FieldMessageProps = PropsWithChildren<{
	/** Defines an identifier (ID) which must be unique. */
	id: string;
}>;

export const FieldMessage = ({ children, id }: FieldMessageProps) => (
	<Flex alignItems="center" gap={0.5}>
		<Box flexShrink={0}>
			<AlertFilledIcon
				aria-hidden="false"
				aria-label="Error"
				color="error"
				css={{ display: 'block' }}
				size="md"
			/>
		</Box>
		<Text color="error" display="block" fontWeight="bold" id={id}>
			{children}
		</Text>
	</Flex>
);
