import { ElementType, PropsWithChildren, useMemo } from 'react';
import { Text } from '@ag.ds-next/text';

export type FieldLabelProps = PropsWithChildren<{
	as?: ElementType;
	htmlFor?: string;
	required?: boolean;
	secondaryLabel?: string;
}>;

export const FieldLabel = ({
	as = 'label',
	children,
	htmlFor,
	required,
	secondaryLabel: secondaryLabelProp,
}: FieldLabelProps) => {
	const secondaryLabel = useMemo(() => {
		if (secondaryLabelProp) return secondaryLabelProp;
		if (!required) return `(optional)`;
	}, [required, secondaryLabelProp]);
	return (
		<Text as={as} htmlFor={htmlFor} display="flex" gap={0.25} fontWeight="bold">
			{children}
			{secondaryLabel ? <Text color="muted">{secondaryLabel}</Text> : null}
		</Text>
	);
};
