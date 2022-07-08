import { mapSpacing, boxPalette } from '@ag.ds-next/core';
import { Text } from '@ag.ds-next/text';
import { badgeToneMap, BadgeTone } from './utils';

export type NotificationBadgeProps = {
	value: number;
	max?: number;
	tone: BadgeTone;
};

export const NotificationBadge = ({
	value,
	max,
	tone,
}: NotificationBadgeProps) => {
	const backgroundColor = badgeToneMap[tone];
	return (
		<Text
			display="inline-flex"
			alignItems="center"
			justifyContent="center"
			height={mapSpacing(1.5)}
			paddingX={0.5}
			rounded
			fontSize="sm"
			lineHeight="nospace"
			css={{
				color: boxPalette.backgroundBody,
				backgroundColor,
				minWidth: mapSpacing(1.5),
				borderRadius: mapSpacing(0.75),
			}}
		>
			{max === undefined || value <= max ? value : `${max}+`}
		</Text>
	);
};
