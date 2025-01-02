import { PropsWithChildren, ReactNode } from 'react';
import { tokens } from '../../core';
import { Flex } from '../../flex';
import { Stack } from '../../stack';
import { Content } from '../../content';
import { HeroBannerBackground } from '../utils';
import { HeroCategoryBannerImage } from './HeroCategoryBannerImage';

export type HeroCategoryBannerContentProps = PropsWithChildren<{
	image?: ReactNode;
	background: HeroBannerBackground;
}>;

export const HeroCategoryBannerContent = ({
	children,
	image,
	background,
}: HeroCategoryBannerContentProps) => {
	return (
		<Content>
			<Flex>
				<Stack
					css={{ zIndex: tokens.zIndex.elevated }}
					gap={1.5}
					paddingBottom={{ xs: 3, md: 4 }}
					paddingTop={{ xs: 2, md: 4 }}
					width={['100%', '100%', image ? '60%' : '100%']}
				>
					{children}
				</Stack>
				{image ? (
					<HeroCategoryBannerImage background={background}>
						{image}
					</HeroCategoryBannerImage>
				) : null}
			</Flex>
		</Content>
	);
};
