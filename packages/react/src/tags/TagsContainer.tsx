import type { ReactNode } from 'react';
import { Stack } from '../box';

export type TagsContainerProps = { children: ReactNode };

export const TagsContainer = ({ children }: TagsContainerProps) => (
	<Stack gap={0.25}>{children}</Stack>
);
