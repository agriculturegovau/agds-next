import { ReactNode } from 'react';
import { Box } from '../box';
import { Flex } from '../flex';
import { boxPalette, mapSpacing, tokens } from '../core';
import { SuccessIcon, AlertIcon, InfoIcon, WarningIcon } from '../icon';
import { Text } from '../text';

export type StatusBadgeProps = {
	/** The visual weight to apply. */
	weight?: StatusBadgeWeight;
	/** The status that is printed in the text label. */
	label: ReactNode;
	/** The color tone to apply. */
	tone: StatusBadgeTone;
};

export const StatusBadge = ({
	label,
	weight = 'regular',
	tone,
}: StatusBadgeProps) => {
	const { borderColor, icon: Icon } = toneMap[tone];
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
