import { PropsWithChildren, ReactNode } from 'react';
import { HeroBannerContent } from './HeroBannerContent';
import { HeroBannerMobileImage } from './HeroBannerMobileImage';
import { HeroBannerContainer } from './HeroBannerContainer';
import { HeroBannerVariant } from '../utils';

export type HeroBannerProps = PropsWithChildren<{
	/** The hero image */
	image?: ReactNode;
	/** The palette of the component */
	variant?: HeroBannerVariant;
}>;

export const HeroBanner = ({
	image,
	variant = 'lightAlt',
	children,
}: HeroBannerProps) => (
	<HeroBannerContainer variant={variant}>
		{image ? <HeroBannerMobileImage>{image}</HeroBannerMobileImage> : null}
		<HeroBannerContent variant={variant} image={image}>
			{children}
		</HeroBannerContent>
	</HeroBannerContainer>
);
