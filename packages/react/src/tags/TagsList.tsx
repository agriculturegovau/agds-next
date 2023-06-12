import type { ReactNode } from 'react';
import { Flex } from '../flex';

export type TagsListProps = { children: ReactNode };

export const TagsList = ({ children }: TagsListProps) => (
	<Flex as="ul" gap={0.5} alignItems="center" flexWrap="wrap">
		{children}
	</Flex>
);
