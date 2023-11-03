import { PropsWithChildren } from 'react';
import { Box } from '../box';
import { Flex } from '../flex';
import { AlertFilledIcon, SuccessFilledIcon } from '../icon';
import { Text } from '../text';

export type FieldMessageProps = PropsWithChildren<{
	/** Defines an identifier (ID) which must be unique. */
	id: string;
	/** If true, the invalid state will be rendered. If false, the valid state will be rendered */
	invalid?: boolean;
}>;

export const FieldMessage = ({
	children,
	id,
	invalid = true,
}: FieldMessageProps) => {
	return (
		<Flex gap={0.5} alignItems="center">
			<Box flexShrink={0}>
				{invalid ? (
					<AlertFilledIcon
						color="error"
						size="md"
						aria-label="Error"
						aria-hidden="false"
						css={{ display: 'block' }}
					/>
				) : (
					<SuccessFilledIcon
						color="success"
						size="md"
						aria-label="Success"
						aria-hidden="false"
						css={{ display: 'block' }}
					/>
				)}
			</Box>
			<Text
				display="block"
				fontWeight="bold"
				color={invalid ? 'error' : 'success'}
				id={id}
			>
				{children}
			</Text>
		</Flex>
	);
};
