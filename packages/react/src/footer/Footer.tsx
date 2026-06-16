import { ReactNode, type PropsWithChildren } from 'react';
import { Box, type BorderColor } from '../box';
import { boxPalette, tokens, type ResponsiveProp } from '../core';
import { Flex } from '../flex';
import { Stack } from '../stack';
import { Content } from '../content';

type PositionY = 'top' | 'bottom';
type ArtworkPosition =
	| PositionY
	| `${PositionY} ${string}` // positionY + offsetY
	| `${string} ${PositionY}` // offsetX + positionY
	| `${string} ${PositionY} ${string}`; // offsetX + positionY + offsetY

type FooterArtworkProps = {
	src: ReactNode;
	position?: ArtworkPosition;
	size?: string;
};

export type FooterProps = PropsWithChildren<{
	background?: 'body' | 'bodyAlt';
	borderColor?: ResponsiveProp<BorderColor>;
	/** The maximum width of the container. */
	maxWidth?: 'container' | 'containerLg';
	/** The image URL to be used as artwork. */
	artwork?: FooterArtworkProps;
}>;

/*
export const FooterOld = ({
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
*/

export const backgroundMap = {
	body: 'backgroundBody',
	bodyAlt: 'backgroundBodyAlt',
	shade: 'backgroundShade',
	shadeAlt: 'backgroundShadeAlt',
} as const;

export const Footer = ({
	background = 'body',
	borderColor = 'accent',
	children,
	// maxWidth = 'container',
	artwork,
}: FooterProps) => {
	const backgroundVar = backgroundMap[background];

	return (
		<Box
			as="footer"
			background={background}
			borderColor={borderColor}
			borderTop
			borderTopWidth="xl"
			color="text"
			css={{
				li: { marginLeft: 0 },
				position: 'relative',
				overflow: 'hidden',
			}}
		>
			<Content>
				<Flex>
					<Stack
						css={{ zIndex: tokens.zIndex.elevated }}
						gap={2}
						paddingBottom={{ xs: 3, md: 4 }}
						paddingTop={{ xs: 2, md: 4 }}
						width={['100%', '100%', artwork ? '60%' : '100%']}
					>
						{children}
					</Stack>

					{artwork ? (
						<Box
							css={{
								position: 'absolute',
								top: 0,
								right: 0,
								bottom: 0,

								'&::after': {
									content: '""',
									pointerEvents: 'none',
									position: 'absolute',
									inset: 0,
									background: `linear-gradient(90deg, ${boxPalette[backgroundVar]} 0px, rgba(255, 255, 255, 0.0) 360px)`,
								},

								img: {
									width: '100%',
									height: '100%',
									objectFit: 'cover',
									objectPosition: 'center',
								},
							}}
							display={['none', 'none', 'block']}
							width="40%"
						>
							{artwork.src}
						</Box>
					) : null}
				</Flex>
			</Content>
		</Box>
	);
};
