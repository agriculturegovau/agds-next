import { ElementType, PropsWithChildren } from 'react';
import { Box } from '../box';
import { Text } from '../text';
import { useSecondaryLabel } from './useSecondaryLabel';

export type FieldLabelProps = PropsWithChildren<{
	as?: ElementType;
	/** Defines an identifier (ID) which must be unique. */
	id?: string;
	/** The ID of the form element this label relates to. */
	htmlFor?: string;
	/** The CSS class name, typically generated from the `css` prop. */
	className?: string;
	/** If `false` or `undefined`, "(optional)" will be appended to the label. */
	required?: boolean;
	/** If `true`, "(optional)" will never be appended to the label even when `required` is `false`. */
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
	secondaryLabel,
	hideOptionalLabel,
}: FieldLabelProps) => {
	const secondaryLabelWithOptional = useSecondaryLabel({
		hideOptionalLabel,
		required,
		secondaryLabel,
	});

	return (
		<Box as={as} id={id} htmlFor={htmlFor} className={className}>
			<Text as="span" fontWeight="bold">
				{children}
			</Text>
			{secondaryLabelWithOptional ? (
				<Text as="span" color="muted">
					{' '}
					{secondaryLabelWithOptional}
				</Text>
			) : null}
		</Box>
	);
};
