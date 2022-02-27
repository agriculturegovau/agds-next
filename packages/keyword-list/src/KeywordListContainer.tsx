import type { ReactNode } from 'react';
import { Stack } from '@ag.ds-next/box';

export type KeywordListContainerProps = {
	children: ReactNode;
};

export const KeywordListContainer = ({
	children,
}: KeywordListContainerProps) => {
	return (
		<Stack as="ul" gap={1}>
			{children}
		</Stack>
	);
};
