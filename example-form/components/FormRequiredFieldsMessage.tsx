import { Text } from '@ag.ds-next/react';

export const FormRequiredFieldsMessage = () => {
	return (
		<Text as="p" fontSize="xs" color="muted">
			All fields are required unless marked optional.
		</Text>
	);
};
