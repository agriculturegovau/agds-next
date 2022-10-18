import { ReactNode } from 'react';
import { Flex } from '@ag.ds-next/box';

type PropsWithOnlyChildren = {
	children: ReactNode;
};

export type SummaryListProps = PropsWithOnlyChildren;

/** SummaryListItemTerm should be nested as the first child of SummaryListItem */
export const SummaryListItemTerm = ({ children }: PropsWithOnlyChildren) => (
	<Flex as="dt" fontWeight="bold" width={['100%', '30%']}>
		{children}
	</Flex>
);

/** SummaryListItemTerm should be nested as the second child of SummaryListItem, after SummaryListItemTerm */
export const SummaryListItemDescription = ({
	children,
}: PropsWithOnlyChildren) => (
	<Flex as="dd" flexGrow={1}>
		{children}
	</Flex>
);

/** SummaryListItemAction should be nested as the last child of SummaryListItem, and should wrap a Link component */
export const SummaryListItemAction = ({ children }: PropsWithOnlyChildren) => (
	<Flex as="dd">{children}</Flex>
);

/**
 * SummaryList displays a list of terms and descriptions as key value pairs.
 * It is similar to a two-column table, but renders a HTML Description List (`<dl>`) element.
 */
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

/** SummaryListItem should be nested as a child of SummaryList */
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
