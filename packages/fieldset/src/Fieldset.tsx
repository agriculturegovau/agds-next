import { PropsWithChildren } from 'react';
import { Stack } from '@ag.ds-next/box';
import { Text } from '@ag.ds-next/text';
import { mapSpacing } from '@ag.ds-next/core';
import { FieldContainer, FieldHint, FieldMessage } from '@ag.ds-next/field';

export type FieldsetProps = PropsWithChildren<{
	hint?: string;
	invalid?: boolean;
	label?: string;
	message?: string;
	required?: boolean;
}>;

export const Fieldset = ({
	children,
	hint,
	invalid,
	label,
	message,
}: FieldsetProps) => (
	<FieldContainer invalid={invalid}>
		<fieldset css={{ padding: 0, margin: 0, border: 'none' }}>
			{label ? (
				<Text
					as="legend"
					display="block"
					fontWeight="bold"
					fontSize="xl"
					lineHeight="heading"
				>
					{label}
				</Text>
			) : null}
			<Stack gap={0.5} css={{ marginTop: label ? mapSpacing(2) : undefined }}>
				{hint ? <FieldHint>{hint}</FieldHint> : null}
				{message && invalid ? (
					<FieldMessage invalid={invalid}>{message}</FieldMessage>
				) : null}
				<Stack gap={1.5}>{children}</Stack>
			</Stack>
		</fieldset>
	</FieldContainer>
);
