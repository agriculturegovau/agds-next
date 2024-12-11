import { isValid } from 'date-fns';

// This has been borrowed heavily from https://github.com/jrmedd/user-time
export const formatTime = (timeString = '', timeFormat: TimeFormat) => {
	if (!timeString) {
		return '';
	}

	const date = new Date();
	const trimmedTimeString = timeString.replace(/\s/g, '');
	const time = (
		trimmedTimeString.match(/\d+/) !== null
			? trimmedTimeString.length === 3
				? trimmedTimeString.match(/(\w)(\w{1,2})/)?.slice(1) ?? []
				: trimmedTimeString.match(/\d{1,2}/gi) ?? []
			: []
	).map((digit) => Number(digit) | 0);

	if (time.length === 0 || time[0] > 24 || (time.length > 1 && time[1] > 59)) {
		return timeString;
	}

	if (time[0] <= 12) {
		const letters = timeString.match(/[a-zA-Z]{1,2}/) ?? [];
		const timeOfDay =
			letters.length > 0
				? letters[0]?.toLowerCase()
				: time[0] === 12
				? 'pm'
				: 'am';
		switch (timeOfDay) {
			case 'pm':
			case 'p':
				date.setHours(time[0] === 12 ? 12 : time[0] + 12);
				break;
			default:
				date.setHours(time[0] % 12);
				break;
		}
	} else {
		date.setHours(time[0]);
	}

	date.setMinutes(time[1] ?? 0);
	date.setSeconds(time[2] ?? 0);

	const formattedTime = new Intl.DateTimeFormat(
		'en-GB',
		timeFormats[timeFormat]
	).format(date);

	if (timeFormat === 'HH:mm' && formattedTime.startsWith('24:')) {
		return `00:${formattedTime.split(':')[1]}`;
	}

	return formattedTime;
};

export function isValidTime(value = '') {
	return isValid(new Date(`1970-01-01T${formatTime(value, 'HH:mm')}`));
}

export function transformValuePropToInputValue(
	value: string | undefined,
	timeFormat: TimeFormat
): string {
	if (typeof value === 'undefined') return '';
	return formatTime(value, timeFormat);
}

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

export const acceptedTimeFormats = Object.keys(
	timeFormats
) as Array<TimeFormat>;
