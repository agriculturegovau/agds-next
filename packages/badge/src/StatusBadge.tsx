import { ReactNode } from 'react';
import { Flex } from '@ag.ds-next/box';
import { boxPalette, globalPalette, mapSpacing } from '@ag.ds-next/core';
import {
	SuccessIcon,
	AlertIcon,
	InfoIcon,
	WarningIcon,
} from '@ag.ds-next/icon';
import { IndicatorDot } from './IndicatorDot';

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
			fontSize="sm"
			lineHeight="nospace"
			background="body"
			color="text"
			border
			css={{ borderRadius, borderColor }}
		>
			<Icon />
			{label}
		</Flex>
	);
};

const height = mapSpacing(2); // 32px
const borderRadius = mapSpacing(1); // 16px
const iconWidth = '1.375rem'; // 22px

export type StatusBadgeTone = keyof typeof toneMap;

const toneMap = {
	neutral: {
		borderColor: boxPalette.border,
		icon: () => <IndicatorDot tone="neutral" />,
	},
	success: {
		borderColor: globalPalette.success,
		icon: () => <SuccessIcon color="success" css={{ width: iconWidth }} />,
	},
	error: {
		borderColor: globalPalette.error,
		icon: () => <AlertIcon color="error" css={{ width: iconWidth }} />,
	},

	info: {
		borderColor: globalPalette.info,
		icon: () => <InfoIcon color="info" css={{ width: iconWidth }} />,
	},
	warning: {
		borderColor: globalPalette.warning,
		icon: () => <WarningIcon color="warning" css={{ width: iconWidth }} />,
	},
} as const;
