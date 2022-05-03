import { PropsWithChildren } from 'react';
import { Box } from '@ag.ds-next/box';
import { boxPalette, mq } from '@ag.ds-next/core';
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
			css={
				backgroundImageSrc
					? mq({
							background: [
								null,
								`linear-gradient(90deg, ${boxPalette[backgroundVar]} 0%, ${boxPalette[backgroundVar]} 60%, transparent 100%), no-repeat center right url(${backgroundImageSrc});`,
							],
							backgroundSize: [null, 'auto 100%'],
					  })
					: undefined
			}
		>
			{children}
		</Box>
	);
};
