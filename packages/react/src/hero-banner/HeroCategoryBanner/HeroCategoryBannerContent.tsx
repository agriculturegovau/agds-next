import { PropsWithChildren, ReactNode } from 'react';
import { tokens } from '../../core';
import { Flex } from '../../flex';
import { Stack } from '../../stack';
import { Content } from '../../content';
import { HeroCategoryBannerImage } from './HeroCategoryBannerImage';

export type HeroCategoryBannerContentProps = PropsWithChildren<{
	image?: ReactNode;
}>;

export const HeroCategoryBannerContent = ({
	children,
	image,
}: HeroCategoryBannerContentProps) => {
	return (
		<Content>
			<Flex>
				<Stack
					gap={1.5}
					width={['100%', '100%', image ? '60%' : '100%']}
					paddingTop={{ xs: 2, md: 4 }}
					paddingBottom={{ xs: 3, md: 4 }}
					css={{ zIndex: tokens.zIndex.elevated }}
				>
					{children}
				</Stack>
				{image ? (
					<HeroCategoryBannerImage>{image}</HeroCategoryBannerImage>
				) : null}
			</Flex>
		</Content>
	);
};
