import { PropsWithChildren, ReactNode } from 'react';
import {
	SectionBannerSubTitle,
	SectionBannerTitle,
	SectionBannerTitleContainer,
} from './SectionBannerTitle';
import { SectionBannerContent } from './SectionBannerContent';
import { SectionBannerMobileImage } from './SectionBannerMobileImage';
import { SectionBannerContainer } from './SectionBannerContainer';
import { SectionBannerVariant } from './utils';

export type SectionBannerProps = PropsWithChildren<{
	/** The hero image */
	image?: ReactNode;
	/** The palette of the component */
	variant?: SectionBannerVariant;
}>;

export const SectionBanner = ({
	children,
	image,
	variant = 'lightAlt',
}: SectionBannerProps) => (
	<SectionBannerContainer variant={variant}>
		{image ? (
			<SectionBannerMobileImage>{image}</SectionBannerMobileImage>
		) : null}
		<SectionBannerContent variant={variant} image={image}>
			{children}
		</SectionBannerContent>
	</SectionBannerContainer>
);
