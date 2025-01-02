import { forwardRefWithAs } from '../core';
import { Box, BoxProps } from '../box';

export type TextProps = BoxProps;

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
			as={as}
			color={color}
			fontFamily={fontFamily}
			fontSize={fontSize}
			fontWeight={fontWeight}
			lineHeight={lineHeight}
			ref={ref}
			{...props}
		/>
	);
});
