import { ElementType, PropsWithChildren, useMemo } from 'react';
import { Box } from '../box';
import { tokens } from '../core';
import { Text } from '../text';

export type FieldLabelProps = PropsWithChildren<{
	as?: ElementType;
	/** Defines an identifier (ID) which must be unique. */
	id?: string;
	/** The ID of the form element this label relates to. */
	htmlFor?: string;
	/** The CSS class name, typically generated from the `css` prop. */
	className?: string;
	/** If false, "(optional)" will be appended to the label. */
	required: boolean;
	/** If true, "(optional)" will never be appended to the label even when `required` is `false`. */
	hideOptionalLabel?: boolean;
	/** Text to prepend to the default secondary label. */
	secondaryLabel?: string;
}>;

export const FieldLabel = ({
	as = 'label',
	children,
	className,
	id,
	htmlFor,
	required,
	secondaryLabel: secondaryLabelProp,
	hideOptionalLabel,
}: FieldLabelProps) => {
	const secondaryLabel = useMemo(() => {
		return [
			secondaryLabelProp,
			hideOptionalLabel || required ? null : '(optional)',
		]
			.filter(Boolean)
			.join(' ');
	}, [required, secondaryLabelProp, hideOptionalLabel]);
	return (
		<Box
			as={as}
			id={id}
			htmlFor={htmlFor}
			className={className}
			maxWidth={tokens.maxWidth.bodyText}
		>
			<Text display="inline" fontWeight="bold">
				{children}
			</Text>
			{secondaryLabel ? (
				<Text display="inline" color="muted">
					{' '}
					{secondaryLabel}
				</Text>
			) : null}
		</Box>
	);
};
