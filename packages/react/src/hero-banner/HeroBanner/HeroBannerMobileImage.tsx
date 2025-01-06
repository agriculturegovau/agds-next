import { ReactNode } from 'react';
import { Box } from '../../box';

export type HeroBannerMobileImageProps = { children: ReactNode };

export const HeroBannerMobileImage = ({
	children,
}: HeroBannerMobileImageProps) => (
	<Box
		css={{
			position: 'relative',
			overflow: 'hidden',
			paddingTop: '40%',
			'& img': {
				position: 'absolute',
				top: '50%',
				left: 0,
				right: 0,
				transform: 'translateY(-50%)',
				maxWidth: '100%',
			},
		}}
		display={{ xs: 'block', md: 'none' }}
	>
		{children}
	</Box>
);
