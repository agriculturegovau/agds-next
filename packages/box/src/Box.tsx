import type { AllHTMLAttributes } from 'react';
import { forwardRefWithAs } from '@ag.ds-next/core';
import { BoxProps, boxStyles } from './styles';

// Do we need element props when using forwardRefWithAs ? Probably
// Can this use BoxProps as the things to omit? and others too?
type ElementProps = Omit<
	AllHTMLAttributes<HTMLElement>,
	'content' | 'height' | 'translate' | 'color' | 'width' | 'cursor' | 'display'
>;

export const Box = forwardRefWithAs<'div', BoxProps>(function Box(
	{ as: Tag = 'div', ...props },
	ref
) {
	const [styles, attrs] = boxStyles(props);
	return <Tag ref={ref} css={styles} {...attrs} />;
});
