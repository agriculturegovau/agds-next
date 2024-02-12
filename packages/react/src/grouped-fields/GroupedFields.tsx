import { ReactNode } from 'react';
import { visuallyHiddenStyles } from '../a11y';
import { Box } from '../box';
import { mapSpacing, useId } from '../core';
import { FieldContainer, FieldHint, FieldLabel, FieldMessage } from '../field';
import { Flex } from '../flex';
import { Stack } from '../stack';

interface FieldProps {
	'aria-describedby': string | null;
	'aria-invalid': boolean;
}

export type GroupedFieldsProps = {
	/** The two form inputs. */
	children: (props: {
		field1Props: FieldProps;
		field2Props: FieldProps;
	}) => ReactNode;
	/** If true, "(optional)" will never be appended to the legend even when `required` is `false`. */
	hideOptionalLabel?: boolean;
	/** Provides extra information about the group of fields. */
	hint?: string;
	/** The unique ID for the hint text returned from useGroupedFieldsIds. */
	id: string;
	/** If true, the invalid state will be rendered for the start date. */
	field1Invalid?: boolean;
	/** If true, the invalid state will be rendered for the start date. */
	field2Invalid?: boolean;
	/** Describes the purpose of the group of fields. */
	legend: string;
	/** Message to show when the field is invalid. */
	message?: string;
	/** The unique ID for the message text returned from useGroupedFieldsIds. */
	messageId: string;
	/** If false, "(optional)" will not be appended to the legend. */
	required?: boolean;
	/** If true, the legend is hidden for sighted users. */
	visuallyHiddenLegend?: boolean;
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
	required = false,
	visuallyHiddenLegend = false,
}: GroupedFieldsProps) {
	const { hintId, messageId } = useGroupedFieldsIds(id);
	const invalid = field1Invalid || field2Invalid;
	const field1Props = {
		'aria-describedby': [
			field1Invalid && message ? messageId : null,
			hint ? hintId : null,
		]
			.filter(Boolean)
			.join(' '),
		'aria-invalid': field1Invalid,
	};
	const field2Props = {
		'aria-describedby': [
			field2Invalid && message ? messageId : null,
			hint ? hintId : null,
		]
			.filter(Boolean)
			.join(' '),
		'aria-invalid': field2Invalid,
	};

	return (
		<FieldContainer invalid={invalid}>
			<Box as="fieldset">
				<FieldLabel
					as="legend"
					css={visuallyHiddenLegend ? visuallyHiddenStyles : undefined}
					hideOptionalLabel={hideOptionalLabel}
					required={required}
				>
					{legend}
				</FieldLabel>
				<Stack
					css={{ marginTop: legend ? mapSpacing(0.5) : undefined }}
					gap={0.5}
				>
					{hint ? <FieldHint id={hintId}>{hint}</FieldHint> : null}
					{message && invalid ? (
						<FieldMessage id={messageId}>{message}</FieldMessage>
					) : null}
					<Flex flexWrap="wrap" gap={1} inline>
						{typeof children === 'function'
							? // eslint-disable-next-line @typescript-eslint/ban-ts-comment
							  // @ts-ignore
							  children({ field1Props, field2Props })
							: children}
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
