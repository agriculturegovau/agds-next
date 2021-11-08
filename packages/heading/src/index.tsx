import React from 'react';
import cn from 'classnames';
import { forwardRefWithAs } from '@ag.ds-next/utils';
import { Box, BoxProps } from '@ag.ds-next/box';

import * as styles from './styles.css';

const sizeMap = {
	h1: 'xxl',
	h2: 'xl',
	h3: 'lg',
	h4: 'md',
	h5: 'sm',
	h6: 'xs',
} as const;

export type HeadingProps = {
	type?: keyof typeof sizeMap;
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
	const fontSize = __fontSize ?? sizeMap[type];

	return (
		<Box
			as={Tag}
			ref={ref}
			color={color}
			fontSize={fontSize}
			fontFamily={fontFamily}
			fontWeight={fontWeight}
			lineHeight={lineHeight}
			className={cn([styles.base])}
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
