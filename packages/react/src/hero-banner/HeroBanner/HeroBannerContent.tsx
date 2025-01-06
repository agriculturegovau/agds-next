import { PropsWithChildren, ReactNode } from 'react';
import { tokens } from '../../core';
import { Flex } from '../../flex';
import { Stack } from '../../stack';
import { Content } from '../../content';
import { HeroBannerBackground } from '../utils';
import { HeroBannerImage } from './HeroBannerImage';

export type HeroBannerContentProps = PropsWithChildren<{
	image?: ReactNode;
	background: HeroBannerBackground;
}>;

export const HeroBannerContent = ({
	children,
	image,
	background,
}: HeroBannerContentProps) => {
	return (
		<Content>
			<Flex>
				<Stack
					css={{ zIndex: tokens.zIndex.elevated }}
					gap={2}
					paddingBottom={{ xs: 3, md: 4 }}
					paddingTop={{ xs: 2, md: 4 }}
					width={['100%', '100%', image ? '60%' : '100%']}
				>
					{children}
				</Stack>
				{image ? (
					<HeroBannerImage background={background}>{image}</HeroBannerImage>
				) : null}
			</Flex>
		</Content>
	);
};
