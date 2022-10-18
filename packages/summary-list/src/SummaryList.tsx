import { ReactNode } from 'react';
import { Flex } from '@ag.ds-next/box';

type PropsWithOnlyChildren = {
	children: ReactNode;
};

export type SummaryListProps = PropsWithOnlyChildren;

export const SummaryListItemTerm = ({ children }: PropsWithOnlyChildren) => (
	<Flex as="dt" fontWeight="bold" width={['100%', '30%']}>
		{children}
	</Flex>
);

export const SummaryListItemDescription = ({
	children,
}: PropsWithOnlyChildren) => (
	<Flex as="dd" flexGrow={1}>
		{children}
	</Flex>
);

export const SummaryListItemAction = ({ children }: PropsWithOnlyChildren) => (
	<Flex as="dd">{children}</Flex>
);

export function SummaryList({ children }: SummaryListProps) {
	return (
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
}

export const SummaryListItem = ({ children }: PropsWithOnlyChildren) => (
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
