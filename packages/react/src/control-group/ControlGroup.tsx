import { PropsWithChildren } from 'react';
import { Flex } from '../flex';
import { Stack } from '../stack';
import { mapSpacing, useId } from '../core';
import { FieldContainer, FieldHint, FieldLabel, FieldMessage } from '../field';
import { ControlGroupProvider } from './ControlGroupProvider';

export type ControlGroupProps = PropsWithChildren<{
	/** If true, children will be stacked vertically. */
	block?: boolean;
	/** Provides extra information about the field. */
	hint?: string;
	/** Defines an identifier (ID) which must be unique. */
	id?: string;
	/** If true, the invalid state will be rendered. */
	invalid?: boolean;
	/** Describes the purpose of the field. */
	label?: string;
	/** If true, "(optional)" will never be appended to the label. */
	hideOptionalLabel?: boolean;
	/** Message to show when the field is invalid. */
	message?: string;
	/** If false, "(optional)" will be appended to the label. */
	required?: boolean;
}>;

export const ControlGroup = ({
	block = false,
	children,
	hint,
	id,
	invalid = false,
	label,
	hideOptionalLabel,
	message,
	required = false,
}: ControlGroupProps) => {
	const { groupId, hintId, messageId } = useControlGroupIds(id);
	const describedByIds = [
		invalid && message ? messageId : null,
		hint ? hintId : null,
	].filter(Boolean);
	const describedBy = describedByIds.length
		? describedByIds.join(' ')
		: undefined;
	return (
		<ControlGroupProvider
			messageId={invalid && message ? messageId : undefined}
			invalid={invalid}
		>
			<FieldContainer invalid={invalid} id={groupId}>
				<fieldset
					aria-describedby={describedBy}
					css={{ padding: 0, margin: 0, border: 'none' }}
				>
					{label ? (
						<FieldLabel
							as="legend"
							required={required}
							hideOptionalLabel={hideOptionalLabel}
						>
							{label}
						</FieldLabel>
					) : null}
					<Stack
						gap={0.5}
						css={{ marginTop: label ? mapSpacing(0.5) : undefined }}
					>
						{hint ? <FieldHint id={hintId}>{hint}</FieldHint> : null}
						{message && invalid ? (
							<FieldMessage id={messageId}>{message}</FieldMessage>
						) : null}
						<Flex
							gap={1}
							flexDirection={block ? 'column' : 'row'}
							flexWrap={block ? undefined : 'wrap'}
							width="100%"
							paddingTop={0.5}
						>
							{children}
						</Flex>
					</Stack>
				</fieldset>
			</FieldContainer>
		</ControlGroupProvider>
	);
};

export const useControlGroupIds = (idProp?: string) => {
	const autoId = useId(idProp);
	const groupId = idProp ? idProp : `control-group-${autoId}`;
	const hintId = `control-group-${autoId}-hint`;
	const messageId = `control-group-${autoId}-message`;
	return { groupId, hintId, messageId };
};
