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
	/** The status that is printed in the text label */
	label: ReactNode;
	/** The colour tone to apply */
	tone: StatusBadgeTone;
};

export const StatusBadge = ({ label, tone }: StatusBadgeProps) => {
	const { color, icon: Icon } = toneMap[tone];
	return (
		<Flex
			// ref={ref}
			display="inline-flex"
			alignItems="center"
			gap={0.5}
			height={mapSpacing(2)}
			paddingX={0.75}
			fontSize="sm"
			lineHeight="nospace"
			background="body"
			color="text"
			border
			css={{
				borderRadius: mapSpacing(1),
				borderColor: color,
			}}
		>
			<Icon />
			{label}
		</Flex>
	);
};

// Icon width is 22px
const width = '1.375em';
export type StatusBadgeTone = keyof typeof toneMap;
const toneMap = {
	neutral: {
		color: boxPalette.border,
		icon: () => <IndicatorDot tone="neutral" />,
	},
	success: {
		color: globalPalette.success,
		icon: () => <SuccessIcon color="success" css={{ width }} />,
	},
	error: {
		color: globalPalette.error,
		icon: () => <AlertIcon color="error" css={{ width }} />,
	},

	info: {
		color: globalPalette.info,
		icon: () => <InfoIcon color="info" css={{ width }} />,
	},
	warning: {
		color: globalPalette.warning,
		icon: () => <WarningIcon color="warning" css={{ width }} />,
	},
} as const;
