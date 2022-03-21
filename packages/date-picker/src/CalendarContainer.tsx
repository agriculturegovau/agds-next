import React, { ReactNode } from 'react';
import {
	boxPalette,
	fontGrid,
	mapSpacing,
	packs,
	tokens,
} from '@ag.ds-next/core';

const componentTokens = {
	shadow: '0 1px 1px rgba(0, 0, 0, 0.3)',
};

export type CalendarContainerProps = {
	children: ReactNode;
};

export const CalendarContainer = ({ children }: CalendarContainerProps) => (
	<div
		css={{
			'& .DayPicker': {
				display: `inline-block`,
				fontSize: `1rem`,
				backgroundColor: boxPalette.backgroundBody,
				color: boxPalette.foregroundText,
				boxShadow: componentTokens.shadow,
				borderWidth: tokens.borderWidth.sm,
				borderStyle: 'solid',
				borderColor: boxPalette.borderMuted,
				borderRadius: tokens.borderRadius,
			},

			'& .DayPicker-wrapper': {
				position: `relative`,
				flexDirection: `row`,
				padding: `${mapSpacing(1)}`,
				'&:focus': packs.outline,
			},

			'& .DayPicker-Months': {
				display: `flex`,
				flexWrap: `wrap`,
				justifyContent: `center`,
				gap: mapSpacing(2),
			},

			'& .DayPicker-Month': {
				display: `table`,
				borderSpacing: 0,
				borderCollapse: `collapse`,
				userSelect: `none`,
			},

			'& .DayPicker-Caption': {
				display: `table-caption`,
				marginBottom: mapSpacing(1.5),
				textAlign: `center`,
			},

			'& .DayPicker-Caption > div': {
				...fontGrid('lg', 'nospace'),
				fontWeight: tokens.fontWeight.bold,
			},

			'& .DayPicker-Weekdays': {
				display: `table-header-group`,
			},

			'& .DayPicker-WeekdaysRow': {
				display: `table-row`,
			},

			'& .DayPicker-Weekday': {
				display: `table-cell`,
				textAlign: `center`,
				...fontGrid('sm', 'heading'),
				color: boxPalette.foregroundMuted,
				paddingBottom: mapSpacing(0.75),
			},

			'& .DayPicker-Weekday abbr[title]': {
				borderBottom: `none`,
				textDecoration: `none`,
			},

			'& .DayPicker-Body': {
				display: `table-row-group`,
			},

			'& .DayPicker-Week': {
				display: `table-row`,
			},

			'& .DayPicker-Day': {
				display: `table-cell`,
				verticalAlign: `middle`,
				borderRadius: tokens.borderRadius,
				width: mapSpacing(3),
				height: mapSpacing(3),
				textAlign: `center`,
				cursor: `pointer`,
				color: boxPalette.foregroundAction,
				'&:focus': packs.outline,
			},

			'& .DayPicker-Day--disabled': {
				opacity: `0.3`,
				cursor: `not-allowed`,
			},

			'& .DayPicker-Day--selected:not(.DayPicker-Day--outside)': {
				position: `relative`,
				backgroundColor: boxPalette.foregroundAction,
				color: boxPalette.backgroundBody,
			},

			'& .DayPicker-Day:not(.DayPicker-Day--selected):not(.DayPicker-Day--outside):hover':
				{
					backgroundColor: boxPalette.backgroundShade,
				},
		}}
	>
		{children}
	</div>
);
