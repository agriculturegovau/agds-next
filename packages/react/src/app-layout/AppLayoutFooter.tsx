import { PropsWithChildren } from 'react';
import { Stack } from '../box';
import { Content } from '../content';
import { boxPalette } from '../core';

export type AppLayoutFooterProps = PropsWithChildren<{}>;

export function AppLayoutFooter({ children }: AppLayoutFooterProps) {
	return (
		<footer css={{ marginTop: 'auto' }}>
			<Content>
				<Stack
					paddingY={3}
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

export function AppLayoutFooterDivider() {
	return (
		<hr
			aria-hidden="true"
			css={{
				boxSizing: 'content-box',
				height: 0,
				margin: 0,
				overflow: 'visible',
				border: 'none',
				borderTopWidth: 1,
				borderTopStyle: 'solid',
				borderColor: boxPalette.border,
				width: '100%',
			}}
		/>
	);
}
