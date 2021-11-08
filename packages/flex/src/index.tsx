import { forwardRefWithAs } from '@ag.ds-next/utils';
import { Box, BoxProps } from '@ag.ds-next/box';

export const Flex = forwardRefWithAs<'div', BoxProps>(function Flex(
	{ flexDirection, ...props },
	ref
) {
	return (
		<Box
			ref={ref}
			display="flex"
			flexDirection={flexDirection ?? 'row'}
			{...props}
		/>
	);
});
