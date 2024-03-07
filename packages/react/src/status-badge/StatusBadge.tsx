import { ReactNode } from 'react';
import { Box } from '../box';
import { Flex } from '../flex';
import { boxPalette, mapSpacing } from '../core';
import {
	SuccessIcon,
	AlertIcon,
	InfoIcon,
	WarningIcon,
	SuccessFilledIcon,
	AlertFilledIcon,
	WarningFilledIcon,
	HelpIcon,
	ProgressTodoIcon,
	ProgressDoingIcon,
	ProgressBlockedIcon,
	InfoFilledIcon,
} from '../icon';
import { Text } from '../text';
import { WarningRoundIcon } from '../icon/icons/WarningRoundIcon';
import { ProgressPausedIcon } from '../icon/icons/ProgressPausedIcon';

export type StatusBadgeProps = {
	/** The visual appearance of the badge. */
	appearance?: StatusBadgeAppearance;
	/** Determines the strength and tone of the icon and badge. */
	emphasis: keyof typeof emphasisAndStatusMap;
	/** The text label in the badge. */
	label: ReactNode;
	/** Determines the type of icon rendered. */
	status:
		| 'blocked'
		| 'doing'
		| 'draft'
		| 'error'
		| 'info'
		| 'paused'
		| 'success'
		| 'unknown'
		| 'warning';
	/** @deprecated The visual weight to apply. */
	weight?: StatusBadgeAppearance;
	/** @deprecated The color tone to apply. */
	tone: StatusBadgeTone;
};

export const StatusBadge = ({
	appearance = 'regular',
	emphasis,
	label,
	status,
	tone,
	weight = 'regular',
}: StatusBadgeProps) => {
	const hasStatus = Boolean(status);
	const hasEmphasis = Boolean(emphasis);

	// Updated props take precedence of Legacy
	if (hasStatus && hasEmphasis) {
		const resolvedEmphasis = emphasisAndStatusMap[emphasis];
		const {
			icon: Icon,
			iconLabel,
			tone,
		} = resolvedEmphasis.status[status as keyof typeof resolvedEmphasis.status];

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
				<Icon
					aria-hidden="false"
					color={tone}
					aria-label={`${resolvedEmphasis.iconLabel} ${iconLabel}`}
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
	}

	// Legacy StatusBadge
	console.warn(
		'The "tone" and  "weight" props are deprecated. Use the "appearance", "emphasis" and "status" props instead.'
	);
	const { icon: LegacyIcon, tone: legacyTone } = legacyToneMap[tone || 'info'];
	return (
		<Flex
			background="body"
			display="inline-flex"
			alignItems="center"
			gap={0.5}
			borderColor={legacyTone}
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

const emphasisAndStatusMap = {
	high: {
		iconLabel: 'High',
		status: {
			success: {
				icon: SuccessFilledIcon,
				iconLabel: 'Success',
				tone: 'success',
			},
			error: {
				icon: AlertFilledIcon,
				iconLabel: 'Error',
				tone: 'error',
			},
			warning: {
				icon: WarningFilledIcon,
				iconLabel: 'Warning',
				tone: 'warning',
			},
			info: {
				icon: InfoFilledIcon,
				iconLabel: 'Info',
				tone: 'info',
			},
		},
	},
	medium: {
		iconLabel: 'Medium',
		status: {
			success: {
				icon: SuccessIcon,
				iconLabel: 'Success',
				tone: 'success',
			},
			error: {
				icon: AlertIcon,
				iconLabel: 'Error',
				tone: 'error',
			},
			warning: {
				icon: WarningIcon,
				iconLabel: 'Warning',
				tone: 'warning',
			},
			info: {
				icon: InfoIcon,
				iconLabel: 'Info',
				tone: 'info',
			},
		},
	},
	low: {
		iconLabel: 'Low',
		status: {
			success: {
				icon: SuccessIcon,
				iconLabel: 'Success',
				tone: 'border',
			},
			error: {
				icon: AlertIcon,
				iconLabel: 'Error',
				tone: 'border',
			},
			warning: {
				icon: WarningRoundIcon,
				iconLabel: 'Warning',
				tone: 'border',
			},
			paused: {
				icon: ProgressPausedIcon,
				iconLabel: 'Paused',
				tone: 'border',
			},
			info: {
				icon: InfoIcon,
				iconLabel: 'Info',
				tone: 'border',
			},
			unknown: {
				icon: HelpIcon,
				iconLabel: 'Help',
				tone: 'border',
			},
			todo: {
				icon: ProgressTodoIcon,
				iconLabel: 'Todo',
				tone: 'border',
			},
			inProgress: {
				icon: ProgressDoingIcon,
				iconLabel: 'In Progress',
				tone: 'border',
			},
			blocked: {
				icon: ProgressBlockedIcon,
				iconLabel: 'Blocked',
				tone: 'border',
			},
		},
	},
} as const;

export type StatusBadgeAppearance = 'subtle' | 'regular';

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
