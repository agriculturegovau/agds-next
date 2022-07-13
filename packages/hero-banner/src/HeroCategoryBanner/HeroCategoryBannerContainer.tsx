import { PropsWithChildren } from 'react';
import { Box } from '@ag.ds-next/box';
import { HeroBannerBackground } from '../utils';

export type HeroCategoryBannerContainerProps = PropsWithChildren<{
	background: HeroBannerBackground;
}>;

export const HeroCategoryBannerContainer = ({
	children,
	background,
}: HeroCategoryBannerContainerProps) => {
	return (
		<Box
			as="section"
			background={background}
			css={{ position: 'relative', overflow: 'hidden' }}
		>
			{children}
		</Box>
	);
};
