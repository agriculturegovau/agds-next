import { PropsWithChildren } from 'react';
import { Box } from '@ag.ds-next/box';
import { SectionBannerVariant, variantMap } from './utils';

export type SectionBannerContainerProps = PropsWithChildren<{
	variant: SectionBannerVariant;
}>;

export const SectionBannerContainer = ({
	children,
	variant,
}: SectionBannerContainerProps) => {
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
