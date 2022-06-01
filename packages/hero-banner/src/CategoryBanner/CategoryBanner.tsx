import { PropsWithChildren } from 'react';
import { CategoryBannerContainer } from './CategoryBannerContainer';
import { CategoryBannerContent } from './CategoryBannerContent';
import { CategoryBannerVariant } from './utils';

export type CategoryBannerProps = PropsWithChildren<{
	/** The palette of the component */
	variant?: CategoryBannerVariant;
}>;

export const CategoryBanner = ({
	children,
	variant = 'lightAlt',
}: CategoryBannerProps) => (
	<CategoryBannerContainer variant={variant}>
		<CategoryBannerContent>{children}</CategoryBannerContent>
	</CategoryBannerContainer>
);
