import { PropsWithChildren } from 'react';
import { HeroSubcategoryBannerContainer } from './HeroSubcategoryBannerContainer';
import { HeroSubcategoryBannerContent } from './HeroSubcategoryBannerContent';

export type HeroSubcategoryBannerProps = PropsWithChildren<{}>;

export const HeroSubcategoryBanner = ({
	children,
}: HeroSubcategoryBannerProps) => (
	<HeroSubcategoryBannerContainer>
		<HeroSubcategoryBannerContent>{children}</HeroSubcategoryBannerContent>
	</HeroSubcategoryBannerContainer>
);
