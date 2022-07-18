import { PropsWithChildren, ReactNode } from 'react';
import { HeroBannerBackground } from '../utils';
import { HeroCategoryBannerContent } from './HeroCategoryBannerContent';
import { HeroCategoryBannerMobileImage } from './HeroCategoryBannerMobileImage';
import { HeroCategoryBannerContainer } from './HeroCategoryBannerContainer';

export type HeroCategoryBannerProps = PropsWithChildren<{
	/** The hero image */
	image?: ReactNode;
	/** The background of the component */
	background?: HeroBannerBackground;
}>;

export const HeroCategoryBanner = ({
	children,
	image,
	background = 'bodyAlt',
}: HeroCategoryBannerProps) => (
	<HeroCategoryBannerContainer background={background}>
		{image ? (
			<HeroCategoryBannerMobileImage>{image}</HeroCategoryBannerMobileImage>
		) : null}
		<HeroCategoryBannerContent background={background} image={image}>
			{children}
		</HeroCategoryBannerContent>
	</HeroCategoryBannerContainer>
);
