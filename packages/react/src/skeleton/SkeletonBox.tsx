import { keyframes } from '@emotion/react';
import { boxPalette, tokens } from '../core';
import { Box, BoxProps } from '../box';

export type SkeletonBoxProps = {
	/** The font size of the element. */
	fontSize?: BoxProps['fontSize'];
	/** The line height of the element. */
	lineHeight?: BoxProps['lineHeight'];
	/** The width of the element. */
	width?: BoxProps['width'];
	/** The height of the element. */
	height?: BoxProps['height'];
};

const animateFadeOut = keyframes`
  0% { opacity: 0.84; }
  100% { opacity: 0.2 }
`;

export const SkeletonBox = ({
	fontSize = 'sm',
	lineHeight = 'default',
	height = 'auto',
	width = '100%',
}: SkeletonBoxProps) => {
	return (
		<Box
			aria-hidden
			css={{
				animation: `${animateFadeOut} 1200ms ${tokens.transition.timingFunction} infinite alternate`,
				backgroundColor: boxPalette.border,
				cursor: 'progress',
				'&::before': {
					content: '"\\00a0"',
				},
			}}
			display="block"
			fontSize={fontSize}
			height={height}
			highContrastOutline
			lineHeight={lineHeight}
			rounded
			width={width}
		/>
	);
};
