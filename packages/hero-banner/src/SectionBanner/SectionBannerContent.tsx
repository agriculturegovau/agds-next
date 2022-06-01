import { PropsWithChildren, ReactNode } from 'react';
import { Flex, Stack } from '@ag.ds-next/box';
import { Content } from '@ag.ds-next/content';
import { SectionBannerImage } from './SectionBannerImage';
import { SectionBannerVariant } from './utils';

export type SectionBannerContentProps = PropsWithChildren<{
	image?: ReactNode;
	variant: SectionBannerVariant;
}>;

export const SectionBannerContent = ({
	children,
	image,
	variant,
}: SectionBannerContentProps) => {
	return (
		<Content>
			<Flex>
				<Stack
					gap={1}
					width={['100%', '100%', image ? '60%' : '100%']}
					paddingY={{ xs: 2, md: 3 }}
					css={{ zIndex: 1 }}
				>
					{children}
				</Stack>
				{image ? (
					<SectionBannerImage variant={variant}>{image}</SectionBannerImage>
				) : null}
			</Flex>
		</Content>
	);
};
