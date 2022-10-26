import { ReactNode } from 'react';
import { Box } from '../../../box/src';

export type HeroCategoryBannerMobileImageProps = { children: ReactNode };

export const HeroCategoryBannerMobileImage = ({
	children,
}: HeroCategoryBannerMobileImageProps) => (
	<Box
		display={{ xs: 'block', md: 'none' }}
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
	>
		{children}
	</Box>
);
