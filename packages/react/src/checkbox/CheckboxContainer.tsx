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
}
