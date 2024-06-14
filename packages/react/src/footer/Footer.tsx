import { type PropsWithChildren } from 'react';
import { type BorderColor } from '../box';
import { tokens, type ResponsiveProp } from '../core';
import { Flex } from '../flex';
import { Stack } from '../stack';

export type FooterProps = PropsWithChildren<{
	background?: 'body' | 'bodyAlt';
	borderColor?: ResponsiveProp<BorderColor>;
}>;

export const Footer = ({
	background = 'body',
	borderColor = 'accent',
	children,
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
				maxWidth={tokens.maxWidth.container}
				width="100%"
				gap={1.5}
				paddingX={tokens.containerPadding}
			>
				{children}
			</Stack>
		</Flex>
	);
};
