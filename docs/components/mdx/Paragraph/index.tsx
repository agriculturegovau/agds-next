import { Text, TextProps } from '@ag.ds-next/text';

export function Paragraph(props: TextProps) {
	return <Text as="p" {...props} />;
}
