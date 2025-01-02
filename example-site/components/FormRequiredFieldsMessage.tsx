import { Text } from '@ag.ds-next/react/text';

export const FormRequiredFieldsMessage = () => {
	return (
		<Text as="p" color="muted" fontSize="xs">
			All fields are required unless marked optional.
		</Text>
	);
};
