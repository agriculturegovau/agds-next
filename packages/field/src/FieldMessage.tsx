import { Text } from '@ag.ds-next/text';
import { useField } from './FieldProvider';

export const FieldMessage = ({ children }: { children: string }) => {
	const { messageId, invalid, valid } = useField();
	return (
		<Text display="block" color={getColor({ invalid, valid })} id={messageId}>
			{children}
		</Text>
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
