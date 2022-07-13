import { PropsWithChildren } from 'react';
import { Box } from '@ag.ds-next/box';
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
