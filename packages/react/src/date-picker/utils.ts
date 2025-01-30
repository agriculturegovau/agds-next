import {
	format,
	isAfter,
	isBefore,
	isDate,
	isMatch,
	isValid,
	parse,
} from 'date-fns';
import {
	acceptedDateFormats,
	AcceptedDateFormats,
	normaliseDateString,
} from '../date-picker-next/utils';

export const formatDate = (date: Date, dateformat: AcceptedDateFormats) =>
	format(date, dateformat);

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
	if (valueProp === undefined) return '';

	const valueAsDateOrUndefined =
		typeof valueProp === 'string' ? normaliseDateString(valueProp) : valueProp;

	if (valueAsDateOrUndefined === undefined) return valueProp.toString();

	if (isValidDate(valueAsDateOrUndefined))
		return formatDate(valueAsDateOrUndefined, dateFormat);

	return '';
}
