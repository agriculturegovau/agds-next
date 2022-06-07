import { PropsWithChildren } from 'react';
import { HeroBannerVariant } from '../utils';
import { HeroSubcategoryBannerContainer } from './HeroSubcategoryBannerContainer';
import { HeroSubcategoryBannerContent } from './HeroSubcategoryBannerContent';

export type HeroSubcategoryBannerProps = PropsWithChildren<{
	/** The palette of the component */
	variant?: HeroBannerVariant;
}>;

export const HeroSubcategoryBanner = ({
	children,
	variant = 'lightAlt',
}: HeroSubcategoryBannerProps) => (
	<HeroSubcategoryBannerContainer variant={variant}>
		<HeroSubcategoryBannerContent>{children}</HeroSubcategoryBannerContent>
	</HeroSubcategoryBannerContainer>
);
