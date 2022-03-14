import { forwardRef, ReactNode } from 'react';
import { Flex } from '@ag.ds-next/box';

export type ProgressIndicatorListProps = {
	children: ReactNode;
};

export const ProgressIndicatorList = forwardRef<
	HTMLUListElement,
	ProgressIndicatorListProps
>(function ProgressIndicatorList({ children }, ref) {
	return (
		<Flex ref={ref} as="ul" flexDirection="column" borderTop>
			{children}
		</Flex>
	);
});

export type ProgressIndicatorListItemProps = {
	children: ReactNode;
	className?: string;
};

export const ProgressIndicatorListItem = ({
	children,
	className,
}: ProgressIndicatorListItemProps) => (
	<Flex as="li" alignItems="center" borderBottom className={className}>
		{children}
	</Flex>
);
