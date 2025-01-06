import { PropsWithChildren } from 'react';
import { Box } from '../box';
import { Flex } from '../flex';
import { Stack } from '../stack';
import { mapSpacing, useId } from '../core';
import { FieldContainer, FieldHint, FieldLabel, FieldMessage } from '../field';
import { ControlGroupProvider } from './ControlGroupProvider';

export type ControlGroupProps = PropsWithChildren<{
	/** If true, children will be stacked vertically. */
	block?: boolean;
	/** If true, "(optional)" will never be appended to the label. */
	hideOptionalLabel?: boolean;
	/** Provides extra information about the field. */
	hint?: string;
	/** Defines an identifier (ID) which must be unique. */
	id?: string;
	/** If true, the invalid state will be rendered. */
	invalid?: boolean;
	/** Describes the purpose of the field. */
	label?: string;
	/** Sets a custom name attribute on the children Radios & Checkboxes. */
	name?: string;
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
	name,
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
			invalid={invalid}
			messageId={invalid && message ? messageId : undefined}
			name={name}
			required={required}
		>
			<FieldContainer id={groupId} invalid={invalid}>
				<Box aria-describedby={describedBy} as="fieldset">
					{label ? (
						<FieldLabel
							as="legend"
							hideOptionalLabel={hideOptionalLabel}
							required={required}
						>
							{label}
						</FieldLabel>
					) : null}
					<Stack
						css={{ marginTop: label ? mapSpacing(0.5) : undefined }}
						gap={0.5}
					>
						{hint ? <FieldHint id={hintId}>{hint}</FieldHint> : null}
						{message && invalid ? (
							<FieldMessage id={messageId}>{message}</FieldMessage>
						) : null}
						<Flex
							flexDirection={block ? 'column' : 'row'}
							flexWrap={block ? undefined : 'wrap'}
							gap={1}
							paddingTop={0.5}
							width="100%"
						>
							{children}
						</Flex>
					</Stack>
				</Box>
			</FieldContainer>
		</ControlGroupProvider>
	);
};

export const useControlGroupIds = (idProp?: string) => {
	const autoId = useId(idProp);
	const groupId = idProp || `control-group-${autoId}`;
	const hintId = `control-group-${autoId}-hint`;
	const messageId = `control-group-${autoId}-message`;
	return { groupId, hintId, messageId };
};
