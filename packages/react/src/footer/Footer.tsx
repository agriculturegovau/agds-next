import { type PropsWithChildren } from 'react';
import { type BorderColor } from '../box';
import { tokens, type ResponsiveProp } from '../core';
import { Flex } from '../flex';
import { Stack } from '../stack';

export type FooterProps = PropsWithChildren<{
	background?: 'body' | 'bodyAlt';
	borderColor?: ResponsiveProp<BorderColor>;
	/** The maximum width of the container. */
	maxWidth?: 'container' | 'containerLg';
}>;

export const Footer = ({
	background = 'body',
	borderColor = 'accent',
	children,
	maxWidth = 'container',
}: FooterProps) => {
	return (
		<Flex
			as="footer"
			background={background}
			borderColor={borderColor}
			borderTop
			borderTopWidth="xl"
			color="text"
			css={{
				li: { marginLeft: 0 },
			}}
			justifyContent="center"
			paddingY={3}
		>
			<Stack
				gap={1.5}
				maxWidth={tokens.maxWidth[maxWidth] || tokens.maxWidth.container}
				paddingX={tokens.containerPadding}
				width="100%"
			>
				{children}
			</Stack>
		</Flex>
	);
};
