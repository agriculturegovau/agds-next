import {
	closestTo,
	format,
	isAfter,
	isBefore,
	isDate,
	isMatch,
	isValid,
	parse,
	parseISO,
} from 'date-fns';

export const acceptedDateFormats = [
	'dd/MM/yyyy', // e.g. 18/02/2023
	'dd-MM-yyyy', // e.g. 18-02-2023
	'dd MM yyyy', // e.g. 18 02 2023
	'MM/dd/yyyy', // e.g. 02/18/2023
	'MM-dd-yyyy', // e.g. 02-18-2023
	'MM dd yyyy', // e.g. 02 18 2023
	'do MMMM yyyy', // e.g. 8th February 2023
	'do MMM yyyy', // e.g. 8th Feb 2023
	'MMMM do yyyy', // e.g. February 8th 2023
	'MMM do yyyy', // e.g. Feb 8th 2023
	'd MMMM yyyy', // e.g. 8 February 2023
	'd MMM yyyy', // e.g. 8 Feb 2023
	'MMMM d yyyy', // e.g. February 8 2023
	'MMM d yyyy', // e.g. Feb 8 2023
	'dd MMMM yyyy', // e.g. 08 February 2023
	'dd MMM yyyy', // e.g. 08 Feb 2023
	'MMMM dd yyyy', // e.g. February 08 2023
	'MMM dd yyyy', // e.g. Feb 08 2023
] as const;

export type AcceptedDateFormats = (typeof acceptedDateFormats)[number];

export const formatDate = (date: Date, dateformat: AcceptedDateFormats) =>
	format(date, dateformat);

export const formatHumanReadableDate = (date: Date) =>
	format(date, 'do MMMM yyyy EEEE');

export const parseDate = (
	value: string,
	dateFormats: ReadonlyArray<AcceptedDateFormats> = acceptedDateFormats
) => {
	const now = new Date();

	for (const displayDateFormat of dateFormats) {
		// Split input value by spaces, slashes and dashes
		// e.g. '18/02/2023' => ['18', '02', '2023'], 18th February 2023 => ['18th', 'February', '2023'], 18-02-2023 => ['18', '02', '2023']
		const splitValue = value.split(/ |\/|-/g);

		const yearSegment = splitValue[2] || '';

		// Don't attempt to parse dates that haven't got a complete year
		if (yearSegment.length !== 4) {
			return;
		}

		if (isMatch(value, displayDateFormat)) {
			const parsed = parse(value, displayDateFormat, now);
			if (isValidDate(parsed)) return parsed;
		}
	}

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
	dateFormat: AcceptedDateFormats
): string {
	if (
		typeof valueProp === 'string' &&
		parseISO(valueProp).toString() === 'Invalid Date'
	)
		return valueProp;
	if (typeof valueProp === 'undefined') return '';

	const valueAsDate =
		typeof valueProp === 'string' ? normaliseDateString(valueProp) : valueProp;
	if (valueAsDate && isValidDate(valueAsDate))
		return formatDate(valueAsDate, dateFormat);
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
export function getDateInputButtonAriaLabel({
	allowedDateFormats,
	rangeName,
	value,
}: {
	allowedDateFormats?: ReadonlyArray<AcceptedDateFormats>;
	rangeName?: 'start' | 'end';
	value?: string;
}) {
	const dateStr = rangeName ? `${rangeName} date` : 'date';
	if (typeof value !== 'string') return `Choose ${dateStr}`;
	const parsed = parseDate(value, allowedDateFormats);
	if (!parsed) return `Choose ${dateStr}`;
	return `Change ${dateStr}, ${formatHumanReadableDate(parsed)}`;
}

/**
 * Takes a string and converts ISO date strings to a Date object, otherwise converts the string to undefined.
 */
export const normaliseDateString = (date: string) => {
	const parsedISODate = parseISO(date);
	return parsedISODate.toString() === 'Invalid Date'
		? undefined
		: parsedISODate;
};
