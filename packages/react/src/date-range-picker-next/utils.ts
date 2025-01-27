import {
	addDays,
	addMonths,
	closestTo,
	differenceInDays,
	isAfter,
	isBefore,
	subDays,
	subMonths,
} from 'date-fns';

// The default calendar month is the first month to display when the date picker is opened
export function getCalendarDefaultMonth(
	inputMode: 'from' | 'to' | undefined,
	valueAsDateOrUndefined: { from: Date | undefined; to: Date | undefined },
	yearRange: { from: number; to: number } | undefined,
	numberOfMonths: 1 | 2
): Date | undefined {
	const value = (() => {
		// If the date picker has a value, open up the month of the date value
		// Open up the 'from' date if the user has clicked the start date picker
		if (inputMode === 'from') {
			if (
				valueAsDateOrUndefined.from &&
				valueAsDateOrUndefined.to &&
				isAfter(valueAsDateOrUndefined.from, valueAsDateOrUndefined.to)
			) {
				return subMonths(
					valueAsDateOrUndefined.to,
					numberOfMonths === 2 ? 1 : 0
				);
			}
			if (valueAsDateOrUndefined.from) return valueAsDateOrUndefined.from;
			if (valueAsDateOrUndefined.to)
				return subMonths(
					valueAsDateOrUndefined.to,
					numberOfMonths === 2 ? 1 : 0
				);
			return undefined;
		}
		// Open up the 'to' date if the user has clicked the end date picker
		if (inputMode === 'to') {
			if (
				valueAsDateOrUndefined.from &&
				valueAsDateOrUndefined.to &&
				isBefore(valueAsDateOrUndefined.to, valueAsDateOrUndefined.from)
			) {
				return addMonths(valueAsDateOrUndefined.from, 0);
			}
			if (valueAsDateOrUndefined.to)
				return subMonths(
					valueAsDateOrUndefined.to,
					numberOfMonths === 2 ? 1 : 0
				);
			if (valueAsDateOrUndefined.from)
				return addMonths(valueAsDateOrUndefined.from, 0);
			return undefined;
		}
		// If a `yearRange` prop has been set, use the closest day to today's date
		if (yearRange) {
			// Create a date on the first day of the range
			const earliestDateInRange = new Date(yearRange.from, 0, 1);
			// Create a date on the last day of the range
			const lastDateInRange = new Date(yearRange.to, 11, 31);
			// Use the closest day to today's date
			return closestTo(new Date(), [earliestDateInRange, lastDateInRange]);
		}
		// Otherwise, returning undefined will fallback to the current month (react-day-picker behaviour)
		return undefined;
	})();

	return value;
}

export const getHoverRange = (
	inputMode?: 'from' | 'to',
	hoveredDay?: string, // ISOString
	fromDate?: Date,
	toDate?: Date
) => {
	const range: Record<string, boolean> = {};

	let startRangeDate;
	let endRangeDate;
	const hoveredDayAsDate = hoveredDay && new Date(hoveredDay);

	if (inputMode === 'from') {
		startRangeDate =
			hoveredDayAsDate && fromDate && hoveredDayAsDate < fromDate
				? hoveredDayAsDate
				: fromDate || hoveredDayAsDate;
		endRangeDate = toDate;
	}

	if (inputMode === 'to') {
		startRangeDate = fromDate;
		endRangeDate =
			hoveredDayAsDate && toDate && hoveredDayAsDate > toDate
				? hoveredDayAsDate
				: hoveredDayAsDate || toDate;
	}

	if (!startRangeDate || !endRangeDate) return range;

	const diffCount = differenceInDays(endRangeDate, startRangeDate);

	if (diffCount < 1) return range;

	if (diffCount > 60) {
		if (inputMode === 'from') {
			endRangeDate = addDays(startRangeDate, 60);
		} else {
			startRangeDate = subDays(endRangeDate, 60);
		}
	}

	while (startRangeDate < endRangeDate) {
		range[startRangeDate.toISOString()] = true;
		startRangeDate = addDays(startRangeDate, 1);
	}

	return range;
};
