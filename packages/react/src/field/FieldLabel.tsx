import { ElementType, PropsWithChildren, useMemo } from 'react';
import { Flex } from '../box';
import { Text } from '../text';

export type FieldLabelProps = PropsWithChildren<{
	as?: ElementType;
	/** The ID of the form element this label relates to. */
	htmlFor?: string;
	/** The CSS class name, typically generated from the `css` prop. */
	className?: string;
	/** If false, "(optional)" will be appended to the label. */
	required: boolean;
	/** If true, "(optional)" will never be appended to the label even when `required` is `false`. */
	hideOptionalLabel?: boolean;
	/** Override the default secondary label. */
	secondaryLabel?: string;
}>;

export const FieldLabel = ({
	as = 'label',
	children,
	className,
	htmlFor,
	required,
	secondaryLabel: secondaryLabelProp,
	hideOptionalLabel,
}: FieldLabelProps) => {
	const secondaryLabel = useMemo(() => {
		if (hideOptionalLabel) return null;
		if (secondaryLabelProp) return secondaryLabelProp;
		if (!required) return `(optional)`;
	}, [required, secondaryLabelProp, hideOptionalLabel]);
	return (
		<Flex as={as} htmlFor={htmlFor} gap={0.25} className={className}>
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
