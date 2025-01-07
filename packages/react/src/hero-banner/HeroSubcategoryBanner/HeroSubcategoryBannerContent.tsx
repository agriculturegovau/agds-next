import { ReactNode } from 'react';
import { Stack } from '../../stack';
import { Content } from '../../content';

export type HeroSubcategoryBannerContentProps = { children: ReactNode };

export const HeroSubcategoryBannerContent = ({
	children,
}: HeroSubcategoryBannerContentProps) => {
	return (
		<Content>
			<Stack
				gap={1.5}
				paddingBottom={{ xs: 3, md: 3 }}
				paddingTop={{ xs: 2, md: 3 }}
			>
				{children}
			</Stack>
		</Content>
	);
};
