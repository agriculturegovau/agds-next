import { ElementType, PropsWithChildren, useMemo } from 'react';
import { Flex } from '@ag.ds-next/box';
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
		<Flex as={as} htmlFor={htmlFor} gap={0.25}>
			<Text as="span" fontWeight="bold">
				{children}
			</Text>
			{secondaryLabel ? (
				<Text as="span" color="muted">
					{secondaryLabel}
				</Text>
			) : null}
		</Flex>
	);
};
