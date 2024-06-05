import { PropsWithChildren } from 'react';
import { Flex } from '../flex';

export type AppLayoutContentProps = PropsWithChildren<{}>;

export function AppLayoutContent({ children }: AppLayoutContentProps) {
	return (
		<Flex
			flexDirection="column"
			// `min-width: 0` Fixes wide elements (like large tables) not respecting the width of their container
			// https://css-tricks.com/flexbox-truncated-text/#aa-the-solution-is-min-width-0-on-the-flex-child
			css={{ minWidth: 0 }}
		>
			{children}
		</Flex>
	);
}
