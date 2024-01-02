import { isBefore, isAfter, subMonths } from 'date-fns';

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

// Ensure a valid date range is always sent back to the consumer
export function getValidDateRange(
	inputMode: 'from' | 'to',
	selectedDay: Date,
	currentRange: { from: Date | undefined; to: Date | undefined }
) {
	// The user is selecting a start date
	if (inputMode === 'from') {
		// If a start date has not been set, we can continue on
		if (!currentRange.to) return { from: selectedDay, to: undefined };

		// Ensure the start date is before the end date
		return isBefore(selectedDay, currentRange.to)
			? { from: selectedDay, to: currentRange.to }
			: { from: selectedDay, to: undefined };
	}

	// The user is selecting a end date
	// If a start date has not been set, we can continue on
	if (!currentRange.from) return { from: undefined, to: selectedDay };

	// Ensure the end date is after the start date
	return isAfter(selectedDay, currentRange.from)
		? { from: currentRange.from, to: selectedDay }
		: { from: selectedDay, to: undefined };
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

		// If a `yearRange` prop has been set, use the middle year of the range
		if (yearRange) {
			const middleYear = yearRange.from + (yearRange.to - yearRange.from) / 2;
			const date = new Date();
			date.setFullYear(middleYear);
			return date;
		}

		// Otherwise, returning undefined will fallback to the current month (react-day-picker behaviour)
		return undefined;
	})();

	// When there are 2 months being displayed (i.e. on desktop), show the "to" month on the right side
	if (value && inputMode === 'to' && numberOfMonths === 2) {
		return subMonths(value, 1);
	}

	return value;
}
