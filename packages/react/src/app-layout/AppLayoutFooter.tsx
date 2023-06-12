import { PropsWithChildren } from 'react';
import { Stack } from '../stack';
import { Content } from '../content';
import { boxPalette } from '../core';

export type AppLayoutFooterProps = PropsWithChildren<{
	/** Defines an identifier (ID) which must be unique. */
	id?: string;
}>;

export function AppLayoutFooter({ children, id }: AppLayoutFooterProps) {
	return (
		<footer css={{ marginTop: 'auto' }} id={id}>
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
				borderColor: boxPalette.borderMuted,
				width: '100%',
			}}
		/>
	);
}
