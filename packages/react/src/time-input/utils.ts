// eslint-disable-next-line @typescript-eslint/ban-ts-comment
// @ts-ignore
import parseTime from 'user-time';

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

export function formatTime(value: string | undefined, timeFormat: TimeFormat) {
	try {
		const { formattedTime } = parseTime(value, {
			timeFormat: timeFormats[timeFormat],
		});
		// console.log(`displayedTime.formattedTime`, displayedTime.formattedTime);
		// console.log(`standardTime.formattedTime`, standardTime.formattedTime);

		// onChangeProp?.(displayedTime.formattedTime);
		if (timeFormat === 'HH:mm' && formattedTime.startsWith('24:')) {
			return `00:${formattedTime.split(':')[1]}`;
		}
		return formattedTime;
	} catch (e) {
		console.warn(e);
		return value;
	}
}

export function isValidTime(value: string) {
	try {
		parseTime(value, {
			timeFormat: 'HH:mm',
		});
		return true;
	} catch (e) {
		return false;
	}
}

// If `undefined` if passed, we need to convert to an empty string
export function transformValuePropToInputValue(
	valueProp: string | undefined,
	timeFormat: TimeFormat
): string {
	if (typeof valueProp === 'undefined') return '';
	return formatTime(valueProp, timeFormat);
}
