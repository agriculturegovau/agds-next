import { ReactNode } from 'react';
import { tokens } from '../../../core/src';
import { Heading } from '../../../heading/src';
import { Text } from '../../../text/src';

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
