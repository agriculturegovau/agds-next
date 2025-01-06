import { PropsWithChildren } from 'react';
import { boxPalette, tokens } from '../core';
import { Box } from '../box';
import { Flex } from '../flex';
import { CheckIcon } from '../icon';
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
			css={{ position: 'relative', flexShrink: 0 }}
			height={height}
			width={width}
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

const ICON_SIZE_MAP = {
	sm: { prop: 'sm', actual: '0.875rem' }, // 14px
	md: { prop: 'md', actual: '1.375rem' }, // 22px
} as const;

export const SwitchThumb = ({ checked, size }: SwitchThumbProps) => {
	const {
		thumbCheckedPos,
		borderWidth,
		height: thumbSize,
	} = switchTrackStyles[size];
	const iconSize = ICON_SIZE_MAP[size];
	return (
		<Flex
			alignItems="center"
			as="span"
			background="body"
			css={{
				borderRadius: thumbSize,
				borderWidth,
				borderStyle: 'solid',
				borderColor: checked
					? boxPalette.selected
					: boxPalette.foregroundAction,
				position: 'absolute',
				transition: `left ${tokens.transition.duration}ms ${tokens.transition.timingFunction}`,
				left: checked ? thumbCheckedPos : '0rem',
			}}
			height={thumbSize}
			justifyContent="center"
			width={thumbSize}
		>
			{checked && (
				<CheckIcon
					color="selected"
					css={{ width: iconSize.actual, height: iconSize.actual }}
					// This component requires a custom icon size
					size={iconSize.prop}
					weight="bold"
				/>
			)}
		</Flex>
	);
};
