import { PropsWithChildren } from 'react';
import { Box } from '@ag.ds-next/box';
import { TextLink } from '@ag.ds-next/text-link';
import {
	boxPalette,
	forwardRefWithAs,
	globalPalette,
	LinkProps,
} from '@ag.ds-next/core';
import { Text } from '@ag.ds-next/text';

export type NotificationBadgeTone = keyof typeof TONE_BG_MAP;

export type NotificationBadgeProps = PropsWithChildren<{
	value: number;
	max?: number;
	tone?: NotificationBadgeTone;
}>;

export const NotificationBadge = forwardRefWithAs<
	'div',
	NotificationBadgeProps
>(function NotificationBadge({ as = 'div', value, max, tone = 'info' }, ref) {
	const backgroundColor = TONE_BG_MAP[tone];
	return (
		<Text
			ref={ref}
			as={as}
			palette="dark"
			display="inline-flex"
			paddingX={0.5}
			rounded
			fontSize="sm"
			color="text"
			css={{ backgroundColor, fontVariantNumeric: `tabular-nums` }}
		>
			{max === undefined || value <= max ? value : `${max}+`}
		</Text>
	);
});

const TONE_BG_MAP = {
	success: globalPalette.success,
	error: globalPalette.error,
	info: globalPalette.info,
	warning: globalPalette.warning,
} as const;
