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
