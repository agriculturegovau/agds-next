import { Flex } from '@ag.ds-next/box';
import { Icon } from '@ag.ds-next/icon';
import { Text } from '@ag.ds-next/text';
import { useField } from './FieldProvider';

export const FieldMessage = ({ children }: { children: string }) => {
	const { messageId, invalid, valid } = useField();
	return (
		<Flex gap={0.25}>
			{invalid ? <Icon color="error" size={1.5} icon="close" /> : null}
			<Text display="block" color={getColor({ invalid, valid })} id={messageId}>
				{children}
			</Text>
		</Flex>
	);
};

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
