import { PropsWithChildren } from 'react';
import { Flex, FlexProps } from '@ag.ds-next/box';

export type ButtonGroupProps = PropsWithChildren<FlexProps>;

export const ButtonGroup = ({
	children,
	gap = 1,
	flexDirection = ['column', 'row'],
	alignItems = ['stretch', 'flex-start'],
}: ButtonGroupProps) => {
	return (
		<Flex gap={gap} flexDirection={flexDirection} alignItems={alignItems}>
			{children}
		</Flex>
	);
};
