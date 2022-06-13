import { forwardRef } from 'react';
import { mapSpacing } from '@ag.ds-next/core';
import { Text } from '@ag.ds-next/text';
import { badgeToneMap, BadgeTone } from './utils';

export type NotificationBadgeProps = {
	value: number;
	max?: number;
	tone: BadgeTone;
};

export const NotificationBadge = forwardRef<
	HTMLDivElement,
	NotificationBadgeProps
>(function NotificationBadge({ value, max, tone }, ref) {
	const backgroundColor = badgeToneMap[tone];
	return (
		<Text
			ref={ref}
			palette="dark"
			display="inline-flex"
			alignItems="center"
			justifyContent="center"
			height={mapSpacing(1.5)}
			paddingX={0.5}
			rounded
			fontSize="sm"
			lineHeight="nospace"
			color="text"
			css={{
				backgroundColor,
				minWidth: mapSpacing(1.5),
				borderRadius: mapSpacing(0.75),
			}}
		>
			{max === undefined || value <= max ? value : `${max}+`}
		</Text>
	);
});
