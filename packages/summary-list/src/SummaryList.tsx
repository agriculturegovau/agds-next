import { ReactNode } from 'react';
import { Flex } from '@ag.ds-next/box';

type PropsWithOnlyChildren = {
	children: ReactNode;
};

export type SummaryListItemTermProps = PropsWithOnlyChildren;

/** SummaryListItemTerm should be nested as the first child of SummaryListItem */
export function SummaryListItemTerm({ children }: SummaryListItemTermProps) {
	return (
		<Flex
			as="dt"
			fontWeight="bold"
			width={['100%', '30%']}
			flexShrink={0}
			minWidth="200px"
			fontSize="sm"
		>
			{children}
		</Flex>
	);
}

export type SummaryListItemDescriptionProps = PropsWithOnlyChildren;

/** SummaryListItemTerm should be nested as the second child of SummaryListItem, after SummaryListItemTerm */
export function SummaryListItemDescription({
	children,
}: SummaryListItemDescriptionProps) {
	return (
		<Flex as="dd" flexGrow={1} fontSize="sm">
			{children}
		</Flex>
	);
}

export type SummaryListItemActionProps = PropsWithOnlyChildren;

/** SummaryListItemAction should be nested as the last child of SummaryListItem, and should wrap a Link component */
export function SummaryListItemAction({
	children,
}: SummaryListItemActionProps) {
	return <Flex as="dd">{children}</Flex>;
}

export type SummaryListProps = PropsWithOnlyChildren;

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

export type SummaryListItemProps = PropsWithOnlyChildren;

/** SummaryListItem should be nested as a child of SummaryList */
export function SummaryListItem({ children }: SummaryListItemProps) {
	return (
		<Flex
			borderBottom
			borderColor="muted"
			flexDirection={['column', 'row']}
			gap={0.25}
			paddingY={0.75}
		>
			{children}
		</Flex>
	);
}
