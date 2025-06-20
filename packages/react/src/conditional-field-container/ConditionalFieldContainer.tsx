import { PropsWithChildren } from 'react';
import { Flex } from '../flex';

export type ConditionalFieldContainerProps = PropsWithChildren<{
	/** Controls the visibility and render state of the children */
	visible?: boolean;
}>;

export function ConditionalFieldContainer({
	children,
	visible,
}: ConditionalFieldContainerProps) {
	if (!visible) {
		return null;
	}

	return (
		// Duplicates FormStack's spacing with additional properties
		<Flex
			{...{ [CONDITIONAL_FIELD_CONTAINER_DATA_ATTR]: true }}
			borderColor="muted"
			borderLeft
			borderLeftWidth="xl"
			flexDirection="column"
			gap={2}
			paddingLeft={1}
		>
			{children}
		</Flex>
	);
}

export const CONDITIONAL_FIELD_CONTAINER_DATA_ATTR =
	'data-conditional-field-container';
