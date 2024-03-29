import { ReactNode } from 'react';
import { Heading } from '../../heading';

export type HeroSubcategoryBannerTitleProps = { children: ReactNode };

export const HeroSubcategoryBannerTitle = ({
	children,
}: HeroSubcategoryBannerTitleProps) => (
	<Heading type="h1" fontSize="xxl">
		{children}
	</Heading>
);
