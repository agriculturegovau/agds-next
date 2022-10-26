import { ReactNode } from 'react';
import { Stack } from '../../../box/src';
import { tokens } from '../../../core/src';
import { Heading } from '../../../heading/src';
import { Text } from '../../../text/src';

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
	<Text as="p" fontSize="md" maxWidth={tokens.maxWidth.bodyText}>
		{children}
	</Text>
);
