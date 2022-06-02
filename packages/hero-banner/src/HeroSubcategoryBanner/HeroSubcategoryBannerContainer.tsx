import { PropsWithChildren } from 'react';
import { Box } from '@ag.ds-next/box';
import { HeroBannerVariant, variantMap } from '../utils';

export type HeroSubcategoryBannerContainerProps = PropsWithChildren<{
	variant: HeroBannerVariant;
}>;

export const HeroSubcategoryBannerContainer = ({
	children,
	variant,
}: HeroSubcategoryBannerContainerProps) => {
	const { palette, background } = variantMap[variant];
	return (
		<Box as="section" palette={palette} background={background}>
			{children}
		</Box>
	);
};
