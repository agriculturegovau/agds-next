import { forwardRefWithAs } from '@ag.ds-next/core';
import type { BoxProps } from './styles';
import { Box } from './Box';

export type GridProps = BoxProps & { inline?: boolean };

export const Grid = forwardRefWithAs<'div', GridProps>(function Grid(
	{ inline = false, display, ...props },
	ref
) {
	return (
		<Box
			ref={ref}
			display={display ?? (inline ? 'inline-grid' : 'grid')}
			{...props}
		/>
	);
});
