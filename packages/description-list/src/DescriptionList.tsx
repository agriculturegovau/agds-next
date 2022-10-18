import { ReactNode } from 'react';
import { Flex } from '@ag.ds-next/box';

export type DescriptionListProps = {};

type PropsWithOnlyChildren = {
	children: ReactNode;
};

export const Term = ({ children }: PropsWithOnlyChildren) => (
	<Flex as="dt" fontWeight="bold" width={['100%', '30%']}>
		{children}
	</Flex>
);

export const Description = ({ children }: PropsWithOnlyChildren) => (
	<Flex as="dd" flexGrow={1}>
		{children}
	</Flex>
);

export const Action = ({ children }: PropsWithOnlyChildren) => (
	<Flex as="dd">{children}</Flex>
);

export const DescriptionList = ({ children }: PropsWithOnlyChildren) => (
	<Flex
		as="dl"
		width="100%"
		borderTop
		borderColor="muted"
		flexDirection="column"
	>
		{children}
	</Flex>
);

export const DescriptionListItem = ({ children }: PropsWithOnlyChildren) => (
	<Flex
		borderBottom
		borderColor="muted"
		flexDirection={['column', 'row']}
		gap={0.5}
		paddingY={0.75}
	>
		{children}
	</Flex>
);
