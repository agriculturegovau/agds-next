import { Text } from '@ag.ds-next/text';
import { useField } from './FieldProvider';

export const FieldMessage = ({ children }: { children: string }) => {
	const { messageId, isInvalid } = useField();
	return (
		<Text display="block" color={getColor(isInvalid)} id={messageId}>
			{children}
		</Text>
	);
};

const getColor = (isInvalid?: boolean) => {
	if (isInvalid === undefined) return; // The `valid` prop is undefined, so it is neither success or error
	if (isInvalid) return 'error';
	return 'success';
};
