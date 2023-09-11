import { PropsWithChildren, ReactNode } from 'react';
import { HeroCategoryBannerContent } from './HeroCategoryBannerContent';
import { HeroCategoryBannerMobileImage } from './HeroCategoryBannerMobileImage';
import { HeroCategoryBannerContainer } from './HeroCategoryBannerContainer';

export type HeroCategoryBannerProps = PropsWithChildren<{
	/** The hero image */
	image?: ReactNode;
}>;

export const HeroCategoryBanner = ({
	children,
	image,
}: HeroCategoryBannerProps) => (
	<HeroCategoryBannerContainer>
		{image ? (
			<HeroCategoryBannerMobileImage>{image}</HeroCategoryBannerMobileImage>
		) : null}
		<HeroCategoryBannerContent image={image}>
			{children}
		</HeroCategoryBannerContent>
	</HeroCategoryBannerContainer>
);
