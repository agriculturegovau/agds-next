import { PropsWithChildren } from 'react';
import { Flex } from '../flex';

export type AppLayoutContentProps = PropsWithChildren<{}>;

export function AppLayoutContent({ children }: AppLayoutContentProps) {
	return (
		<Flex flexDirection="column" css={{ overflow: 'hidden' }}>
			{children}
		</Flex>
	);
}
