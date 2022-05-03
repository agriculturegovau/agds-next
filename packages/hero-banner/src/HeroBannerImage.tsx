import { PropsWithChildren } from 'react';
import { Box } from '@ag.ds-next/box';
import { boxPalette } from '@ag.ds-next/core';
import { HeroBannerVariant, variantMap } from './utils';

export type HeroBannerImageProps = PropsWithChildren<{
	variant: HeroBannerVariant;
}>;

export const HeroBannerImage = ({
	children,
	variant,
}: HeroBannerImageProps) => {
	const { backgroundVar } = variantMap[variant];
	return (
		<Box
			display={['none', 'block']}
			width="50%"
			css={{
				position: 'absolute',
				top: 0,
				right: 0,
				bottom: 0,

				'&:after': {
					content: '""',
					pointerEvents: 'none',
					position: 'absolute',
					inset: 0,
					background: `linear-gradient(90deg, ${boxPalette[backgroundVar]} 0px, ${boxPalette[backgroundVar]} 32px, transparent 100%)`,
				},

				img: {
					width: '100%',
					height: '100%',
					objectFit: 'cover',
					objectPosition: 'center',
				},
			}}
		>
			{children}
		</Box>
	);
};
