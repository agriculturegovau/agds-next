import { PropsWithChildren } from 'react';
import { Flex } from '../flex';

export type CheckboxContainerProps = PropsWithChildren<{
	disabled?: boolean;
}>;

export function CheckboxContainer({
	children,
	disabled,
}: CheckboxContainerProps) {
	return (
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
}
