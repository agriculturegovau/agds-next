import { PropsWithChildren } from 'react';
import { Flex } from '../flex';

export type RadioContainerProps = PropsWithChildren<{
	disabled?: boolean;
}>;

export const RadioContainer = ({ children, disabled }: RadioContainerProps) => (
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
