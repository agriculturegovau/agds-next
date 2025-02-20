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
	const isLegacy = legacyToneMapKeys.includes(tone);

	if (isLegacy) {
		console.warn(
			`The "tone='${tone}'" and "weight" props are deprecated. Use the tones which include emphasis and the "appearance" prop instead.`
		);
		const { icon: LegacyIcon, tone: legacyTone } =
			legacyToneMap[tone as StatusBadgeLegacyTone];
		const appearanceStyleProps =
			weight === 'regular' ? regularAppearanceStyleProps : {};

		return (
			<Flex
				alignItems="center"
				borderColor={legacyTone}
				css={{
					borderRadius,
					'& svg': {
						flexShrink: 0,
						height: iconSize,
						width: iconSize,
					},
				}}
				display="inline-flex"
				gap={0.5}
				{...appearanceStyleProps}
			>
				<LegacyIcon />
				<Text
					as="span"
					css={{ whiteSpace: 'nowrap' }}
					fontSize="sm"
					lineHeight="nospace"
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
	const appearanceStyleProps =
		appearance === 'regular' ? regularAppearanceStyleProps : {};

	return (
		<Flex
			alignItems="center"
			borderColor={borderColor}
			css={{
				borderRadius,
				// This used to be inline-flex, but it was creating addtional vertical space under the SVG so we changed it to flex & fit-content
				width: 'fit-content',
				'& svg': {
					flexShrink: 0,
				},
			}}
			gap={0.5}
			{...appearanceStyleProps}
		>
			<Icon
				aria-hidden="false"
				aria-label={`Status: ${iconLabel}.`}
				color={iconColor}
			/>
			<Text
				as="span"
				css={{ whiteSpace: 'nowrap' }}
				fontSize="sm"
				lineHeight="nospace"
			>
				{label}
			</Text>
		</Flex>
	);
};

const borderRadius = mapSpacing(1); // 16px
const height = mapSpacing(2); // 32px
const iconSize = '1.375rem'; // 22px

const regularAppearanceStyleProps = {
	background: 'body',
	border: true,
	borderWidth: 'sm',
	height,
	paddingX: 0.75,
} as const;

const toneMap = {
	cannotStartLow: {
		borderColor: 'border',
		icon: ProgressBlockedIcon,
		iconColor: 'muted',
		iconLabel: 'cannot start',
	},
	errorHigh: {
		borderColor: 'error',
		icon: AlertFilledIcon,
		iconColor: 'error',
		iconLabel: 'error',
	},
	errorLow: {
		borderColor: 'border',
		icon: AlertCircleIcon,
		iconColor: 'muted',
		iconLabel: 'error',
	},
	errorMedium: {
		borderColor: 'error',
		icon: AlertIcon,
		iconColor: 'error',
		iconLabel: 'error',
	},
	infoHigh: {
		borderColor: 'info',
		icon: InfoFilledIcon,
		iconColor: 'info',
		iconLabel: 'information',
	},
	infoLow: {
		borderColor: 'border',
		icon: InfoIcon,
		iconColor: 'muted',
		iconLabel: 'information',
	},
	infoMedium: {
		borderColor: 'info',
		icon: InfoIcon,
		iconColor: 'info',
		iconLabel: 'information',
	},
	inProgressLow: {
		borderColor: 'border',
		icon: ProgressDoingIcon,
		iconColor: 'muted',
		iconLabel: 'in progress',
	},
	notStartedLow: {
		borderColor: 'border',
		icon: ProgressTodoIcon,
		iconColor: 'muted',
		iconLabel: 'not started',
	},
	pausedLow: {
		borderColor: 'border',
		icon: ProgressPausedIcon,
		iconColor: 'muted',
		iconLabel: 'paused',
	},
	successHigh: {
		borderColor: 'success',
		icon: SuccessFilledIcon,
		iconColor: 'success',
		iconLabel: 'success',
	},
	successLow: {
		borderColor: 'border',
		icon: SuccessIcon,
		iconColor: 'muted',
		iconLabel: 'success',
	},
	successMedium: {
		borderColor: 'success',
		icon: SuccessIcon,
		iconColor: 'success',
		iconLabel: 'success',
	},
	unknownLow: {
		borderColor: 'border',
		icon: HelpIcon,
		iconColor: 'muted',
		iconLabel: 'help',
	},
	warningHigh: {
		borderColor: 'warning',
		icon: WarningFilledIcon,
		iconColor: 'warning',
		iconLabel: 'warning',
	},
	warningLow: {
		borderColor: 'border',
		icon: WarningCircleIcon,
		iconColor: 'muted',
		iconLabel: 'warning',
	},
	warningMedium: {
		borderColor: 'warning',
		icon: WarningIcon,
		iconColor: 'warning',
		iconLabel: 'warning',
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
				css={{
					width: 8,
					height: 8,
					borderRadius: 4,
					backgroundColor: boxPalette.foregroundMuted,
				}}
				highContrastOutline
			/>
		),
		tone: 'border',
	},
	success: {
		icon: () => (
			<SuccessIcon aria-hidden="false" aria-label="Success" color="success" />
		),
		tone: 'success',
	},
	error: {
		icon: () => (
			<AlertIcon aria-hidden="false" aria-label="Error" color="error" />
		),
		tone: 'error',
	},
	info: {
		icon: () => (
			<InfoIcon aria-hidden="false" aria-label="Information" color="info" />
		),
		tone: 'info',
	},
	warning: {
		icon: () => (
			<WarningIcon aria-hidden="false" aria-label="Warning" color="warning" />
		),
		tone: 'warning',
	},
} as const;

const legacyToneMapKeys = Object.keys(legacyToneMap);
