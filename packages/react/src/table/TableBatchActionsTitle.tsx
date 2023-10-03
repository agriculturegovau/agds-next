import { PropsWithChildren } from 'react';
import { Text } from '../text';

export type TableBatchActionsTitleProps = PropsWithChildren<{}>;

export function TableBatchActionsTitle({
	children,
}: TableBatchActionsTitleProps) {
	return (
		<Text as="h3" fontSize="md" fontWeight="bold" lineHeight="heading">
			{children}
		</Text>
	);
}
