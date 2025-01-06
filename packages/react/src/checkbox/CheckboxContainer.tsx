import { PropsWithChildren } from 'react';
import { Flex } from '../flex';

export type CheckboxContainerProps = PropsWithChildren<{
	disabled?: boolean;
	htmlFor?: string;
}>;

export function CheckboxContainer({
	children,
	htmlFor,
	disabled,
}: CheckboxContainerProps) {
	return (
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
}
