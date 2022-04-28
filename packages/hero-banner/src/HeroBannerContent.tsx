import { ReactNode } from 'react';
import { Box, Stack } from '@ag.ds-next/box';
import { Content } from '@ag.ds-next/content';
import { tokens } from '@ag.ds-next/core';

export type HeroBannerContentProps = { children: ReactNode };

export const HeroBannerContent = ({ children }: HeroBannerContentProps) => (
	<Content as="div" spacing="sm">
		<Box
			width="100%"
			maxWidth={[null, '66%', '66%', tokens.maxWidth.bodyText]}
			padding={{ xs: 1, lg: 2 }}
		>
			<Stack gap={[1.5, 2]}>{children}</Stack>
		</Box>
	</Content>
);
