import { PropsWithChildren, ReactNode } from 'react';
import { Flex, Stack } from '@ag.ds-next/box';
import { tokens } from '@ag.ds-next/core';
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
		<Content as="div" spacing="sm">
			<Flex>
				<Stack
					gap={[1.5, 2]}
					width={['100%', '100%', image ? '60%' : '100%']}
					maxWidth={image ? undefined : tokens.maxWidth.bodyText}
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
