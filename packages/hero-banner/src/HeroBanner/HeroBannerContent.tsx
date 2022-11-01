import { PropsWithChildren, ReactNode } from 'react';
import { Flex, Stack } from '@ag.ds-next/box';
import { Content } from '@ag.ds-next/content';
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
					gap={2}
					width={['100%', '100%', image ? '60%' : '100%']}
					paddingTop={{ xs: 2, md: 4 }}
					paddingBottom={{ xs: 3, md: 4 }}
					css={{ zIndex: 1 }}
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
