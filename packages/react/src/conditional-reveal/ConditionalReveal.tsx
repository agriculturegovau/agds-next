import { PropsWithChildren } from 'react';
import { Divider } from '../divider';

export type ConditionalRevealProps = PropsWithChildren<{
	/** Controls the visibility state of the children */
	visible: boolean;
}>;

export function ConditionalReveal(props: ConditionalRevealProps) {
	const { visible, children } = props;

	if (!visible) {
		return null;
	}

	return (
		<>
			<Divider></Divider>
			{children}
		</>
	);
}
