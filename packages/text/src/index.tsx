import { forwardRefWithAs } from '@ag.ds-next/core';
import { Box, BoxProps } from '@ag.ds-next/box';

export const Text = forwardRefWithAs<'span', BoxProps>(function Text(
	{
		as = 'span',
		color = 'text',
		fontFamily = 'body',
		fontSize = 'sm',
		fontWeight = 'normal',
		lineHeight = 'default',
		...props
	},
	ref
) {
	return (
		<Box
			ref={ref}
			as={as}
			color={color}
			fontFamily={fontFamily}
			fontSize={fontSize}
			fontWeight={fontWeight}
			lineHeight={lineHeight}
			{...props}
		/>
	);
});
