import { PropsWithChildren } from 'react';
import { tokens } from '../core';
import { Flex } from '../flex';

export type LoadingBlanketContainerProps = PropsWithChildren<{
	/** If true, the blanket will cover the entire screen */
	fullScreen?: boolean;
}>;

export const LoadingBlanketContainer = ({
	children,
	fullScreen,
}: LoadingBlanketContainerProps) => (
	<Flex
		alignItems="center"
		aria-live="assertive"
		color="text"
		css={{
			position: fullScreen ? 'fixed' : 'absolute',
			inset: 0,
			zIndex: tokens.zIndex.overlay,
			backgroundColor: `rgba(255, 255, 255, 0.9)`,
		}}
		flexDirection="column"
		justifyContent="center"
		palette="light"
	>
		{children}
	</Flex>
);
