import { PropsWithChildren } from 'react';
import { Flex } from '../flex';

export type RadioContainerProps = PropsWithChildren<{
	disabled?: boolean;
	htmlFor?: string;
}>;

export const RadioContainer = ({
	children,
	disabled,
	htmlFor,
}: RadioContainerProps) => (
	<Flex
		alignItems="flex-start"
		as="label"
		color="text"
		css={{
			cursor: disabled ? 'not-allowed' : 'pointer',
		}}
		gap={0.5}
		htmlFor={htmlFor}
		inline
	>
		{children}
	</Flex>
);
