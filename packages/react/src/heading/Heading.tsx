import { forwardRefWithAs } from '../core';
import { Box, BoxProps } from '../box';

export const headingFontSizeMap = {
	h1: 'xxl',
	h2: 'xl',
	h3: 'lg',
	h4: 'md',
	h5: 'sm',
	h6: 'xs',
} as const;

export type HeadingType = keyof typeof headingFontSizeMap;

export type HeadingProps = {
	/** The heading level. */
	type?: HeadingType;
} & BoxProps;

export const Heading = forwardRefWithAs<'h2', HeadingProps>(function Heading(
	{
		as: ComponentTag,
		type = 'h2',
		color = 'text',
		fontSize: __fontSize,
		fontFamily = 'body',
		fontWeight = 'bold',
		lineHeight = 'heading',
		...props
	},
	ref
) {
	const Tag = ComponentTag ?? type;
	const fontSize = __fontSize ?? headingFontSizeMap[type];

	return (
		<Box
			as={Tag}
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

export const H1 = forwardRefWithAs<'h1', BoxProps>((props, ref) => (
	<Heading as="h1" ref={ref} type="h1" {...props} />
));
export const H2 = forwardRefWithAs<'h2', BoxProps>((props, ref) => (
	<Heading as="h2" ref={ref} type="h2" {...props} />
));
export const H3 = forwardRefWithAs<'h3', BoxProps>((props, ref) => (
	<Heading as="h3" ref={ref} type="h3" {...props} />
));
export const H4 = forwardRefWithAs<'h4', BoxProps>((props, ref) => (
	<Heading as="h4" ref={ref} type="h4" {...props} />
));
export const H5 = forwardRefWithAs<'h5', BoxProps>((props, ref) => (
	<Heading as="h5" ref={ref} type="h5" {...props} />
));
export const H6 = forwardRefWithAs<'h6', BoxProps>((props, ref) => (
	<Heading as="h6" ref={ref} type="h6" {...props} />
));
