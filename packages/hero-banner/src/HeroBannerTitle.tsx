import { ReactNode } from 'react';
import { Stack } from '@ag.ds-next/box';
import { Heading } from '@ag.ds-next/heading';
import { Text } from '@ag.ds-next/text';

export type HeroBannerTitleContainerProps = { children: ReactNode };

export const HeroBannerTitleContainer = ({
	children,
}: HeroBannerTitleContainerProps) => <Stack gap={[0.5, 1]}>{children}</Stack>;

export type HeroBannerTitleProps = { children: ReactNode };

export const HeroBannerTitle = ({ children }: HeroBannerTitleProps) => (
	<Heading type="h1" fontSize="xxxl">
		{children}
	</Heading>
);

export type HeroBannerSubTitleProps = { children: ReactNode };

export const HeroBannerSubTitle = ({ children }: HeroBannerSubTitleProps) => (
	<Text as="p" fontSize="md">
		{children}
	</Text>
);
