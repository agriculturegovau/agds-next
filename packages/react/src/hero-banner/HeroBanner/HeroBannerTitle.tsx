import { ReactNode } from 'react';
import { Stack } from '../../stack';
import { Heading } from '../../heading';
import { Text } from '../../text';

export type HeroBannerTitleContainerProps = { children: ReactNode };

export const HeroBannerTitleContainer = ({
	children,
}: HeroBannerTitleContainerProps) => <Stack gap={1.5}>{children}</Stack>;

export type HeroBannerTitleProps = { children: ReactNode };

export const HeroBannerTitle = ({ children }: HeroBannerTitleProps) => (
	<Heading type="h1" fontSize="xxxl">
		{children}
	</Heading>
);

export type HeroBannerSubTitleProps = { children: ReactNode };

export const HeroBannerSubtitle = ({ children }: HeroBannerSubTitleProps) => (
	<Text as="p" fontSize="md">
		{children}
	</Text>
);
