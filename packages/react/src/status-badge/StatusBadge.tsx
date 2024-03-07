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
		| 'success'
		| 'error'
		| 'warning'
		| 'info'
		| 'unknown'
		| 'draft'
		| 'doing'
		| 'blocked'
		| 'paused';
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
		const resolvedStatus = resolvedEmphasis.status[status];
		const Icon = resolvedStatus.icon;

		return (
			<Flex
				alignItems="center"
				background="body"
				borderColor={resolvedStatus.tone}
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
					color={resolvedStatus.tone}
					aria-label={`${resolvedEmphasis.label} ${resolvedStatus.label}`}
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
	paddingX: 1,
	height,
} as const;

const emphasisAndStatusMap = {
	high: {
		label: 'High',
		status: {
			success: {
				label: 'Success',
				icon: SuccessFilledIcon,
				tone: 'success',
			},
			error: {
				label: 'Error',
				icon: AlertFilledIcon,
				tone: 'error',
			},
			warning: {
				label: 'Warning',
				icon: WarningFilledIcon,
				tone: 'warning',
			},
			info: {
				label: 'Info',
				icon: InfoFilledIcon,
				tone: 'info',
			},
		},
	},
	medium: {
		label: 'Medium',
		status: {
			success: {
				label: 'Success',
				icon: SuccessIcon,
				tone: 'success',
			},
			error: {
				label: 'Error',
				icon: AlertIcon,
				tone: 'error',
			},
			warning: {
				label: 'Warning',
				icon: WarningIcon,
				tone: 'warning',
			},
			info: {
				label: 'Info',
				icon: InfoIcon,
				tone: 'info',
			},
		},
	},
	low: {
		label: 'Low',
		status: {
			success: {
				label: 'Success',
				icon: SuccessIcon,
				tone: 'border',
			},
			error: {
				label: 'Error',
				icon: AlertIcon,
				tone: 'border',
			},
			warning: {
				label: 'Warning',
				icon: WarningRoundIcon,
				tone: 'border',
			},
			paused: {
				label: 'Paused',
				icon: ProgressPausedIcon,
				tone: 'border',
			},
			info: {
				label: 'Info',
				icon: InfoIcon,
				tone: 'border',
			},
			unknown: {
				label: 'Help',
				icon: HelpIcon,
				tone: 'border',
			},
			todo: {
				label: 'Todo',
				icon: ProgressTodoIcon,
				tone: 'border',
			},
			inProgress: {
				label: 'In Progress',
				icon: ProgressDoingIcon,
				tone: 'border',
			},
			blocked: {
				label: 'Blocked',
				icon: ProgressBlockedIcon,
				tone: 'border',
			},
		},
	},
};

export type StatusBadgeAppearance = 'subtle' | 'regular';

// Legacy

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
