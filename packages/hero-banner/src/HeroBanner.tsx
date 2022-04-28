import { PropsWithChildren, ReactNode } from 'react';
import { HeroBannerBackground } from './HeroBannerBackground';
import {
	HeroBannerSubTitle,
	HeroBannerTitle,
	HeroBannerTitleContainer,
} from './HeroBannerTitle';
import { HeroBannerContent } from './HeroBannerContent';
import { HeroBannerMobileImage } from './HeroBannerMobileImage';
import { HeroBannerContainer } from './HeroBannerContainer';
import { HeroBannerVariant } from './utils';

export type HeroBannerProps = PropsWithChildren<{
	/** The image to display as part of the gradient background */
	backgroundImageSrc?: string;
	/** The image to display on smaller breakpoints */
	mobileImage?: ReactNode;
	/** The palette of the component */
	variant?: HeroBannerVariant;
	/** The primary title */
	title?: string;
	/** The secondary title */
	subTitle?: string;
}>;

export const HeroBanner = ({
	backgroundImageSrc,
	mobileImage,
	variant = 'lightAlt',
	children,
	title,
	subTitle,
}: HeroBannerProps) => (
	<HeroBannerContainer variant={variant}>
		{mobileImage ? (
			<HeroBannerMobileImage>{mobileImage}</HeroBannerMobileImage>
		) : null}
		<HeroBannerBackground
			backgroundImageSrc={backgroundImageSrc}
			variant={variant}
		>
			<HeroBannerContent>
				{title || subTitle ? (
					<HeroBannerTitleContainer>
						<HeroBannerTitle>{title}</HeroBannerTitle>
						<HeroBannerSubTitle>{subTitle}</HeroBannerSubTitle>
					</HeroBannerTitleContainer>
				) : null}
				{children}
			</HeroBannerContent>
		</HeroBannerBackground>
	</HeroBannerContainer>
);
