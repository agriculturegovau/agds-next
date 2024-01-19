import {
	isDate,
	format,
	parse,
	isValid,
	isBefore,
	isAfter,
	closestTo,
	isMatch,
} from 'date-fns';

// Date format is not configurable
const displayDateFormat = 'dd/MM/yyyy';

const acceptedDateFormats = [
	displayDateFormat, // 18/02/2023
	'dd-MM-yyyy', // 18-02-2023
	'MM/dd/yyyy', // 02/18/2023
	'MM-dd-yyyy', // 02-18-2023
	'do MMMM yyyy', // 8th February 2023
	'do MMM yyyy', // 8th Feb 2023
	'MMMM do yyyy', // February 8th 2023
	'MMM do yyyy', // Feb 8th 2023
	'd MMMM yyyy', // 8 February 2023
	'd MMM yyyy', // 8 Feb 2023
	'MMMM d yyyy', // February 8 2023
	'MMM d yyyy', // Feb 8 2023
	'dd MMMM yyyy', // 08 February 2023
	'dd MMM yyyy', // 08 Feb 2023
	'MMMM dd yyyy', // February 08 2023
	'MMM dd yyyy', // Feb 08 2023
];

export const formatDate = (date: Date) => format(date, displayDateFormat);

export const formatHumanReadableDate = (date: Date) =>
	format(date, 'do MMMM yyyy (EEEE)');

export const parseDate = (value: string) => {
	const now = new Date();

	for (const displayDateFormat of acceptedDateFormats) {
		// Split input value by spaces, slashes and dashes
		// e.g. '18/02/2023' => ['18', '02', '2023'], 18th February 2023 => ['18th', 'February', '2023'], 18-02-2023 => ['18', '02', '2023']
		const splitValue = value.split(/ |\/|-/g);

		let firstSegment = splitValue[0] || '';
		let secondSegment = splitValue[1] || '';
		const thirdSegment = splitValue[2] || '';

		// Don't attempt to parse dates that haven't got a complete year
		if (thirdSegment.length !== 4) {
			return;
		}

		// When users have types in single digit months or years, pad the start with '0'
		// e.g. '1/2/2023' => '01/02/2023'
		if (value.includes('/')) {
			firstSegment =
				firstSegment.length === 1 && !isNaN(Number(firstSegment))
					? firstSegment.padStart(2, '0')
					: firstSegment;
			secondSegment =
				secondSegment.length === 1 && !isNaN(Number(secondSegment))
					? secondSegment.padStart(2, '0')
					: secondSegment;
			value = [firstSegment, secondSegment, thirdSegment].join('/');
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
export function getDateInputButtonAriaLabel(value: string | undefined) {
	if (typeof value !== 'string') return 'Choose date';
	const parsed = parseDate(value);
	if (!parsed) return 'Choose date';
	return `Change date, ${formatHumanReadableDate(parsed)}`;
}
