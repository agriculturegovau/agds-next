import {
	closestTo,
	differenceInCalendarMonths,
	isBefore,
	parseISO,
	subMonths,
} from 'date-fns';
import {
	type AcceptedDateFormats,
	formatHumanReadableDate,
	parseDate,
} from '../date-picker/utils';

// If the end date is before the start date, swap the end date with the start
// This prevents the users from typing invalid date ranges
export function ensureValidDateRange(dateRange: {
	from: Date | undefined;
	to: Date | undefined;
}) {
	const { to, from } = dateRange;

	if (from && to && isBefore(to, from)) {
		return { from: to, to: from };
	}

	return dateRange;
}

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
		if (inputMode === 'from' && valueAsDateOrUndefined.from) {
			return valueAsDateOrUndefined.from;
		}
		// Open up the 'to' date if the user has clicked the end date picker
		if (inputMode === 'to' && valueAsDateOrUndefined.to) {
			return valueAsDateOrUndefined.to;
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

	if (value && inputMode === 'to' && numberOfMonths === 2) {
		const monthsRangeCount = (() => {
			return valueAsDateOrUndefined?.from && valueAsDateOrUndefined?.to
				? differenceInCalendarMonths(
						valueAsDateOrUndefined.to,
						valueAsDateOrUndefined.from
				  )
				: -1;
		})();

		// If there is only 1 month between the "from" and "to" dates, show the "to" month on the left side so it matches the "from" date
		if (monthsRangeCount === 0) return value;

		// When there are 2 months being displayed (i.e. on desktop), show the "to" month on the right side
		return subMonths(value, 1);
	}

	return value;
}

// Gets the `aria-label` for the button that opens the start date calendar picker
export function getFromDateInputButtonAriaLabel(
	value: string | undefined,
	allowedDateFormats: ReadonlyArray<AcceptedDateFormats>
) {
	if (typeof value !== 'string') return 'Choose start date';
	const parsed = parseDate(value, allowedDateFormats);
	if (!parsed) return 'Choose start date';
	return `Change start date, ${formatHumanReadableDate(parsed)}`;
}

// Gets the `aria-label` for the button that opens the end date calendar picker
export function getToDateInputButtonAriaLabel(
	value: string | undefined,
	allowedDateFormats: ReadonlyArray<AcceptedDateFormats>
) {
	if (typeof value !== 'string') return 'Choose end date';
	const parsed = parseDate(value, allowedDateFormats);
	if (!parsed) return 'Choose end date';
	return `Change end date, ${formatHumanReadableDate(parsed)}`;
}

/**
 * Takes a string and converts ISO date strings to a Date object, otherwise converts the string to undefined.
 */
export const normaliseDateString = (date: string) =>
	parseISO(date).toString() === 'Invalid Date' ? undefined : parseISO(date);
