import { mapSpacing, boxPalette } from '@ag.ds-next/core';
import { Text } from '@ag.ds-next/text';
import { badgeToneMap, BadgeTone } from './utils';

export type NotificationBadgeProps = {
	/** The number to show. */
	value: number;
	/** If value exceeds this number, show max+ instead. e.g. "99+". */
	max?: number;
	/** The colour tone to apply. */
	tone?: BadgeTone;
};

export const NotificationBadge = ({
	value,
	max,
	tone,
}: NotificationBadgeProps) => {
	const backgroundColor = tone ? badgeToneMap[tone] : 'currentColor';
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
				color: 'inherit',
				backgroundColor,
				minWidth: mapSpacing(1.5),
				borderRadius: mapSpacing(0.75),
			}}
		>
			<span css={{ color: boxPalette.backgroundBody }}>
				{max === undefined || value <= max ? value : `${max}+`}
			</span>
		</Text>
	);
};
