import { PropsWithChildren } from 'react';
import { Divider } from '../divider';

export type ConditionalRevealProps = PropsWithChildren<{
	/** Controls the visibility state of the children */
	isVisible: boolean;
}>;

export function ConditionalReveal(props: ConditionalRevealProps) {
	const { isVisible, children } = props;

	if (!isVisible) {
		return null;
	}

	return (
		<>
			<Divider></Divider>
			{children}
		</>
	);
}
