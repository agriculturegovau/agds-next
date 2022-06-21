import { useMemo } from 'react';
import { boxPalette, globalPalette, packs } from '@ag.ds-next/core';

type SwitchThumbProps = {
	checked: boolean;
	size: 'sm' | 'md';
};

export type SwitchTrackProps = SwitchThumbProps;

export const SwitchTrack = ({ checked, size }: SwitchTrackProps) => {
	const trackStyles = switchTrackStyles[size];
	return (
		<div
			css={{
				...trackStyles,
				borderStyle: 'solid',
				backgroundColor: globalPalette.lightBackgroundBody,
				borderRadius: trackStyles.height,
				position: 'relative',
				...(checked
					? {
							background: boxPalette.foregroundAction,
							borderColor: boxPalette.foregroundAction,
					  }
					: {
							borderColor: boxPalette.borderInput,
					  }),
			}}
		>
			<SwitchThumb checked={checked} size={size} />
		</div>
	);
};

const switchTrackStyles = {
	sm: {
		...packs.control.sm,
		width: 44,
		height: 24,
	},
	md: {
		...packs.control.md,
		width: 56,
		height: 32,
	},
} as const;

export const SwitchThumb = ({ checked, size }: SwitchThumbProps) => {
	const { borderWidth, height, width: trackWidth } = switchTrackStyles[size];

	const checkedPosition = useMemo(
		() => trackWidth - height - borderWidth,
		[trackWidth, height, borderWidth]
	);

	return (
		<div
			css={{
				display: 'grid',
				alignItems: 'center',
				justifyContent: 'center',
				background: boxPalette.backgroundBody,
				height,
				width: height,
				borderRadius: height,
				borderWidth,
				borderStyle: 'solid',
				borderColor: boxPalette.foregroundAction,
				position: 'relative',
				top: -borderWidth,
				transition: 'transform 240ms cubic-bezier(0.165,0.840,0.440,1.000)',
				...(checked
					? {
							transform: `translateX(${checkedPosition}px)`,
					  }
					: {
							transform: `translateX(${-borderWidth}px)`,
					  }),
			}}
		>
			{checked && <SwitchThumbIcon />}
		</div>
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
