import { PropsWithChildren } from 'react';
import { Divider } from '../divider';
import { FormStack } from '../form-stack';

export type ConditionalRevealProps = PropsWithChildren<{
	/** Controls the visibility and render state of the children */
	visible: boolean;
}>;

export function ConditionalReveal(props: ConditionalRevealProps) {
	const { visible, children } = props;

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
