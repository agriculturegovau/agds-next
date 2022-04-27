import { ReactNode } from 'react';
import { Flex, Stack } from '@ag.ds-next/box';
import { globalPalette } from '@ag.ds-next/core';
import { Content } from '@ag.ds-next/content';
import { Text } from '@ag.ds-next/text';
import { LoadingDots } from './LoadingDots';

export type LoadingBlanketProps = {
	fullScreen?: boolean;
	label: ReactNode;
};

export const LoadingBlanket = ({ fullScreen, label }: LoadingBlanketProps) => (
	<Flex
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
		<Content>
			<Stack gap={1} alignItems="center" css={{ textAlign: 'center' }}>
				<LoadingDots
					aria-label="loading"
					role="status"
					size={fullScreen ? 'lg' : 'md'}
				/>
				<Text
					fontSize="lg"
					fontWeight="bold"
					lineHeight="heading"
					css={{ color: globalPalette.lightForegroundText }}
				>
					{label}
				</Text>
			</Stack>
		</Content>
	</Flex>
);
