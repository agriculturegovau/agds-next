import { Box, Flex } from '../../box/src';
import { AlertFilledIcon } from '../../icon/src';
import { Text } from '../../text/src';

export const FieldMessage = ({
	children,
	id,
	invalid,
	valid,
}: {
	children: string;
	id?: string;
	invalid?: boolean;
	valid?: boolean;
}) => (
	<Flex gap={0.5} alignItems="center">
		{invalid ? (
			<Box flexShrink={0}>
				<AlertFilledIcon
					color="error"
					size="md"
					aria-label="Error"
					aria-hidden="false"
					css={{ display: 'block' }}
				/>
			</Box>
		) : null}
		<Text
			display="block"
			fontWeight="bold"
			color={getColor({ invalid, valid })}
			id={id}
		>
			{children}
		</Text>
	</Flex>
);

const getColor = ({
	invalid,
	valid,
}: {
	invalid?: boolean;
	valid?: boolean;
}) => {
	if (invalid) return 'error';
	if (valid) return 'success';
};
