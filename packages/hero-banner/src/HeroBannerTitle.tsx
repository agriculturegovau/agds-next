import { ReactNode } from 'react';
import { Stack } from '@ag.ds-next/box';
import { tokens } from '@ag.ds-next/core';
import { Heading } from '@ag.ds-next/heading';
import { Text } from '@ag.ds-next/text';

export type HeroBannerTitleContainerProps = { children: ReactNode };

export const HeroBannerTitleContainer = ({
	children,
}: HeroBannerTitleContainerProps) => (
	<Stack gap={[0.5, 1]} maxWidth={tokens.maxWidth.bodyText}>
		{children}
	</Stack>
);

export type HeroBannerTitleProps = { children: ReactNode };

export const HeroBannerTitle = ({ children }: HeroBannerTitleProps) => (
	<Heading type="h1" fontSize="xxxl">
		{children}
	</Heading>
);

export type HeroBannerSubTitleProps = { children: ReactNode };

export const HeroBannerSubTitle = ({ children }: HeroBannerSubTitleProps) => (
	<Text as="p" fontSize="md" maxWidth={tokens.maxWidth.bodyText}>
		{children}
	</Text>
);
