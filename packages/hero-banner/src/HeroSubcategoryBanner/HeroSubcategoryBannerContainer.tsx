import { PropsWithChildren } from 'react';
import { Box } from '@ag.ds-next/box';
import { HeroSubcategoryBannerVariant, variantMap } from './utils';

export type HeroSubcategoryBannerContainerProps = PropsWithChildren<{
	variant: HeroSubcategoryBannerVariant;
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
