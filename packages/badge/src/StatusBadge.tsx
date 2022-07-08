import { forwardRef, ReactNode } from 'react';
import { Flex } from '@ag.ds-next/box';
import { mapSpacing } from '@ag.ds-next/core';
import {
	SuccessIcon,
	AlertIcon,
	InfoIcon,
	WarningIcon,
} from '@ag.ds-next/icon';
import { IndicatorDot } from './IndicatorDot';
import { BadgeTone, badgeToneMap } from './utils';

export type StatusBadgeProps = {
	label: ReactNode;
	tone: BadgeTone;
};

// Icon width is 22px
const width = '1.375em';
const iconMap = {
	neutral: () => <IndicatorDot tone="neutral" />,
	success: () => <SuccessIcon color="success" css={{ width }} />,
	error: () => <AlertIcon color="error" css={{ width }} />,
	info: () => <InfoIcon color="info" css={{ width }} />,
	warning: () => <WarningIcon color="warning" css={{ width }} />,
};

export const StatusBadge = forwardRef<HTMLDivElement, StatusBadgeProps>(
	function StatusBadge({ label, tone }, ref) {
		const Indicator = iconMap[tone];
		return (
			<Flex
				ref={ref}
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
					borderColor: badgeToneMap[tone],
				}}
			>
				<Indicator />
				{label}
			</Flex>
		);
	}
);
