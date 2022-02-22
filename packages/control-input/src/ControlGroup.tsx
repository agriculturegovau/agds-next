import { ReactNode } from 'react';
import { Flex, Stack } from '@ag.ds-next/box';
import { Text } from '@ag.ds-next/text';
import { mapSpacing } from '@ag.ds-next/core';
import { FieldContainer, FieldHint, FieldMessage } from '@ag.ds-next/field';

export type ControlGroupProps = {
	block?: boolean;
	children: ReactNode;
	hint?: string;
	invalid?: boolean;
	label?: string;
	message?: string;
	required?: boolean;
};

export const ControlGroup = ({
	block,
	children,
	hint,
	invalid,
	label,
	message,
	required,
}: ControlGroupProps) => (
	<FieldContainer invalid={invalid}>
		<fieldset css={{ padding: 0, margin: 0, border: 'none' }}>
			{label ? (
				<Text as="legend" display="block" fontWeight="bold">
					{label}{' '}
					<Text as="span" color="muted">
						({required ? 'required' : 'optional'})
					</Text>
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
