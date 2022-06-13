import { PropsWithChildren, ReactNode } from 'react';
import { Box, Flex } from '@ag.ds-next/box';
import { TextLink } from '@ag.ds-next/text-link';
import {
	boxPalette,
	forwardRefWithAs,
	globalPalette,
	LinkProps,
} from '@ag.ds-next/core';
import { Text } from '@ag.ds-next/text';
import { IndicatorDot } from './IndicatorDot';

export type BadgeTone = keyof typeof TONE_BG_MAP;

export type BadgeProps = {
	label: ReactNode;
	tone: BadgeTone;
};

export const Badge = forwardRefWithAs<'div', BadgeProps>(function Badge(
	{ as = 'div', label, tone = 'info' },
	ref
) {
	const backgroundColor = TONE_BG_MAP[tone];
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

const TONE_BG_MAP = {
	success: globalPalette.success,
	error: globalPalette.error,
	info: globalPalette.info,
	warning: globalPalette.warning,
} as const;
