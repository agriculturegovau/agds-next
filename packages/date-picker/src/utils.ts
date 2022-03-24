import { isBefore, isAfter } from 'date-fns';

export type DateRange = {
	from: Date | undefined;
	to: Date | undefined;
};

// Ensure a valid date range is always sent back to the consumer
export function getValidDateRange(
	mode: 'start' | 'end',
	selectedDay: Date,
	currentRange: DateRange
) {
	// The user is selecting a start date
	if (mode === 'start') {
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
