import { forwardRefWithAs } from '@ag.ds-next/core';
import type { BoxProps } from './styles';
import { Box } from './Box';

export type FlexProps = Omit<BoxProps, 'display'>;

export const Flex = forwardRefWithAs<'div', FlexProps>(function Flex({
	flexDirection = 'row',
	justifyContent = 'flex-start',
	alignItems = 'stretch',
	...props
}) {
	return (
		<Box
			display="flex"
			flexDirection={flexDirection}
			justifyContent={justifyContent}
			alignItems={alignItems}
			{...props}
		/>
	);
});
