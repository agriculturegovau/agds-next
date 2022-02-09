import { Text } from '@ag.ds-next/text';
import { useField } from './FieldContext';

export const FieldLabel = ({ children }: { children: string }) => {
	const { fieldId } = useField();
	return (
		<Text as="label" htmlFor={fieldId} display="block">
			{children}
		</Text>
	);
};
