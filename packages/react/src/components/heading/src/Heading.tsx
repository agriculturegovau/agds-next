import { forwardRefWithAs } from '../../core/src';
import { Box, BoxProps } from '../../box/src';

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
			ref={ref}
			color={color}
			fontSize={fontSize}
			fontFamily={fontFamily}
			fontWeight={fontWeight}
			lineHeight={lineHeight}
			{...props}
		/>
	);
});

export const H1 = forwardRefWithAs<'h1', BoxProps>((props, ref) => (
	<Heading ref={ref} as="h1" type="h1" {...props} />
));
export const H2 = forwardRefWithAs<'h2', BoxProps>((props, ref) => (
	<Heading ref={ref} as="h2" type="h2" {...props} />
));
export const H3 = forwardRefWithAs<'h3', BoxProps>((props, ref) => (
	<Heading ref={ref} as="h3" type="h3" {...props} />
));
export const H4 = forwardRefWithAs<'h4', BoxProps>((props, ref) => (
	<Heading ref={ref} as="h4" type="h4" {...props} />
));
export const H5 = forwardRefWithAs<'h5', BoxProps>((props, ref) => (
	<Heading ref={ref} as="h5" type="h5" {...props} />
));
export const H6 = forwardRefWithAs<'h6', BoxProps>((props, ref) => (
	<Heading ref={ref} as="h6" type="h6" {...props} />
));
