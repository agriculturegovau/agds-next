import { PropsWithChildren, ReactNode } from 'react';
import { HeroBannerVariant } from '../utils';
import { HeroCategoryBannerContent } from './HeroCategoryBannerContent';
import { HeroCategoryBannerMobileImage } from './HeroCategoryBannerMobileImage';
import { HeroCategoryBannerContainer } from './HeroCategoryBannerContainer';

export type HeroCategoryBannerProps = PropsWithChildren<{
	/** The hero image */
	image?: ReactNode;
	/** The palette of the component */
	variant?: HeroBannerVariant;
}>;

export const HeroCategoryBanner = ({
	children,
	image,
	variant = 'lightAlt',
}: HeroCategoryBannerProps) => (
	<HeroCategoryBannerContainer variant={variant}>
		{image ? (
			<HeroCategoryBannerMobileImage>{image}</HeroCategoryBannerMobileImage>
		) : null}
		<HeroCategoryBannerContent variant={variant} image={image}>
			{children}
		</HeroCategoryBannerContent>
	</HeroCategoryBannerContainer>
);
