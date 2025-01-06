import { PropsWithChildren } from 'react';
import { Box } from '../box';
import { Content } from '../content';
import { boxPalette, type BoxPalette, type ResponsiveProp } from '../core';
import { Stack } from '../stack';

export type AppLayoutFooterProps = PropsWithChildren<{
	background?: 'body' | 'bodyAlt';
	/** Defines an identifier (ID) which must be unique. */
	id?: string;
	/** The maximum width of the container. */
	maxWidth?: 'container' | 'containerXL';
	palette?: ResponsiveProp<BoxPalette>;
}>;

export function AppLayoutFooter({
	background = 'body',
	children,
	id,
	maxWidth,
	palette,
}: AppLayoutFooterProps) {
	return (
		<Box
			as="footer"
			background={background}
			css={{ marginTop: 'auto' }}
			id={id}
			palette={palette}
		>
			<Content maxWidth={maxWidth}>
				<Stack
					borderColor="muted"
					borderTop
					borderTopWidth="xl"
					gap={1.5}
					paddingY={3}
					width="100%"
				>
					{children}
				</Stack>
			</Content>
		</Box>
	);
}

export function AppLayoutFooterDivider() {
	return (
		<hr
			aria-hidden
			css={{
				boxSizing: 'content-box',
				height: 0,
				margin: 0,
				overflow: 'visible',
				border: 'none',
				borderTopWidth: 1,
				borderTopStyle: 'solid',
				borderColor: boxPalette.borderMuted,
				width: '100%',
			}}
		/>
	);
}
