import { PropsWithChildren } from 'react';
import { Box } from '../../box';
import { HeroBannerBackground } from '../utils';

export type HeroSubcategoryBannerContainerProps = PropsWithChildren<{
	background: HeroBannerBackground;
}>;

export const HeroSubcategoryBannerContainer = ({
	children,
	background,
}: HeroSubcategoryBannerContainerProps) => {
	return (
		<Box as="section" background={background}>
			{children}
		</Box>
	);
};
