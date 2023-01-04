import { PropsWithChildren } from 'react';
import { HeroBannerBackground } from '../utils';
import { HeroSubcategoryBannerContainer } from './HeroSubcategoryBannerContainer';
import { HeroSubcategoryBannerContent } from './HeroSubcategoryBannerContent';

export type HeroSubcategoryBannerProps = PropsWithChildren<{
	/** The background of the component */
	background?: HeroBannerBackground;
}>;

export const HeroSubcategoryBanner = ({
	children,
	background = 'bodyAlt',
}: HeroSubcategoryBannerProps) => (
	<HeroSubcategoryBannerContainer background={background}>
		<HeroSubcategoryBannerContent>{children}</HeroSubcategoryBannerContent>
	</HeroSubcategoryBannerContainer>
);
