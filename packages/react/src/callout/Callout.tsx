import { ElementType, PropsWithChildren } from 'react';
import { Flex } from '../flex';
import { CalloutTitle } from './CalloutTitle';

export type CalloutProps = PropsWithChildren<{
	as?: ElementType;
	/** @deprecated This prop is no longer used and will be removed in the next major version. */
	background?: 'shade' | 'shadeAlt';
	/** Title will appear in bold */
	title?: string;
}>;

export const Callout = ({ as, children, title }: CalloutProps) => (
	<Flex
		as={as}
		flexDirection="column"
		gap={1}
		background="contextShade"
		padding={1.5}
		borderLeft
		borderLeftWidth="xl"
		highContrastOutline
	>
		{title ? <CalloutTitle>{title}</CalloutTitle> : null}
		{children}
	</Flex>
);
