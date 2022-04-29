import { PropsWithChildren } from 'react';
import { Box } from '@ag.ds-next/box';
import { boxPalette, mq, tokens } from '@ag.ds-next/core';
import { HeroBannerVariant, variantMap } from './utils';

export type HeroBannerBackgroundProps = PropsWithChildren<{
	backgroundImageSrc?: string;
	variant: HeroBannerVariant;
}>;

export const HeroBannerBackground = ({
	children,
	backgroundImageSrc,
	variant,
}: HeroBannerBackgroundProps) => {
	const { backgroundVar } = variantMap[variant];
	return (
		<Box
			width="100%"
			height="100%"
			css={{
				[tokens.mediaQuery.min.sm]: {
					background: `linear-gradient(270deg, transparent 0px, ${boxPalette[backgroundVar]} 240px), no-repeat center right url(${backgroundImageSrc})`,
					backgroundSize: 'auto 100%',
				},
				[tokens.mediaQuery.min.md]: {
					background: `linear-gradient(270deg, transparent 0px, ${boxPalette[backgroundVar]} 320px), no-repeat center right url(${backgroundImageSrc})`,
				},
				[tokens.mediaQuery.min.lg]: {
					background: `linear-gradient(270deg, transparent 0px, ${boxPalette[backgroundVar]} 380px), no-repeat center right url(${backgroundImageSrc})`,
				},
				[tokens.mediaQuery.min.xl]: {
					background: `linear-gradient(270deg, transparent 0px, ${boxPalette[backgroundVar]} 580px), no-repeat center right url(${backgroundImageSrc})`,
				},
			}}
		>
			{children}
		</Box>
	);
};
