import { PropsWithChildren } from 'react';
import { Box, Stack } from '../box';
import { tokens } from '../core';
import { Content } from '../content';
import { FooterDivider } from '../footer';

export type AppLayoutFooterProps = PropsWithChildren<{}>;

export function AppLayoutFooter({ children }: AppLayoutFooterProps) {
	return (
		<footer css={{ marginTop: 'auto' }}>
			<Content>
				<Stack
					paddingY={3}
					maxWidth={tokens.maxWidth.container}
					width="100%"
					gap={1.5}
					borderTop
					borderTopWidth="xl"
					borderColor="muted"
				>
					{children}
				</Stack>
			</Content>
		</footer>
	);
}

export type AppLayoutFooterLogoProps = PropsWithChildren<{}>;

export function AppLayoutFooterLogo({ children }: AppLayoutFooterLogoProps) {
	return (
		<Box width={230} display={{ xs: 'block', md: 'none' }}>
			{children}
		</Box>
	);
}

export function AppLayoutFooterDivider() {
	return <FooterDivider />;
}
