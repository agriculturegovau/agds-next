import { PropsWithChildren, ReactNode } from 'react';
import { HeroBannerContent } from './HeroBannerContent';
import { HeroBannerMobileImage } from './HeroBannerMobileImage';
import { HeroBannerContainer } from './HeroBannerContainer';

export type HeroBannerProps = PropsWithChildren<{
	/** The hero image */
	image?: ReactNode;
}>;

export const HeroBanner = ({ image, children }: HeroBannerProps) => (
	<HeroBannerContainer>
		{image ? <HeroBannerMobileImage>{image}</HeroBannerMobileImage> : null}
		<HeroBannerContent image={image}>{children}</HeroBannerContent>
	</HeroBannerContainer>
);
