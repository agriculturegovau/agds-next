import { PropsWithChildren, ReactNode } from 'react';
import { Flex, Stack } from '@ag.ds-next/box';
import { Content } from '@ag.ds-next/content';
import { HeroBannerVariant } from './utils';
import { HeroBannerImage } from './HeroBannerMobileImage';

export type HeroBannerContentProps = PropsWithChildren<{
	image?: ReactNode;
	variant: HeroBannerVariant;
}>;

export const HeroBannerContent = ({
	children,
	image,
	variant,
}: HeroBannerContentProps) => {
	return (
		<Content as="div" spacing="sm">
			<Flex>
				<Stack
					gap={[1.5, 2]}
					width={['100%', '50%']}
					paddingY={{ xs: 1, lg: 2 }}
					css={{ zIndex: 1 }}
				>
					{children}
				</Stack>
				{image ? (
					<HeroBannerImage variant={variant}>{image}</HeroBannerImage>
				) : null}
			</Flex>
		</Content>
	);
};
