import { PropsWithChildren } from 'react';
import { Divider } from '../divider';
import { FormStack } from '../form-stack';

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
		<FormStack>
			<Divider />
			{children}
		</FormStack>
	);
}
