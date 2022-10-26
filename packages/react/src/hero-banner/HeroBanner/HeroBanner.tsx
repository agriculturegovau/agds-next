import { PropsWithChildren, ReactNode } from 'react';
import { HeroBannerBackground } from '../../utils';
import { HeroBannerContent } from './HeroBannerContent';
import { HeroBannerMobileImage } from './HeroBannerMobileImage';
import { HeroBannerContainer } from './HeroBannerContainer';

export type HeroBannerProps = PropsWithChildren<{
	/** The hero image */
	image?: ReactNode;
	/** The background of the component */
	background?: HeroBannerBackground;
}>;

export const HeroBanner = ({
	image,
	background = 'bodyAlt',
	children,
}: HeroBannerProps) => (
	<HeroBannerContainer background={background}>
		{image ? <HeroBannerMobileImage>{image}</HeroBannerMobileImage> : null}
		<HeroBannerContent background={background} image={image}>
			{children}
		</HeroBannerContent>
	</HeroBannerContainer>
);
