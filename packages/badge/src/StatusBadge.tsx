import { ReactNode } from 'react';
import { Box, Flex } from '@ag.ds-next/box';
import { boxPalette, mapSpacing } from '@ag.ds-next/core';
import {
	SuccessIcon,
	AlertIcon,
	InfoIcon,
	WarningIcon,
} from '@ag.ds-next/icon';
import { Text } from '@ag.ds-next/text';

export type StatusBadgeProps = {
	/** The status that is printed in the text label. */
	label: ReactNode;
	/** The colour tone to apply. */
	tone: StatusBadgeTone;
};

export const StatusBadge = ({ label, tone }: StatusBadgeProps) => {
	const { borderColor, icon: Icon } = toneMap[tone];
	return (
		<Flex
			display="inline-flex"
			alignItems="center"
			gap={0.5}
			height={height}
			paddingX={0.75}
			background="body"
			border
			css={{
				overflow: 'hidden',
				borderRadius,
				borderColor,
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
		icon: () => <SuccessIcon color="success" />,
	},
	error: {
		borderColor: boxPalette.systemError,
		icon: () => <AlertIcon color="error" />,
	},

	info: {
		borderColor: boxPalette.systemInfo,
		icon: () => <InfoIcon color="info" />,
	},
	warning: {
		borderColor: boxPalette.systemWarning,
		icon: () => <WarningIcon color="warning" />,
	},
} as const;
