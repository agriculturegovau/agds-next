import { PropsWithChildren } from 'react';
import { Stack } from '../stack';
import { boxPalette, mapSpacing, tokens } from '../core';
import { CONDITIONAL_FIELD_CONTAINER_DATA_ATTR } from '../conditional-field-container';
import { GROUPED_FIELDS_DATA_ATTR } from '../grouped-fields';

export type FieldContainerProps = PropsWithChildren<{
	/** If true, the invalid state will be rendered. */
	invalid?: boolean;
	/** Defines an identifier (ID) which must be unique. */
	id?: string;
}>;

export const FieldContainer = ({
	children,
	invalid,
	id,
}: FieldContainerProps) => (
	<Stack
		{...{ [FIELD_CONTAINER_DATA_ATTR]: true }}
		borderLeft={invalid}
		borderLeftWidth="xl"
		css={{
			borderLeftColor: invalid ? boxPalette.systemError : undefined,
			[`[${CONDITIONAL_FIELD_CONTAINER_DATA_ATTR}] &[${FIELD_CONTAINER_DATA_ATTR}]`]:
				{
					marginLeft: invalid
						? `calc(-${mapSpacing(1)} - ${tokens.borderWidth.xl}px)`
						: undefined,
					position: 'relative',
				},
			// Only negate the margin for the first grouped field
			[`[${CONDITIONAL_FIELD_CONTAINER_DATA_ATTR}] [${GROUPED_FIELDS_DATA_ATTR}] &[${FIELD_CONTAINER_DATA_ATTR}]:not(:first-of-type)`]:
				{
					marginLeft: 0,
				},
		}}
		gap={0.5}
		id={id}
		paddingLeft={invalid ? 1 : undefined}
	>
		{children}
	</Stack>
);

const FIELD_CONTAINER_DATA_ATTR = 'data-field-container';
