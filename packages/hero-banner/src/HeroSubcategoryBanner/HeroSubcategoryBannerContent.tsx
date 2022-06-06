import { ReactNode } from 'react';
import { Stack } from '@ag.ds-next/box';
import { Content } from '@ag.ds-next/content';

export type HeroSubcategoryBannerContentProps = { children: ReactNode };

export const HeroSubcategoryBannerContent = ({
	children,
}: HeroSubcategoryBannerContentProps) => {
	return (
		<Content>
			<Stack
				gap={1.5}
				paddingTop={{ xs: 2, md: 3 }}
				paddingBottom={{ xs: 3, md: 3 }}
			>
				{children}
			</Stack>
		</Content>
	);
};
