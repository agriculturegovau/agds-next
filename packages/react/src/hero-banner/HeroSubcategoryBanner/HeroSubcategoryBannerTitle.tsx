import { ReactNode } from 'react';
import { Heading } from '../../heading';

export type HeroSubcategoryBannerTitleProps = { children: ReactNode };

export const HeroSubcategoryBannerTitle = ({
	children,
}: HeroSubcategoryBannerTitleProps) => (
	<Heading fontSize="xxl" type="h1">
		{children}
	</Heading>
);
