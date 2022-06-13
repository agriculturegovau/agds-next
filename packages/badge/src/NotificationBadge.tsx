import { forwardRefWithAs } from '@ag.ds-next/core';
import { Text } from '@ag.ds-next/text';
import { badgeToneMap, BadgeTone } from './utils';

export type NotificationBadgeProps = {
	value: number;
	max?: number;
	tone: BadgeTone;
};

export const NotificationBadge = forwardRefWithAs<
	'div',
	NotificationBadgeProps
>(function NotificationBadge({ as = 'div', value, max, tone }, ref) {
	const backgroundColor = badgeToneMap[tone];
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
