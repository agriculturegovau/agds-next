import { ReactNode } from 'react';
import { visuallyHiddenStyles } from '../a11y';
import { mapSpacing, useId } from '../core';
import { FieldContainer, FieldHint, FieldLabel, FieldMessage } from '../field';
import { Flex } from '../flex';
import { Stack } from '../stack';

export type GroupedFieldsProps = {
	/** The two form inputs. */
	children: ReactNode;
	/** If true, "(optional)" will never be appended to the legend even when `required` is `false`. */
	hideOptionalLabel?: boolean;
	/** Provides extra information about the group of fields. */
	hint?: string;
	/** The unique ID for the hint text returned from useGroupedFieldsIds. */
	hintId: string;
	/** If true, the invalid state will be rendered for the start date. */
	invalid?: boolean;
	/** Describes the purpose of the group of fields. */
	legend: string;
	/** If true, the legend is hidden for sighted users. */
	legendIsVisuallyHidden?: boolean;
	/** Message to show when the field is invalid. */
	message?: string;
	/** The unique ID for the message text returned from useGroupedFieldsIds. */
	messageId: string;
	/** If false, "(optional)" will not be appended to the legend. */
	required?: boolean;
};

export function GroupedFields({
	children,
	hideOptionalLabel = false,
	hint,
	hintId,
	invalid = false,
	legend,
	legendIsVisuallyHidden = false,
	message,
	messageId,
	required = false,
}: GroupedFieldsProps) {
	return (
		<FieldContainer invalid={invalid}>
			<fieldset css={{ border: 'none', margin: 0, padding: 0 }}>
				<FieldLabel
					as="legend"
					css={legendIsVisuallyHidden ? visuallyHiddenStyles : undefined}
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
						{children}
					</Flex>
				</Stack>
			</fieldset>
		</FieldContainer>
	);
}

export function useGroupedFieldsIds(idProp?: string) {
	const autoId = useId(idProp);
	const hintId = `grouped-fields-${autoId}-hint`;
	const messageId = `grouped-fields-${autoId}-message`;
	return { hintId, messageId };
}
