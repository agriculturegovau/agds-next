import { Text } from '@ag.ds-next/text';
import { useField } from './FieldContext';

export const FieldHint = ({ children }: { children: string }) => {
	const { hintId } = useField();
	return (
		<Text display="block" color="muted" id={hintId}>
			{children}
		</Text>
	);
};
