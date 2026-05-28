import { type PropsWithChildren } from 'react';
import { type BorderColor } from '../box';
import { mapResponsiveProp, mq, tokens, type ResponsiveProp } from '../core';
import { Flex } from '../flex';
import { Stack } from '../stack';

type PositionY = 'top' | 'bottom';
type ArtworkPosition =
	| PositionY
	| `${PositionY} ${string}` // positionY + offsetY
	| `${string} ${PositionY}` // offsetX + positionY
	| `${string} ${PositionY} ${string}`; // offsetX + positionY + offsetY

type FooterArtworkProps = {
	src: string;
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

export const Footer = ({
	background = 'body',
	borderColor = 'accent',
	children,
	maxWidth = 'container',
	artwork,
}: FooterProps) => {
	const artworkCSS =
		artwork === undefined
			? {}
			: {
					backgroundImage: mapResponsiveProp({
						xs: undefined,
						xl: `url('${artwork.src}')`,
					}),
					backgroundRepeat: mapResponsiveProp({
						xs: undefined,
						xl: 'no-repeat',
					}),
					backgroundPosition: mapResponsiveProp({
						xs: undefined,
						xl: `right ${artwork.position ?? 'bottom'}`,
					}),
					backgroundSize: artwork.size
						? mapResponsiveProp({
								xs: undefined,
								xl: artwork.size,
						  })
						: undefined,
			  };

	return (
		<Flex
			as="footer"
			background={background}
			borderColor={borderColor}
			borderTop
			borderTopWidth="xl"
			color="text"
			css={mq({
				li: { marginLeft: 0 },
				...artworkCSS,
			})}
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
