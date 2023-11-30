import { forwardRefWithAs, tokens } from '../core';
import { Box, BoxProps } from '../box';

export type TextProps = BoxProps;

const defaultMaxWidth = tokens.maxWidth.bodyText;

export const Text = forwardRefWithAs<'span', BoxProps>(function Text(
	{
		as = 'span',
		color = 'text',
		fontFamily = 'body',
		fontSize = 'sm',
		fontWeight = 'normal',
		lineHeight = 'default',
		display = 'inline-block',
		maxWidth = defaultMaxWidth,
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
			maxWidth={maxWidth}
			display={display}
			{...props}
		/>
	);
});
