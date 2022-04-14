import { PropsWithChildren } from 'react';
import { Flex, Stack } from '@ag.ds-next/box';
import { mapSpacing } from '@ag.ds-next/core';
import {
	FieldContainer,
	FieldHint,
	FieldLabel,
	FieldMessage,
} from '@ag.ds-next/field';

export type ControlGroupProps = PropsWithChildren<{
	block?: boolean;
	hint?: string;
	invalid?: boolean;
	label?: string;
	secondaryLabel?: string;
	message?: string;
	required?: boolean;
	id?: string;
}>;

export const ControlGroup = ({
	block,
	children,
	hint,
	invalid,
	label,
	secondaryLabel,
	message,
	required,
	id,
}: ControlGroupProps) => (
	<FieldContainer invalid={invalid} id={id}>
		<fieldset css={{ padding: 0, margin: 0, border: 'none' }}>
			{label ? (
				<FieldLabel
					as="legend"
					required={required}
					secondaryLabel={secondaryLabel}
				>
					{label}
				</FieldLabel>
			) : null}
			<Stack gap={0.5} css={{ marginTop: label ? mapSpacing(0.5) : undefined }}>
				{hint ? <FieldHint>{hint}</FieldHint> : null}
				{message && invalid ? (
					<FieldMessage invalid={invalid}>{message}</FieldMessage>
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
