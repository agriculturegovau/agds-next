import { PropsWithChildren, ReactNode } from 'react';
import {
	HeroBannerSubtitle,
	HeroBannerTitle,
	HeroBannerTitleContainer,
} from './HeroBannerTitle';
import { HeroBannerContent } from './HeroBannerContent';
import { HeroBannerMobileImage } from './HeroBannerMobileImage';
import { HeroBannerContainer } from './HeroBannerContainer';
import { HeroBannerVariant } from '../utils';

export type HeroBannerProps = PropsWithChildren<{
	/** The hero image */
	image?: ReactNode;
	/** The palette of the component */
	variant?: HeroBannerVariant;
	/** The primary title */
	title?: string;
	/** The secondary title */
	subTitle?: string;
}>;

export const HeroBanner = ({
	image,
	variant = 'lightAlt',
	children,
	title,
	subTitle,
}: HeroBannerProps) => (
	<HeroBannerContainer variant={variant}>
		{image ? <HeroBannerMobileImage>{image}</HeroBannerMobileImage> : null}
		<HeroBannerContent variant={variant} image={image}>
			{title || subTitle ? (
				<HeroBannerTitleContainer>
					<HeroBannerTitle>{title}</HeroBannerTitle>
					<HeroBannerSubtitle>{subTitle}</HeroBannerSubtitle>
				</HeroBannerTitleContainer>
			) : null}
			{children}
		</HeroBannerContent>
	</HeroBannerContainer>
);
