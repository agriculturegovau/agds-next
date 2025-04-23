import { PropsWithChildren } from 'react';
import { Divider } from '../divider';
import { FormStack } from '../form-stack';

export type ConditionalRevealContainerProps = PropsWithChildren<{
	/** Controls the visibility and render state of the children */
	visible?: boolean;
}>;

export function ConditionalRevealContainer({
	children,
	visible,
}: ConditionalRevealContainerProps) {
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
