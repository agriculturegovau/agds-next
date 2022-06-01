import { PropsWithChildren } from 'react';
import { Box } from '@ag.ds-next/box';
import { HeroBannerVariant, variantMap } from './utils';

export type HeroBannerContainerProps = PropsWithChildren<{
	variant: HeroBannerVariant;
}>;

export const HeroBannerContainer = ({
	children,
	variant,
}: HeroBannerContainerProps) => {
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
