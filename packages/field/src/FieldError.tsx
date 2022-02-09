import { Text } from '@ag.ds-next/text';
import { useField } from './FieldContext';

export const FieldError = ({ children }: { children: string }) => {
	const { errorMessageId } = useField();
	return (
		<Text display="block" color="error" id={errorMessageId}>
			{children}
		</Text>
	);
};
