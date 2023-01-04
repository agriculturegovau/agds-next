import { Text } from '../text';

export const FieldHint = ({
	children,
	id,
}: {
	children: string;
	id?: string;
}) => (
	<Text display="block" color="muted" id={id}>
		{children}
	</Text>
);
