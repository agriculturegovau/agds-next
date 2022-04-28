import { ReactNode } from 'react';
import { Box } from '@ag.ds-next/box';

export type HeroBannerMobileImageProps = { children: ReactNode };

export const HeroBannerMobileImage = ({
	children,
}: HeroBannerMobileImageProps) => (
	<Box display={['block', 'none']}>{children}</Box>
);
