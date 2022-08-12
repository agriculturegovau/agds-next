import { PropsWithChildren } from 'react';
import { Flex } from '@ag.ds-next/box';

export type LoadingBlanketContainerProps = PropsWithChildren<{
	/** If true, the blanket will cover the entire screen */
	fullScreen?: boolean;
}>;

export const LoadingBlanketContainer = ({
	children,
	fullScreen,
}: LoadingBlanketContainerProps) => (
	<Flex
		palette="light"
		color="text"
		flexDirection="column"
		justifyContent="center"
		alignItems="center"
		aria-live="assertive"
		css={{
			position: fullScreen ? 'fixed' : 'absolute',
			inset: 0,
			zIndex: 100,
			backgroundColor: `rgba(255, 255, 255, 0.9)`,
		}}
	>
		{children}
	</Flex>
);
