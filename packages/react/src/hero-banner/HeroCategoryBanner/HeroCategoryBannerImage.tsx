import { PropsWithChildren } from 'react';
import { Box } from '../../box';
import { backgroundContextPaletteVars } from '../../core';

export type HeroCategoryBannerImageProps = PropsWithChildren<{}>;

export const HeroCategoryBannerImage = ({
	children,
}: HeroCategoryBannerImageProps) => {
	return (
		<Box
			display={['none', 'none', 'block']}
			width="40%"
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
					background: `linear-gradient(90deg, ${backgroundContextPaletteVars.alt} 0px, rgba(255, 255, 255, 0.0) 360px)`,
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
