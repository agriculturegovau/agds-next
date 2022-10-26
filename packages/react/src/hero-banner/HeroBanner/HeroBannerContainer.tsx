import { PropsWithChildren } from 'react';
import { Box } from '../../box';
import { HeroBannerBackground } from '../../utils';

export type HeroBannerContainerProps = PropsWithChildren<{
	background: HeroBannerBackground;
}>;

export const HeroBannerContainer = ({
	children,
	background,
}: HeroBannerContainerProps) => {
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
