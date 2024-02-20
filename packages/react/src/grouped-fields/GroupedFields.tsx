import { ReactNode } from 'react';
import { visuallyHiddenStyles } from '../a11y';
import { Box } from '../box';
import { mapSpacing, useId } from '../core';
import { FieldContainer, FieldHint, FieldLabel, FieldMessage } from '../field';
import { Flex } from '../flex';
import { Stack } from '../stack';

type FieldA11yProps = {
	'aria-describedby': string | null;
	'aria-invalid': boolean;
};

export type GroupedFieldsProps = {
	/** The two form inputs. */
	children: (props: {
		field1Props: FieldA11yProps;
		field2Props: FieldA11yProps;
	}) => ReactNode;
	/** If true, the invalid state will be rendered for field 1. */
	field1Invalid?: boolean;
	/** If true, the invalid state will be rendered for field 2. */
	field2Invalid?: boolean;
	/** If true, "(optional)" will never be appended to the legend even when `required` is `false`. */
	hideOptionalLabel?: boolean;
	/** Provides extra information about the group of fields. */
	hint?: string;
	/** A unique ID used as the basis for internal IDs. */
	id?: string;
	/** Describes the purpose of the group of fields. */
	legend: string;
	/** Message to show when either field is invalid. */
	message?: string;
	/** If false, "(optional)" will not be appended to the legend. */
	required?: boolean;
	/** If true, the legend is hidden for sighted users. */
	visuallyHideLegend?: boolean;
};

const getAriaDescribedById = ({
	hint,
	hintId,
	invalid,
	message,
	messageId,
}: {
	hint?: string;
	hintId: string;
	invalid?: boolean;
	message?: string;
	messageId: string;
}) => {
	const id = [invalid && message ? messageId : null, hint ? hintId : null]
		.filter(Boolean)
		.join(' ');

	return id.length > 0 ? id : null;
};

export function GroupedFields({
	children,
	field1Invalid = false,
	field2Invalid = false,
	hideOptionalLabel = false,
	hint,
	id,
	legend,
	message,
	visuallyHideLegend = false,
}: GroupedFieldsProps) {
	const { hintId, messageId } = useGroupedFieldsIds(id);
	const invalid = field1Invalid || field2Invalid;
	const field1Props = {
		'aria-describedby': getAriaDescribedById({
			hint,
			hintId,
			invalid: field1Invalid,
			message,
			messageId,
		}),
		'aria-invalid': field1Invalid,
	};
	const field2Props = {
		'aria-describedby': getAriaDescribedById({
			hint,
			hintId,
			invalid: field2Invalid,
			message,
			messageId,
		}),
		'aria-invalid': field2Invalid,
	};

	return (
		<FieldContainer invalid={invalid}>
			<Box as="fieldset">
				<FieldLabel
					as="legend"
					css={visuallyHideLegend ? visuallyHiddenStyles : undefined}
					hideOptionalLabel={hideOptionalLabel}
					required={false}
				>
					{legend}
				</FieldLabel>
				<Stack
					css={{ marginTop: visuallyHideLegend ? undefined : mapSpacing(0.5) }}
					gap={0.5}
				>
					{hint ? <FieldHint id={hintId}>{hint}</FieldHint> : null}
					{message && invalid ? (
						<FieldMessage id={messageId}>{message}</FieldMessage>
					) : null}
					<Flex flexWrap="wrap" gap={1} inline>
						{children({ field1Props, field2Props })}
					</Flex>
				</Stack>
			</Box>
		</FieldContainer>
	);
}

export function useGroupedFieldsIds(id?: string) {
	const autoId = useId(id);
	const hintId = `grouped-fields-${autoId}-hint`;
	const messageId = `grouped-fields-${autoId}-message`;
	return { hintId, messageId };
}
