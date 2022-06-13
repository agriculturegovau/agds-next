import { ReactNode } from 'react';
import { Flex } from '@ag.ds-next/box';
import { forwardRefWithAs } from '@ag.ds-next/core';
import { IndicatorDot } from './IndicatorDot';
import { BadgeTone } from './utils';

export type BadgeProps = {
	label: ReactNode;
	tone: BadgeTone;
};

export const Badge = forwardRefWithAs<'div', BadgeProps>(function Badge(
	{ as = 'div', label, tone = 'info' },
	ref
) {
	return (
		<Flex
			ref={ref}
			as={as}
			display="inline-flex"
			alignItems="center"
			gap={0.5}
			paddingX={0.5}
			border
			borderColor="muted"
			rounded
			fontSize="sm"
			color="text"
			css={{ fontVariantNumeric: `tabular-nums` }}
		>
			<IndicatorDot tone={tone} />
			{label}
		</Flex>
	);
});
