import { PropsWithChildren } from 'react';
import { Flex, Stack } from '../../box/src';
import { mapSpacing, useId } from '../../core/src';
import {
	FieldContainer,
	FieldHint,
	FieldLabel,
	FieldMessage,
} from '../../field/src';

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
	message,
	required = false,
}: ControlGroupProps) => {
	const { groupId, hintId, messageId } = useControlGroupIds(id);
	const describedByIds = [
		hint ? hintId : null,
		message ? messageId : null,
	].filter(Boolean);
	const describedBy = describedByIds.length
		? describedByIds.join(' ')
		: undefined;
	return (
		<FieldContainer invalid={invalid} id={groupId}>
			<fieldset
				aria-describedby={describedBy}
				css={{ padding: 0, margin: 0, border: 'none' }}
			>
				{label ? (
					<FieldLabel as="legend" required={required}>
						{label}
					</FieldLabel>
				) : null}
				<Stack
					gap={0.5}
					css={{ marginTop: label ? mapSpacing(0.5) : undefined }}
				>
					{hint ? <FieldHint id={hintId}>{hint}</FieldHint> : null}
					{message && invalid ? (
						<FieldMessage invalid={invalid} id={messageId}>
							{message}
						</FieldMessage>
					) : null}
					<Flex
						gap={1}
						flexDirection={block ? 'column' : 'row'}
						width="100%"
						paddingTop={0.5}
					>
						{children}
					</Flex>
				</Stack>
			</fieldset>
		</FieldContainer>
	);
};

export const useControlGroupIds = (idProp?: string) => {
	const autoId = useId(idProp);
	const groupId = idProp ? idProp : `control-group-${autoId}`;
	const hintId = `control-group-${autoId}-hint`;
	const messageId = `control-group-${autoId}-message`;
	return { groupId, hintId, messageId };
};
