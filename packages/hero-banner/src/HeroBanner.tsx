import { Box } from '@ag.ds-next/box';
import { Content } from '@ag.ds-next/content';
import { boxPalette, mq } from '@ag.ds-next/core';

import { PropsWithChildren, ReactNode } from 'react';

export type HeroBannerProps = PropsWithChildren<{
	mobileImage?: ReactNode;
	backgroundImageSrc?: string;
	variant?: HeroBannerVariant;
}>;

export const HeroBanner = ({
	variant = 'lightAlt',
	backgroundImageSrc,
	mobileImage,
	children,
}: HeroBannerProps) => {
	const { palette, background, backgroundVar } = variantMap[variant];
	return (
		<Box as="section" palette={palette} background={background}>
			{mobileImage ? (
				<Box display={['block', 'none']}>{mobileImage}</Box>
			) : null}
			<Box
				width="100%"
				height="100%"
				paddingY={[1, 3, 6]}
				css={mq({
					background: [
						null,
						`linear-gradient(90deg, ${boxPalette[backgroundVar]} 0%, ${boxPalette[backgroundVar]} 60%, transparent 100%), no-repeat center right url(${backgroundImageSrc});`,
					],
					backgroundSize: [null, 'auto 100%'],
				})}
			>
				<Content>{children}</Content>
			</Box>
		</Box>
	);
};

export const variantMap = {
	light: {
		palette: 'light',
		background: 'body',
		backgroundVar: 'backgroundBody',
	},
	lightAlt: {
		palette: 'light',
		background: 'bodyAlt',
		backgroundVar: 'backgroundBodyAlt',
	},
	dark: {
		palette: 'dark',
		background: 'body',
		backgroundVar: 'backgroundBody',
	},
	darkAlt: {
		palette: 'dark',
		background: 'bodyAlt',
		backgroundVar: 'backgroundBodyAlt',
	},
} as const;

type HeroBannerVariant = keyof typeof variantMap;
