import { ReactNode } from 'react';
import { Heading } from '@ag.ds-next/heading';

export type CategoryBannerTitleProps = { children: ReactNode };

export const CategoryBannerTitle = ({ children }: CategoryBannerTitleProps) => (
	<Heading type="h1" fontSize="xxl">
		{children}
	</Heading>
);
