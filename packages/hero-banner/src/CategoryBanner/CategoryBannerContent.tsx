import { ReactNode } from 'react';
import { Stack } from '@ag.ds-next/box';
import { Content } from '@ag.ds-next/content';

export type CategoryBannerContentProps = { children: ReactNode };

export const CategoryBannerContent = ({
	children,
}: CategoryBannerContentProps) => {
	return (
		<Content>
			<Stack gap={1} paddingY={2}>
				{children}
			</Stack>
		</Content>
	);
};
