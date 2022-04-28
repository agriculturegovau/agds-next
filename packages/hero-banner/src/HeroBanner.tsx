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
	backgroundImageSrc?: string;
	mobileImage?: ReactNode;
	variant?: HeroBannerVariant;
	title?: string;
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
