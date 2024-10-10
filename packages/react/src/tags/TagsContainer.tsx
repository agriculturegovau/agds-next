import { forwardRef, type ReactNode } from 'react';
import { Stack } from '../stack';

export type TagsContainerProps = { children: ReactNode };

export const TagsContainer = forwardRef<HTMLDivElement, TagsContainerProps>(
	function TagsContainer({ children }, ref) {
		return (
			<Stack gap={0.25} ref={ref}>
				{children}
			</Stack>
		);
	}
);
