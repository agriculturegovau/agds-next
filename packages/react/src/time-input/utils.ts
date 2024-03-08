// eslint-disable-next-line @typescript-eslint/ban-ts-comment
// @ts-ignore
import parseTimeOriginal from 'user-time';
// import { TimeFormat } from './TimeInput';

// Since the `value` prop can either be a date object, undefined or a string (which represents the text input value)
// we need to be able to take that value and transform it into the display value of the text input
// For example, if a `Date` object is passed we need to convert to to formatted date string (dd/mm/yyyy)

export const timeFormats = {
	'h:mm aaa': {
		hour: 'numeric',
		hourCycle: 'h12',
		minute: '2-digit',
	},
	'hh:mm aaa': {
		hour: '2-digit',
		hourCycle: 'h12',
		minute: '2-digit',
	},
	'HH:mm': {
		hour: '2-digit',
		hourCycle: 'h24',
		minute: '2-digit',
	},
} as const;

export type TimeFormat = keyof typeof timeFormats;

export function parseTime(value: string | undefined, timeFormat: TimeFormat) {
	try {
		const { formattedTime } = parseTimeOriginal(value, {
			timeFormat: timeFormats[timeFormat],
		});
		// console.log(`displayedTime.formattedTime`, displayedTime.formattedTime);
		// console.log(`standardTime.formattedTime`, standardTime.formattedTime);

		// onChangeProp?.(displayedTime.formattedTime);
		if (formattedTime.startsWith('24:')) {
			return `00:${formattedTime.split(':')[1]}`;
		}
		return formattedTime;
	} catch (e) {
		return value;
	}
}

// If `undefined` if passed, we need to convert to an empty string
export function transformValuePropToInputValue(
	valueProp: string | undefined,
	timeFormat: TimeFormat
): string {
	if (typeof valueProp === 'undefined') return '';
	return parseTime(valueProp, timeFormat);
}
