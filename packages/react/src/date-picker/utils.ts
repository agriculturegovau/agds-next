import {
	isDate,
	format,
	parse,
	isValid,
	isBefore,
	isAfter,
	closestTo,
} from 'date-fns';

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

// The default calendar month is the first month to display when the date picker is opened
export function getCalendarDefaultMonth(
	valueAsDateOrUndefined: Date | undefined,
	initialMonth: Date | undefined,
	yearRange: { from: number; to: number } | undefined
): Date | undefined {
	// If the date picker has a `value` prop set, go to the month of that date
	if (valueAsDateOrUndefined) return valueAsDateOrUndefined;
	// If an `initialMonth` prop has been set, use that value
	if (initialMonth) return initialMonth;
	// If a `yearRange` prop has been set, use the closest day to todays date
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
}
