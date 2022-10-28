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
			ref={ref}
			as={as}
			css={{
				marginTop: 0,
				marginBottom: 0,
			}}
			color={color}
			fontFamily={fontFamily}
			fontSize={fontSize}
			fontWeight={fontWeight}
			lineHeight={lineHeight}
			{...props}
		/>
	);
});
