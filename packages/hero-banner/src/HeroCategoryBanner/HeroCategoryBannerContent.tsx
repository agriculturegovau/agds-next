import { PropsWithChildren, ReactNode } from 'react';
import { Flex, Stack } from '@ag.ds-next/box';
import { Content } from '@ag.ds-next/content';
import { HeroCategoryBannerImage } from './HeroCategoryBannerImage';
import { HeroBannerVariant } from '../utils';

export type HeroCategoryBannerContentProps = PropsWithChildren<{
	image?: ReactNode;
	variant: HeroBannerVariant;
}>;

export const HeroCategoryBannerContent = ({
	children,
	image,
	variant,
}: HeroCategoryBannerContentProps) => {
	return (
		<Content>
			<Flex>
				<Stack
					gap={1.5}
					width={['100%', '100%', image ? '60%' : '100%']}
					paddingTop={{ xs: 2, md: 4 }}
					paddingBottom={{ xs: 3, md: 4 }}
					css={{ zIndex: 1 }}
				>
					{children}
				</Stack>
				{image ? (
					<HeroCategoryBannerImage variant={variant}>
						{image}
					</HeroCategoryBannerImage>
				) : null}
			</Flex>
		</Content>
	);
};
