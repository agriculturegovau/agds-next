import { isValid } from 'date-fns';

// This has been borrowed heavily from https://github.com/jrmedd/user-time
export const formatTime = (timeString = '', timeFormat: TimeFormat) => {
	if (!timeString) {
		return '';
	}

	const date = new Date();
	const time = (
		timeString.match(/\d+/) !== null
			? timeString.length === 3
				? timeString.match(/(\w{1})(\w{1,2})/).slice(1)
				: timeString.match(/\d{1,2}/gi)
			: []
	).map((digit) => Number(digit) | 0);

	if (
		time.length === 0 ||
		time.length > 3 ||
		time[0] > 24 ||
		(time.length > 1 && time[1] > 59)
	) {
		return timeString;
	}

	date.setHours(time[0]);
	date.setMinutes(time[1] ?? 0);
	date.setSeconds(time[2] ?? 0);

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
				date.setHours(time[0] === 12 ? 12 : time[0] + 12);
				break;
			default:
				date.setHours(time[0] % 12);
				break;
		}
	}

	const formattedTime = new Intl.DateTimeFormat(
		'en-GB',
		timeFormats[timeFormat]
	).format(date);

	if (timeFormat === 'HH:mm' && formattedTime.startsWith('24:')) {
		return `00:${formattedTime.split(':')[1]}`;
	} else {
		return formattedTime;
	}
};

export function isValidTime(value: string) {
	return isValid(new Date(`1970-01-01T${formatTime(value, 'HH:mm')}`));
}

export function transformValuePropToInputValue(
	valueProp: string | undefined,
	timeFormat: TimeFormat
): string {
	if (typeof valueProp === 'undefined') return '';
	return formatTime(valueProp, timeFormat);
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

export type AcceptedTimeFormats = (typeof acceptedTimeFormats)[number];
