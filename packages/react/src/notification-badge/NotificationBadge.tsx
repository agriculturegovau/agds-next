import { HTMLAttributes } from 'react';
import { print, boxPalette, mapSpacing } from '../core';
import { Text } from '../text';
import { BadgeTone, badgeToneMap } from './utils';

export type NotificationBadgeProps = {
	/** The number to show. */
	value: number;
	/** If value exceeds this number, show max+ instead. e.g. "99+". */
	max?: number;
	/** The colour tone to apply. */
	tone: BadgeTone;
	/** If true, the element will be hidden from assistive technologies. */
	'aria-hidden'?: HTMLAttributes<HTMLSpanElement>['aria-hidden'];
};

export const NotificationBadge = ({
	value,
	max,
	tone,
	'aria-hidden': ariaHidden,
}: NotificationBadgeProps) => {
	const backgroundColor = badgeToneMap[tone];
	return (
		<Text
			alignItems="center"
			aria-hidden={ariaHidden}
			css={{
				color: boxPalette.backgroundBody,
				backgroundColor,
				minWidth: mapSpacing(1.5),
				borderRadius: mapSpacing(0.75),
				...print.exactColor,
			}}
			display="inline-flex"
			fontSize="sm"
			height={mapSpacing(1.5)}
			highContrastOutline
			justifyContent="center"
			lineHeight="nospace"
			paddingX={0.5}
			rounded
		>
			{max === undefined || value <= max ? value : `${max}+`}
		</Text>
	);
};
