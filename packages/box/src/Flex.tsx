import { forwardRefWithAs } from '@ag.ds-next/core';
import type { BoxProps } from './styles';
import { Box } from './Box';

export type FlexProps = Omit<BoxProps, 'display'> & { inline?: boolean };

export const Flex = forwardRefWithAs<'div', FlexProps>(function Flex(
	{
		inline = false,
		flexDirection = 'row',
		justifyContent = 'flex-start',
		alignItems = 'stretch',
		...props
	},
	ref
) {
	return (
		<Box
			ref={ref}
			display={inline ? 'inline-flex' : 'flex'}
			flexDirection={flexDirection}
			justifyContent={justifyContent}
			alignItems={alignItems}
			{...props}
		/>
	);
});
