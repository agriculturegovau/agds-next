import { forwardRef, ReactNode } from 'react';
import { Flex } from '@ag.ds-next/box';
import { mapSpacing } from '@ag.ds-next/core';
import { IndicatorDot } from './IndicatorDot';
import { BadgeTone, badgeToneMap } from './utils';

export type StatusBadgeProps = {
	label: ReactNode;
	tone: BadgeTone;
};

export const StatusBadge = forwardRef<HTMLDivElement, StatusBadgeProps>(
	function Badge({ label, tone }, ref) {
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
				<IndicatorDot tone={tone} />
				{label}
			</Flex>
		);
	}
);
