import { PropsWithChildren, ReactNode } from 'react';
import { Flex, Stack } from '@ag.ds-next/box';
import { Content } from '@ag.ds-next/content';
import { HeroBannerImage } from './HeroBannerImage';
import { HeroBannerVariant } from './utils';

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
		<Content as="div">
			<Flex>
				<Stack
					gap={[1.5, 2]}
					width={['100%', '100%', image ? '60%' : '100%']}
					paddingY={{ xs: 1, sm: 0, md: 1, lg: 0 }}
					css={{ zIndex: 1 }}
					alignItems="flex-start"
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
