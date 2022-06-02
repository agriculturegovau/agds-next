import { PropsWithChildren } from 'react';
import { Box } from '@ag.ds-next/box';
import { HeroBannerVariant, variantMap } from '../utils';

export type HeroCategoryBannerContainerProps = PropsWithChildren<{
	variant: HeroBannerVariant;
}>;

export const HeroCategoryBannerContainer = ({
	children,
	variant,
}: HeroCategoryBannerContainerProps) => {
	const { palette, background } = variantMap[variant];
	return (
		<Box
			as="section"
			palette={palette}
			background={background}
			css={{ position: 'relative', overflow: 'hidden' }}
		>
			{children}
		</Box>
	);
};
