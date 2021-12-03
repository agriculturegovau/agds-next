import { Text, TextProps } from '@ag.ds-next/text';

export function ListItem({
	children,
	...props
}: React.PropsWithChildren<TextProps>) {
	return (
		<Text as="li" {...props}>
			{children}
		</Text>
	);
}
