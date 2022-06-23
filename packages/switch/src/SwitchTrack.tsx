import { PropsWithChildren } from 'react';
import { useSpring, animated } from '@react-spring/web';
import {
	boxPalette,
	globalPalette,
	usePrefersReducedMotion,
} from '@ag.ds-next/core';
import { Box, Flex } from '@ag.ds-next/box';
import { switchTrackStyles } from './utils';

type SwitchSize = 'sm' | 'md';

type SwitchContainerProps = PropsWithChildren<{ size: SwitchSize }>;

export const SwitchContainer = ({ children, size }: SwitchContainerProps) => {
	const { width, height } = switchTrackStyles[size];
	return (
		<Box
			css={{
				flexShrink: 0,
				width,
				height,
				position: 'relative',
			}}
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
			className="switchTrack"
			css={{
				borderWidth,
				borderStyle: 'solid',
				backgroundColor: globalPalette.lightBackgroundBody,
				borderRadius: height,
				position: 'absolute',
				inset: 0,
				...(checked
					? {
							background: boxPalette.foregroundAction,
							borderColor: boxPalette.foregroundAction,
					  }
					: {
							borderColor: boxPalette.borderInput,
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
			alignItems="center"
			justifyContent="center"
			style={animationStyles}
			height={thumbSize}
			width={thumbSize}
			css={{
				background: boxPalette.backgroundBody,
				borderRadius: thumbSize,
				borderWidth,
				borderStyle: 'solid',
				borderColor: boxPalette.foregroundAction,
				position: 'absolute',
			}}
		>
			{checked && <SwitchThumbIcon />}
		</AnimatedFlex>
	);
};

const SwitchThumbIcon = () => {
	return (
		<svg
			width="18"
			height="14"
			viewBox="0 0 18 14"
			fill="none"
			xmlns="http://www.w3.org/2000/svg"
		>
			<path
				d="M2 7.71429L6.15385 12L15.8462 2"
				stroke={boxPalette.foregroundAction}
				strokeWidth="3"
				strokeLinecap="round"
				strokeLinejoin="round"
			/>
		</svg>
	);
};
