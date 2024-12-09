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
		as="label"
		alignItems="flex-start"
		color="text"
		gap={0.5}
		htmlFor={htmlFor}
		inline
		css={{
			cursor: disabled ? 'not-allowed' : 'pointer',
		}}
	>
		{children}
	</Flex>
);
