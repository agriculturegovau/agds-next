import { ReactNode } from 'react';
import { Box } from '../box';
import { Flex } from '../flex';
import { boxPalette, mapSpacing, tokens } from '../core';
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
	appearance?: StatusBadgeWeight;
	emphasis: 'high' | 'medium' | 'low';
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
	/** The visual weight to apply. */
	weight?: StatusBadgeWeight;
	/** The status that is printed in the text label. */
	label: ReactNode;
	/** The color tone to apply. */
	tone: StatusBadgeTone;
};

const map = {
	high: {
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
		status: {
			success: {
				label: 'Success',
				icon: SuccessIcon,
				tone: 'neutral',
			},
			error: {
				label: 'Error',
				icon: AlertIcon,
				tone: 'neutral',
			},
			warning: {
				label: 'Warning',
				icon: WarningRoundIcon,
				tone: 'neutral',
			},
			paused: {
				label: 'Paused',
				icon: ProgressPausedIcon,
				tone: 'neutral',
			},
			info: {
				label: 'Info',
				icon: InfoIcon,
				tone: 'neutral',
			},
			unknown: {
				label: 'Help',
				icon: HelpIcon,
				tone: 'neutral',
			},
			todo: {
				label: 'Todo',
				icon: ProgressTodoIcon,
				tone: 'neutral',
			},
			inProgress: {
				label: 'In Progress',
				icon: ProgressDoingIcon,
				tone: 'neutral',
			},
			blocked: {
				label: 'Blocked',
				icon: ProgressBlockedIcon,
				tone: 'neutral',
			},
		},
	},
};

export const StatusBadge = ({
	appearance,
	emphasis = 'high',
	status = 'error',
	label,
	weight = 'regular',
	tone,
}: StatusBadgeProps) => {
	const { borderColor, icon: Icon } = toneMap[tone || 'info'];
	const hasStatus = Boolean(status);
	const hasEmphasis = Boolean(emphasis);

	let resolvedStuff = {};

	if (hasStatus && hasEmphasis) {
		resolvedStuff = map[emphasis].status[status];
		const Icon = resolvedStuff.icon;
		return (
			<Flex
				display="inline-flex"
				alignItems="center"
				gap={0.5}
				css={{
					...(weight === 'regular' && {
						height,
						background: boxPalette.backgroundBody,
						borderWidth: tokens.borderWidth.sm,
						borderStyle: 'solid',
						// borderColor,
						borderRadius,
						paddingLeft: mapSpacing(1),
						paddingRight: mapSpacing(1),
					}),
					'& svg': {
						flexShrink: 0,
						width: iconWidth,
					},
				}}
			>
				<Icon
					aria-hidden="false"
					color={resolvedStuff.tone}
					aria-label={resolvedStuff.label}
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

	console.log(`resolvedStuff`, resolvedStuff);

	return (
		<Flex
			display="inline-flex"
			alignItems="center"
			gap={0.5}
			css={{
				...(weight === 'regular' && {
					height,
					background: boxPalette.backgroundBody,
					borderWidth: tokens.borderWidth.sm,
					borderStyle: 'solid',
					borderColor,
					borderRadius,
					paddingLeft: mapSpacing(1),
					paddingRight: mapSpacing(1),
				}),
				'& svg': {
					flexShrink: 0,
					width: iconWidth,
				},
			}}
		>
			<Icon />
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

const height = mapSpacing(2); // 32px
const borderRadius = mapSpacing(1); // 16px
const iconWidth = '1.375rem'; // 22px

export type StatusBadgeTone = keyof typeof toneMap;

const NeutralDot = () => (
	<Box
		highContrastOutline
		css={{
			width: 8,
			height: 8,
			borderRadius: 4,
			backgroundColor: boxPalette.foregroundMuted,
		}}
	/>
);

const toneMap = {
	neutral: {
		borderColor: boxPalette.border,
		icon: () => <NeutralDot />,
	},
	success: {
		borderColor: boxPalette.systemSuccess,
		icon: () => (
			<SuccessIcon color="success" aria-hidden="false" aria-label="Success" />
		),
	},
	error: {
		borderColor: boxPalette.systemError,
		icon: () => (
			<AlertIcon color="error" aria-hidden="false" aria-label="Error" />
		),
	},

	info: {
		borderColor: boxPalette.systemInfo,
		icon: () => (
			<InfoIcon color="info" aria-hidden="false" aria-label="Information" />
		),
	},
	warning: {
		borderColor: boxPalette.systemWarning,
		icon: () => (
			<WarningIcon color="warning" aria-hidden="false" aria-label="Warning" />
		),
	},
} as const;

export type StatusBadgeWeight = 'subtle' | 'regular';
