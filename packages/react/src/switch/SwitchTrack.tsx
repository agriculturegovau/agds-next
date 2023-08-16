import { PropsWithChildren } from 'react';
import { boxPalette, tokens } from '../core';
import { Box } from '../box';
import { Flex } from '../flex';
import { switchTrackStyles } from './utils';

export type SwitchSize = 'sm' | 'md';

type SwitchContainerProps = PropsWithChildren<{
	size: SwitchSize;
}>;

export const SwitchContainer = ({ children, size }: SwitchContainerProps) => {
	const { width, height } = switchTrackStyles[size];
	return (
		<Box
			as="span"
			width={width}
			height={height}
			css={{ position: 'relative', flexShrink: 0 }}
		>
			{children}
		</Box>
	);
};

export type SwitchTrackProps = SwitchThumbProps;

export const SwitchTrack = ({ checked, size }: SwitchTrackProps) => {
	const { borderWidth, height } = switchTrackStyles[size];
	return (
		<Box
			as="span"
			css={{
				borderWidth,
				borderStyle: 'solid',
				borderRadius: height,
				position: 'absolute',
				inset: 0,
				...(checked
					? {
							backgroundColor: boxPalette.selected,
							borderColor: boxPalette.selected,
					  }
					: {
							borderColor: boxPalette.border,
							backgroundColor: boxPalette.backgroundShade,
					  }),
			}}
		/>
	);
};

type SwitchThumbProps = {
	checked: boolean;
	size: SwitchSize;
};

export const SwitchThumb = ({ checked, size }: SwitchThumbProps) => {
	const {
		thumbCheckedPos,
		borderWidth,
		height: thumbSize,
	} = switchTrackStyles[size];
	return (
		<Flex
			as="span"
			alignItems="center"
			justifyContent="center"
			height={thumbSize}
			width={thumbSize}
			background="body"
			css={{
				borderRadius: thumbSize,
				borderWidth,
				borderStyle: 'solid',
				borderColor: boxPalette.foregroundAction,
				position: 'absolute',
				transition: `left ${tokens.transition.duration}ms ${tokens.transition.timingFunction}`,
				left: checked ? thumbCheckedPos : '0rem',
			}}
		>
			{checked && <SwitchThumbIcon size={size} />}
		</Flex>
	);
};

const switchThumbIconSizeMap = {
	md: {
		width: 18,
		height: 14,
		stroke: 3,
	},
	sm: {
		width: 10,
		height: 7,
		stroke: 4,
	},
};

const SwitchThumbIcon = ({ size }: { size: SwitchSize }) => {
	const { height, width, stroke } = switchThumbIconSizeMap[size];
	return (
		<svg
			width="18"
			height="14"
			viewBox="0 0 18 14"
			fill="none"
			css={{ width, height }}
			stroke={boxPalette.selected}
			strokeWidth={stroke}
			strokeLinecap="round"
			strokeLinejoin="round"
			xmlns="http://www.w3.org/2000/svg"
		>
			<path d="M2 7.71429L6.15385 12L15.8462 2" />
		</svg>
	);
};
