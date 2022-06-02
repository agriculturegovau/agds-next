import { PropsWithChildren } from 'react';
import { Box } from '@ag.ds-next/box';
import { CategoryBannerVariant, variantMap } from './utils';

export type CategoryBannerContainerProps = PropsWithChildren<{
	variant: CategoryBannerVariant;
}>;

export const CategoryBannerContainer = ({
	children,
	variant,
}: CategoryBannerContainerProps) => {
	const { palette, background } = variantMap[variant];
	return (
		<Box as="section" palette={palette} background={background}>
			{children}
		</Box>
	);
};
