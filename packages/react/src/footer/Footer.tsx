import { ReactNode, type PropsWithChildren } from 'react';
import { Box, type BorderColor } from '../box';
import { boxPalette, tokens, type ResponsiveProp } from '../core';
import { Flex } from '../flex';
import { Stack } from '../stack';

type PositionY = 'top' | 'center' | 'bottom';
type PositionX = 'right'; // artwork must be right-aligned

type ArtworkPosition =
	| `${PositionX} ${PositionY}`
	| `${PositionX} ${string} ${PositionY} ${string}`; // posX offsetX posY offsetY

type FooterArtworkProps = {
	image: ReactNode;
	position?: ArtworkPosition;
	gradient?: boolean;
	fit?: 'cover' | 'contain' | 'scale-down' | 'fill' | 'none';
};

export type FooterProps = PropsWithChildren<{
	background?: 'body' | 'bodyAlt';
	borderColor?: ResponsiveProp<BorderColor>;
	/** The maximum width of the container. */
	maxWidth?: 'container' | 'containerLg';
	/** The image URL to be used as artwork. */
	artwork?: FooterArtworkProps;
}>;

const backgroundMap = {
	body: 'backgroundBody',
	bodyAlt: 'backgroundBodyAlt',
} as const;

export const Footer = ({
	background = 'body',
	borderColor = 'accent',
	children,
	maxWidth = 'container',
	artwork,
}: FooterProps) => {
	// this implementation has become a hybrid of the original Footer, Content, and HeroBanner.
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
				position: 'relative',
				overflow: 'hidden',
			}}
			justifyContent="center"
		>
			<Box
				maxWidth={tokens.maxWidth[maxWidth] || tokens.maxWidth.container}
				paddingX={tokens.containerPadding}
				width="100%"
			>
				<Flex>
					<Stack
						css={{ zIndex: tokens.zIndex.elevated }}
						gap={1.5}
						paddingY={3}
						width={artwork ? { xs: '100%', xl: '60%' } : '100%'}
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

								'&::after': artwork.gradient
									? {
											content: '""',
											pointerEvents: 'none',
											position: 'absolute',
											inset: 0,
											background: `linear-gradient(90deg, ${
												boxPalette[backgroundMap[background]]
											} 0px, rgba(255, 255, 255, 0.0) 360px)`,
									  }
									: {},

								img: {
									width: '100%',
									height: '100%',
									objectFit: artwork.fit ?? 'cover',
									objectPosition: artwork.position ?? 'right center',
								},
							}}
							display={{ xs: 'none', xl: 'block' }}
							width="40%"
						>
							{artwork.image}
						</Box>
					) : null}
				</Flex>
			</Box>
		</Flex>
	);
};
