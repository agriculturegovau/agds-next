import { PropsWithChildren } from 'react';
import { useSpring, animated } from '@react-spring/web';
import { boxPalette, usePrefersReducedMotion } from '@ag.ds-next/core';
import { Box, Flex } from '@ag.ds-next/box';
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
							backgroundColor: boxPalette.foregroundAction,
							borderColor: boxPalette.foregroundAction,
					  }
					: {
							borderColor: boxPalette.border,
							backgroundColor: boxPalette.backgroundShade,
					  }),
			}}
		/>
	);
};

const AnimatedFlex = animated(Flex);

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

	const prefersReducedMotion = usePrefersReducedMotion();
	const animationStyles = useSpring({
		from: { left: '0rem' },
		to: { left: checked ? thumbCheckedPos : '0rem' },
		immediate: prefersReducedMotion,
	});

	return (
		<AnimatedFlex
			as="span"
			alignItems="center"
			justifyContent="center"
			style={animationStyles}
			height={thumbSize}
			width={thumbSize}
			background="body"
			css={{
				borderRadius: thumbSize,
				borderWidth,
				borderStyle: 'solid',
				borderColor: boxPalette.foregroundAction,
				position: 'absolute',
			}}
		>
			{checked && <SwitchThumbIcon size={size} />}
		</AnimatedFlex>
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
			stroke={boxPalette.foregroundAction}
			strokeWidth={stroke}
			strokeLinecap="round"
			strokeLinejoin="round"
			xmlns="http://www.w3.org/2000/svg"
		>
			<path d="M2 7.71429L6.15385 12L15.8462 2" />
		</svg>
	);
};
