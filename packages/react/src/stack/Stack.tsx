import { forwardRefWithAs } from '../core';
import { Box } from '../box/Box';
import { BoxProps } from '../box/styles';

export type StackProps = Omit<BoxProps, 'display'>;

export const Stack = forwardRefWithAs<'div', StackProps>(function Stack(
	{
		flexDirection = 'column',
		justifyContent = 'flex-start',
		alignItems = 'stretch',
		...props
	},
	ref
) {
	return (
		<Box
			alignItems={alignItems}
			display="flex"
			flexDirection={flexDirection}
			justifyContent={justifyContent}
			ref={ref}
			{...props}
		/>
	);
});
