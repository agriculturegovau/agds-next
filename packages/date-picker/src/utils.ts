import { isDate, format, parse, isValid, isBefore, isAfter } from 'date-fns';

// Date format is not configurable
const dateFormat = 'dd/MM/yyyy';

export const formatDate = (date: Date) => format(date, dateFormat);

export const formatHumanReadableDate = (date: Date) =>
	format(date, 'eeee MMMM do, yyyy');

// https://github.com/date-fns/date-fns/issues/942
export const parseDate = (value: string) => {
	if (value.length !== dateFormat.length) return undefined;

	const parsed = parse(value, dateFormat, new Date());
	if (isDate(parsed) && isValid(parsed)) return parsed;

	return undefined;
};

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
