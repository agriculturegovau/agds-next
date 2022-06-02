import { PropsWithChildren } from 'react';
import { HeroSubcategoryBannerContainer } from './HeroSubcategoryBannerContainer';
import { HeroSubcategoryBannerContent } from './HeroSubcategoryBannerContent';
import { HeroBannerVariant } from '../utils';

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
