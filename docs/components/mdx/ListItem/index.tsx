import { Text, TextProps } from '@ag.ds-next/text';

export function ListItem({ children, ...props }: TextProps) {
	return (
		<Text as="li" {...props}>
			{children}
		</Text>
	);
}
