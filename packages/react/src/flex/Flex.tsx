import { forwardRefWithAs } from '../core';
import { Box } from '../box/Box';
import { BoxProps } from '../box/styles';

export type FlexProps = BoxProps & { inline?: boolean };

export const Flex = forwardRefWithAs<'div', FlexProps>(function Flex(
	{
		inline = false,
		flexDirection = 'row',
		justifyContent = 'flex-start',
		alignItems = 'stretch',
		display,
		...props
	},
	ref
) {
	return (
		<Box
			ref={ref}
			display={display ?? (inline ? 'inline-flex' : 'flex')}
			flexDirection={flexDirection}
			justifyContent={justifyContent}
			alignItems={alignItems}
			{...props}
		/>
	);
});
