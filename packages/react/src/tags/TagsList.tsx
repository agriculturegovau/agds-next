import type { ReactNode } from 'react';
import { Flex } from '../flex';

export type TagsListProps = { children: ReactNode };

export const TagsList = ({ children }: TagsListProps) => (
	<Flex alignItems="center" as="ul" flexWrap="wrap" gap={0.5}>
		{children}
	</Flex>
);
