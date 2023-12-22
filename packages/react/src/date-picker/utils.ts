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
	if (isValidDate(parsed)) return parsed;

	return undefined;
};

function isValidDate(value: Date) {
	return isDate(value) && isValid(value);
}

// https://developer.mozilla.org/en-US/docs/Web/HTML/Element/input/date#min
// https://developer.mozilla.org/en-US/docs/Web/HTML/Element/input/date#max
export function constrainDate(
	date: Date | undefined,
	minDate: Date | undefined,
	maxDate: Date | undefined
) {
	if (!date) return date;
	if (minDate && isBefore(date, minDate)) return minDate;
	if (maxDate && isAfter(date, maxDate)) return maxDate;
	return date;
}

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

// Since the `value` prop can either be a date object, undefined or a string (which represents the text input value)
// we need to be able to take that value and transform it into the display value of the text input
// For example, if a `Date` object is passed we need to convert to to formatted date string (dd/mm/yyyy)
// If `undefined` if passed, we need to convert to an empty string
export function transformValuePropToInputValue(
	valueProp: Date | string | undefined
): string {
	if (typeof valueProp === 'string') return valueProp;
	if (typeof valueProp === 'undefined') return '';
	if (isValidDate(valueProp)) return formatDate(valueProp);
	return '';
}

export function getCalendarDefaultMonth(
	valueAsDateOrUndefined: Date | undefined,
	initialMonth: Date | undefined,
	yearRange: { from: number; to: number } | undefined
): Date | undefined {
	// If the date picker has a value, open up the month of the date value
	if (valueAsDateOrUndefined) return valueAsDateOrUndefined;
	// If an `initialMonth` prop has been set, use that value
	if (initialMonth) return initialMonth;
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
