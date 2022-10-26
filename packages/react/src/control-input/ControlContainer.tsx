import { PropsWithChildren } from 'react';
import { Flex } from '../box';

export type ControlContainerProps = PropsWithChildren<{
	disabled?: boolean;
}>;

export const ControlContainer = ({
	children,
	disabled,
}: ControlContainerProps) => (
	<Flex
		as="label"
		alignItems="flex-start"
		color="text"
		gap={0.5}
		inline
		css={{
			cursor: disabled ? 'not-allowed' : 'pointer',
		}}
	>
		{children}
	</Flex>
);
