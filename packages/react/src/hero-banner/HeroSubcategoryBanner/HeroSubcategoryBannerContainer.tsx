import { PropsWithChildren } from 'react';
import { Box } from '../../box';

export type HeroSubcategoryBannerContainerProps = PropsWithChildren<{}>;

export const HeroSubcategoryBannerContainer = ({
	children,
}: HeroSubcategoryBannerContainerProps) => {
	return (
		<Box as="section" background="contextAlt">
			{children}
		</Box>
	);
};
