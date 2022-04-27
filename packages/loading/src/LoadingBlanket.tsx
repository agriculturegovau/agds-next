import { ReactNode } from 'react';
import { Flex } from '@ag.ds-next/box';
import { globalPalette } from '@ag.ds-next/core';
import { Text } from '@ag.ds-next/text';
import { LoadingDots } from './LoadingDots';

export type LoadingBlanketProps = {
	fullScreen?: boolean;
	label?: ReactNode;
};

export const LoadingBlanket = ({ fullScreen, label }: LoadingBlanketProps) => (
	<Flex
		flexDirection="column"
		justifyContent="center"
		alignItems="center"
		aria-live="polite"
		css={{
			position: fullScreen ? 'fixed' : 'absolute',
			inset: 0,
			zIndex: 100,
			backgroundColor: `rgba(255, 255, 255, 0.9)`,
			textAlign: 'center',
		}}
	>
		<Flex
			flexDirection="column"
			alignItems="center"
			gap={1}
			padding={2}
			rounded
		>
			<LoadingDots size={fullScreen ? 'lg' : 'md'} />
			{label ? (
				<Text
					fontSize="lg"
					fontWeight="bold"
					lineHeight="heading"
					css={{ color: globalPalette.lightForegroundText }}
				>
					{label}
				</Text>
			) : null}
		</Flex>
	</Flex>
);
