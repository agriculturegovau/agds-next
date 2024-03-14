import { ReactNode } from 'react';
import { Box } from '../box';
import { Flex } from '../flex';
import { boxPalette, mapSpacing } from '../core';
import {
	AlertCircleIcon,
	AlertFilledIcon,
	AlertIcon,
	HelpIcon,
	InfoFilledIcon,
	InfoIcon,
	ProgressBlockedIcon,
	ProgressDoingIcon,
	ProgressPausedIcon,
	ProgressTodoIcon,
	SuccessFilledIcon,
	SuccessIcon,
	WarningCircleIcon,
	WarningFilledIcon,
	WarningIcon,
} from '../icon';
import { Text } from '../text';

export type StatusBadgeProps = {
	/** The visual appearance of the badge. */
	appearance?: StatusBadgeAppearance;
	/** The text label in the badge. */
	label: ReactNode;
	/** Determines the colour, icon and announcement of the badge. */
	tone?: StatusBadgeTone | StatusBadgeLegacyTone;
	/** @deprecated The visual weight to apply. */
	weight?: StatusBadgeAppearance;
};

export const StatusBadge = ({
	appearance = 'regular',
	label,
	tone = 'info',
	weight = 'regular',
}: StatusBadgeProps) => {
	console.log(`tone`, tone);
	const isLegacy = legacyToneMapKeys.includes(tone);

	if (isLegacy) {
		console.warn(
			`The "tone='${tone}'" and "weight" props are deprecated. Use the tones which include emphasis and "appearance" props instead.`
		);
		const { icon: LegacyIcon, tone: legacyTone } =
			legacyToneMap[tone as StatusBadgeLegacyTone];

		return (
			<Flex
				alignItems="center"
				background="body"
				borderColor={legacyTone}
				display="inline-flex"
				gap={0.5}
				{...(weight === 'regular' ? regularAppearanceStyles : {})}
				css={{
					borderRadius,
					'& svg': {
						flexShrink: 0,
						width: iconWidth,
					},
				}}
			>
				<LegacyIcon />
				<Text
					as="span"
					fontSize="sm"
					lineHeight="nospace"
					css={{ whiteSpace: 'nowrap' }}
				>
					{label}
				</Text>
			</Flex>
		);
	}

	const {
		borderColor,
		icon: Icon,
		iconColor,
		iconLabel,
	} = toneMap[tone as StatusBadgeTone];

	return (
		<Flex
			alignItems="center"
			background="body"
			borderColor={borderColor}
			display="inline-flex"
			gap={0.5}
			{...(appearance === 'regular' ? regularAppearanceStyles : {})}
			css={{
				borderRadius,
				'& svg': {
					flexShrink: 0,
					width: iconWidth,
				},
			}}
		>
			<Icon
				aria-hidden="false"
				aria-label={`Status: ${iconLabel}`}
				color={iconColor}
			/>
			<Text
				as="span"
				fontSize="sm"
				lineHeight="nospace"
				css={{ whiteSpace: 'nowrap' }}
			>
				{label}
			</Text>
		</Flex>
	);
};

const borderRadius = mapSpacing(1); // 16px
const height = mapSpacing(2); // 32px
const iconWidth = '1.375rem'; // 22px

const regularAppearanceStyles = {
	border: true,
	borderWidth: 'sm',
	height,
	paddingX: 1,
} as const;

const toneMap = {
	cannotStartLow: {
		borderColor: 'border',
		icon: ProgressBlockedIcon,
		iconColor: 'muted',
		iconLabel: 'cannot start, low emphasis',
	},
	errorHigh: {
		borderColor: 'error',
		icon: AlertFilledIcon,
		iconColor: 'error',
		iconLabel: 'error, high emphasis',
	},
	errorLow: {
		borderColor: 'border',
		icon: AlertCircleIcon,
		iconColor: 'muted',
		iconLabel: 'error, low emphasis',
	},
	errorMedium: {
		borderColor: 'error',
		icon: AlertIcon,
		iconColor: 'error',
		iconLabel: 'error, medium emphasis',
	},
	infoHigh: {
		borderColor: 'info',
		icon: InfoFilledIcon,
		iconColor: 'info',
		iconLabel: 'information, high emphasis',
	},
	infoLow: {
		borderColor: 'border',
		icon: InfoIcon,
		iconColor: 'muted',
		iconLabel: 'information, low emphasis',
	},
	infoMedium: {
		borderColor: 'info',
		icon: InfoIcon,
		iconColor: 'info',
		iconLabel: 'information, medium emphasis',
	},
	inProgressLow: {
		borderColor: 'border',
		icon: ProgressDoingIcon,
		iconColor: 'muted',
		iconLabel: 'in, low emphasis progress',
	},
	notStartedLow: {
		borderColor: 'border',
		icon: ProgressTodoIcon,
		iconColor: 'muted',
		iconLabel: 'not started, low emphasis',
	},
	pausedLow: {
		borderColor: 'border',
		icon: ProgressPausedIcon,
		iconColor: 'muted',
		iconLabel: 'paused, low emphasis',
	},
	successHigh: {
		borderColor: 'success',
		icon: SuccessFilledIcon,
		iconColor: 'success',
		iconLabel: 'success, high emphasis',
	},
	successLow: {
		borderColor: 'border',
		icon: SuccessIcon,
		iconColor: 'muted',
		iconLabel: 'success, low emphasis',
	},
	successMedium: {
		borderColor: 'success',
		icon: SuccessIcon,
		iconColor: 'success',
		iconLabel: 'success, medium emphasis',
	},
	unknownLow: {
		borderColor: 'border',
		icon: HelpIcon,
		iconColor: 'muted',
		iconLabel: 'help, low emphasis',
	},
	warningHigh: {
		borderColor: 'warning',
		icon: WarningFilledIcon,
		iconColor: 'warning',
		iconLabel: 'warning, high emphasis',
	},
	warningLow: {
		borderColor: 'border',
		icon: WarningCircleIcon,
		iconColor: 'muted',
		iconLabel: 'warning, low emphasis',
	},
	warningMedium: {
		borderColor: 'warning',
		icon: WarningIcon,
		iconColor: 'warning',
		iconLabel: 'warning, medium emphasis',
	},
} as const;

export type StatusBadgeTone = keyof typeof toneMap;
export type StatusBadgeAppearance = 'regular' | 'subtle';

// Deprecated Legacy
export type StatusBadgeLegacyTone = keyof typeof legacyToneMap;

const legacyToneMap = {
	neutral: {
		icon: () => (
			<Box
				highContrastOutline
				css={{
					width: 8,
					height: 8,
					borderRadius: 4,
					backgroundColor: boxPalette.foregroundMuted,
				}}
			/>
		),
		tone: 'border',
	},
	success: {
		icon: () => (
			<SuccessIcon color="success" aria-hidden="false" aria-label="Success" />
		),
		tone: 'success',
	},
	error: {
		icon: () => (
			<AlertIcon color="error" aria-hidden="false" aria-label="Error" />
		),
		tone: 'error',
	},
	info: {
		icon: () => (
			<InfoIcon color="info" aria-hidden="false" aria-label="Information" />
		),
		tone: 'info',
	},
	warning: {
		icon: () => (
			<WarningIcon color="warning" aria-hidden="false" aria-label="Warning" />
		),
		tone: 'warning',
	},
} as const;

const legacyToneMapKeys = Object.keys(legacyToneMap);
