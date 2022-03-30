import { PropsWithChildren } from 'react';
import { Flex, Stack } from '@ag.ds-next/box';
import { Text } from '@ag.ds-next/text';
import { mapSpacing } from '@ag.ds-next/core';
import { FieldContainer, FieldHint, FieldMessage } from '@ag.ds-next/field';

export type ControlGroupProps = PropsWithChildren<{
	block?: boolean;
	hint?: string;
	invalid?: boolean;
	label?: string;
	message?: string;
	required?: boolean;
	requiredLabel?: boolean;
	id?: string;
}>;

export const ControlGroup = ({
	block,
	children,
	hint,
	invalid,
	label,
	message,
	required,
	requiredLabel,
	id,
}: ControlGroupProps) => (
	<FieldContainer invalid={invalid} id={id}>
		<fieldset css={{ padding: 0, margin: 0, border: 'none' }}>
			{label ? (
				<Text as="legend" display="block" fontWeight="bold">
					{label}
					{requiredLabel ? (
						<Text as="span" color="muted">
							{' '}
							({required ? 'required' : 'optional'})
						</Text>
					) : null}
				</Text>
			) : null}
			<Stack gap={0.5} css={{ marginTop: label ? mapSpacing(0.5) : undefined }}>
				{hint ? <FieldHint>{hint}</FieldHint> : null}
				{message && invalid ? (
					<FieldMessage invalid={invalid}>{message}</FieldMessage>
				) : null}
				<Flex
					gap={block ? 0.5 : 1}
					flexDirection={block ? 'column' : 'row'}
					width="100%"
				>
					{children}
				</Flex>
			</Stack>
		</fieldset>
	</FieldContainer>
);
