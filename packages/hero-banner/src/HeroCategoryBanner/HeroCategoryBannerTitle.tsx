import { ReactNode } from 'react';
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

export const HeroCategoryBannerSubTitle = ({
	children,
}: HeroCategoryBannerSubTitleProps) => (
	<Text as="p" fontSize="md">
		{children}
	</Text>
);
