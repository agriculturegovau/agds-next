import { ReactNode } from 'react';
import { tokens } from '@ag.ds-next/core';
import { Heading } from '@ag.ds-next/heading';
import { Text } from '@ag.ds-next/text';

export type HeroCategoryBannerTitleProps = { children: ReactNode };

export const HeroCategoryBannerTitle = ({
	children,
}: HeroCategoryBannerTitleProps) => (
	<Heading type="h1" fontSize="xxl">
		{children}
	</Heading>
);

export type HeroCategoryBannerSubTitleProps = { children: ReactNode };

export const HeroCategoryBannerSubtitle = ({
	children,
}: HeroCategoryBannerSubTitleProps) => (
	<Text as="p" fontSize="md" maxWidth={tokens.maxWidth.bodyText}>
		{children}
	</Text>
);
