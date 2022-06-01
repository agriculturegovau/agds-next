import { ReactNode } from 'react';
import { Heading } from '@ag.ds-next/heading';
import { Text } from '@ag.ds-next/text';

export type SectionBannerTitleProps = { children: ReactNode };

export const SectionBannerTitle = ({ children }: SectionBannerTitleProps) => (
	<Heading type="h1" fontSize="xxl">
		{children}
	</Heading>
);

export type SectionBannerSubTitleProps = { children: ReactNode };

export const SectionBannerSubTitle = ({
	children,
}: SectionBannerSubTitleProps) => (
	<Text as="p" fontSize="md">
		{children}
	</Text>
);
