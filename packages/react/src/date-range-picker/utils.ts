import { isBefore, isAfter } from 'date-fns';

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

export function getCalendarDefaultMonth(
	inputMode: 'from' | 'to' | undefined,
	valueAsDateOrUndefined: { from: Date | undefined; to: Date | undefined },
	yearRange: { from: number; to: number } | undefined
): Date | undefined {
	// If the date picker has a value, open up the month of the date value
	// Open up the 'from' date if the user has clicked the from picker
	if (valueAsDateOrUndefined) {
		if (inputMode === 'to') return valueAsDateOrUndefined.to;
		return valueAsDateOrUndefined.to;
	}

	// If a `yearRange` prop has been set, use the middle year of the range
	if (yearRange) {
		const middleYear = yearRange.from + (yearRange.to - yearRange.from) / 2;
		const date = new Date();
		date.setFullYear(middleYear);
		return date;
	}

	// Otherwise, returning undefined will fallback to the current month
	return undefined;
}
