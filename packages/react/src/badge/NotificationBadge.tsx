import { mapSpacing, boxPalette } from '../core';
import { Text } from '../text';
import { badgeToneMap, BadgeTone } from './utils';

export type NotificationBadgeProps = {
	/** The number to show. */
	value: number;
	/** If value exceeds this number, show max+ instead. e.g. "99+". */
	max?: number;
	/** The colour tone to apply. */
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
