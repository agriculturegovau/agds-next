import { ElementType, PropsWithChildren } from 'react';
import { Flex } from '@ag.ds-next/box';
import { CalloutTitle } from './CalloutTitle';

export type CalloutProps = PropsWithChildren<{
	as?: ElementType;
	title?: string;
}>;

export const Callout = ({ as, children, title }: CalloutProps) => (
	<Flex
		as={as}
		flexDirection="column"
		gap={1}
		background="shade"
		padding={1.5}
		borderLeft
		borderLeftWidth="xl"
	>
		{title ? <CalloutTitle>{title}</CalloutTitle> : null}
		{children}
	</Flex>
);
