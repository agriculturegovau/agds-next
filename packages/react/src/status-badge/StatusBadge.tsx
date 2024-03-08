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
		const { icon: Icon, iconLabel, tone } = typeMap[type];

		return (
			<Flex
				alignItems="center"
				background="body"
				borderColor={tone}
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
				<Icon aria-hidden="false" aria-label={iconLabel} color={tone} />
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
		icon: ProgressBlockedIcon,
		iconLabel: 'Low Blocked',
		tone: 'border',
	},
	errorHigh: {
		icon: AlertFilledIcon,
		iconLabel: 'High Error',
		tone: 'error',
	},
	errorLow: {
		icon: AlertCircleIcon,
		iconLabel: 'Low Error',
		tone: 'border',
	},
	errorMedium: {
		icon: AlertIcon,
		iconLabel: 'Medium Error',
		tone: 'error',
	},
	infoHigh: {
		icon: InfoFilledIcon,
		iconLabel: 'High Info',
		tone: 'info',
	},
	infoLow: {
		icon: InfoIcon,
		iconLabel: 'Low Info',
		tone: 'border',
	},
	infoMedium: {
		icon: InfoIcon,
		iconLabel: 'Medium Info',
		tone: 'info',
	},
	inProgressLow: {
		icon: ProgressDoingIcon,
		iconLabel: 'Low In Progress',
		tone: 'border',
	},
	pausedLow: {
		icon: ProgressPausedIcon,
		iconLabel: 'Low Paused',
		tone: 'border',
	},
	successHigh: {
		icon: SuccessFilledIcon,
		iconLabel: 'High Success',
		tone: 'success',
	},
	successLow: {
		icon: SuccessIcon,
		iconLabel: 'Low Success',
		tone: 'border',
	},
	successMedium: {
		icon: SuccessIcon,
		iconLabel: 'Medium Success',
		tone: 'success',
	},
	todoLow: {
		icon: ProgressTodoIcon,
		iconLabel: 'Low Todo',
		tone: 'border',
	},
	unknownLow: {
		icon: HelpIcon,
		iconLabel: 'Low Help',
		tone: 'border',
	},
	warningHigh: {
		icon: WarningFilledIcon,
		iconLabel: 'High Warning',
		tone: 'warning',
	},
	warningLow: {
		icon: WarningCircleIcon,
		iconLabel: 'Low Warning',
		tone: 'border',
	},
	warningMedium: {
		icon: WarningIcon,
		iconLabel: 'Medium Warning',
		tone: 'warning',
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
