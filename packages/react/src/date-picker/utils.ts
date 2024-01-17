import {
	isDate,
	format,
	parse,
	isValid,
	isBefore,
	isAfter,
	closestTo,
} from 'date-fns';

export const dateFormats = {
	'dd/mm/yyyy': {
		format: 'dd/MM/yyyy',
		display: 'dd/mm/yyyy',
	},
	'mm/dd/yyyy': {
		format: 'MM/dd/yyyy',
		display: 'mm/dd/yyyy',
	},
} as const;

export type DateFormat = keyof typeof dateFormats;

export const formatDate = (date: Date, displayDateFormat: DateFormat) =>
	format(date, dateFormats[displayDateFormat].format);

export const formatHumanReadableDate = (date: Date) =>
	format(date, 'do MMMM yyyy (EEEE)');

// https://github.com/date-fns/date-fns/issues/942
export const parseDate = (value: string, displayDateFormat: DateFormat) => {
	const format = dateFormats[displayDateFormat].format;

	let [first = '', second = '', third = ''] = value.split('/');

	// Ensure the first and segments (either day or month) are padded with a leading zero so users can type '1' instead of '01'
	first = first.length === 1 ? first.padStart(2, '0') : first;
	second = second.length === 1 ? second.padStart(2, '0') : second;
	// Ensure the third segment (year) is padded with '19' or '20' depending on the year, e.g. '19' becomes '2019' but '93' becomes '1993'
	third =
		third.length === 2
			? third.padStart(4, Number(third) > 50 ? '19' : '20')
			: third;

	const newValue = `${first}/${second}/${third}`;

	if (newValue.length !== format.length) return undefined;
	const parsed = parse(newValue, format, new Date());
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
	valueProp: Date | string | undefined,
	displayDateFormat: DateFormat
): string {
	if (typeof valueProp === 'string') return valueProp;
	if (typeof valueProp === 'undefined') return '';
	if (isValidDate(valueProp)) return formatDate(valueProp, displayDateFormat);
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
}

// Gets the `aria-label` for the button that opens the calendar picker
export function getDateInputButtonAriaLabel(
	value: string | undefined,
	displayDateFormat: DateFormat
) {
	if (typeof value !== 'string') return 'Choose date';
	const parsed = parseDate(value, displayDateFormat);
	if (!parsed) return 'Choose date';
	return `Change date, ${formatHumanReadableDate(parsed)}`;
}
