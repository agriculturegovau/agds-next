import { PropsWithChildren } from 'react';
import { Divider } from '../divider';
import { FormStack } from '../form-stack';

export type ConditionalRevealProps = PropsWithChildren<{
	/** Controls the visibility and render state of the children */
	visible?: boolean;
}>;

export function ConditionalReveal({
	visible,
	children,
}: ConditionalRevealProps) {
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
