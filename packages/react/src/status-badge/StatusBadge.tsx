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
	/** @deprecated The color tone to apply. */
	tone?: StatusBadgeTone;
	/** Determines the tone and icon of the badge. */
	type?: StatusBadgeType;
	/** @deprecated The visual weight to apply. */
	weight?: StatusBadgeAppearance;
};

export const StatusBadge = ({
	appearance = 'regular',
	label,
	tone = 'info',
	type,
	weight = 'regular',
}: StatusBadgeProps) => {
	// Updated props take precedence over Legacy
	if (type) {
		const { borderColor, icon: Icon, iconColor, iconLabel } = typeMap[type];

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
				<Icon aria-hidden="false" aria-label={iconLabel} color={iconColor} />
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

	// Legacy StatusBadge
	console.warn(
		'The "tone" and "weight" props are deprecated. Use the "type" and "appearance" props instead.'
	);
	const { icon: LegacyIcon, tone: legacyTone } = legacyToneMap[tone];
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

const typeMap = {
	blockedLow: {
		borderColor: 'border',
		icon: ProgressBlockedIcon,
		iconColor: 'muted',
		iconLabel: 'Low Blocked',
	},
	errorHigh: {
		borderColor: 'error',
		icon: AlertFilledIcon,
		iconColor: 'error',
		iconLabel: 'High Error',
	},
	errorLow: {
		borderColor: 'border',
		icon: AlertCircleIcon,
		iconColor: 'muted',
		iconLabel: 'Low Error',
	},
	errorMedium: {
		borderColor: 'error',
		icon: AlertIcon,
		iconColor: 'error',
		iconLabel: 'Medium Error',
	},
	infoHigh: {
		borderColor: 'info',
		icon: InfoFilledIcon,
		iconColor: 'info',
		iconLabel: 'High Info',
	},
	infoLow: {
		borderColor: 'border',
		icon: InfoIcon,
		iconColor: 'muted',
		iconLabel: 'Low Info',
	},
	infoMedium: {
		borderColor: 'info',
		icon: InfoIcon,
		iconColor: 'info',
		iconLabel: 'Medium Info',
	},
	inProgressLow: {
		borderColor: 'border',
		icon: ProgressDoingIcon,
		iconColor: 'muted',
		iconLabel: 'Low In Progress',
	},
	pausedLow: {
		borderColor: 'border',
		icon: ProgressPausedIcon,
		iconColor: 'muted',
		iconLabel: 'Low Paused',
	},
	successHigh: {
		borderColor: 'success',
		icon: SuccessFilledIcon,
		iconColor: 'success',
		iconLabel: 'High Success',
	},
	successLow: {
		borderColor: 'border',
		icon: SuccessIcon,
		iconColor: 'muted',
		iconLabel: 'Low Success',
	},
	successMedium: {
		borderColor: 'success',
		icon: SuccessIcon,
		iconColor: 'success',
		iconLabel: 'Medium Success',
	},
	todoLow: {
		borderColor: 'border',
		icon: ProgressTodoIcon,
		iconColor: 'muted',
		iconLabel: 'Low Todo',
	},
	unknownLow: {
		borderColor: 'border',
		icon: HelpIcon,
		iconColor: 'muted',
		iconLabel: 'Low Help',
	},
	warningHigh: {
		borderColor: 'warning',
		icon: WarningFilledIcon,
		iconColor: 'warning',
		iconLabel: 'High Warning',
	},
	warningLow: {
		borderColor: 'border',
		icon: WarningCircleIcon,
		iconColor: 'muted',
		iconLabel: 'Low Warning',
	},
	warningMedium: {
		borderColor: 'warning',
		icon: WarningIcon,
		iconColor: 'warning',
		iconLabel: 'Medium Warning',
	},
} as const;

export type StatusBadgeType = keyof typeof typeMap;

export type StatusBadgeAppearance = 'regular' | 'subtle';

// Deprecated Legacy
export type StatusBadgeTone = keyof typeof legacyToneMap;

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
