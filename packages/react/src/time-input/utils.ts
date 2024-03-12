// eslint-disable-next-line @typescript-eslint/ban-ts-comment
// @ts-ignore
// import parseTime from 'user-time';

const parseTime = (
	timeString,
	{
		defaultDate = new Date(),
		defaultTimeOfDay = 'am',
		timeFormat = { minute: 'numeric', hour: 'numeric', hourCycle: 'h12' },
	} = {}
) => {
	if (typeof timeString !== 'string') throw new Error('Strings only');
	const date = defaultDate;
	// eslint-disable-next-line no-nested-ternary
	console.log(`timeString`, timeString);
	const time = (
		timeString.match(/\d+/) !== null
			? timeString.length === 3
				? timeString.match(/(\w{1})(\w{1,2})/).slice(1)
				: timeString.match(/\d{1,2}/gi)
			: []
	)
		// eslint-disable-next-line no-bitwise
		.map((digit) => digit | 0);

	let error = false;
	console.log(`time`, time);
	console.log(`time.join(':')`, time.join(':'));
	console.log(`timeString === time.join(':')`, timeString === time.join(':'));
	if (time.length === 0 || time.length > 3) error = true;
	if (time[0] > 24) error = true;
	if (time.length > 1 && time[1] > 59) error = true;
	if (error) throw new Error('Unable to parse time');
	// console.log(`time`, time);
	// console.log(`timeString`, timeString);
	date.setHours(time[0]);
	date.setMinutes(time[1] ?? 0);
	date.setSeconds(time[2] ?? 0);
	console.log(`date 1`, date);
	if (time[0] <= 12) {
		const letters = timeString.match(/[a-zA-Z]{1,2}/) ?? [];
		console.log(`letters`, letters);
		const timeOfDay =
			letters.length > 0 ? letters[0].toLowerCase() : defaultTimeOfDay;
		console.log(`timeOfDay`, timeOfDay);
		switch (timeOfDay) {
			case 'pm':
				date.setHours(time[0] === 12 ? 12 : time[0] + 12);
				break;
			default:
				date.setHours(time[0] % 12);
				break;
		}
	}
	console.log(`date 2`, date);
	// return {
	// 	ISOString: date.toISOString(),
	// formattedTime: new Intl.DateTimeFormat('en-GB', timeFormat).format(date),
	// };

	return new Intl.DateTimeFormat('en-GB', timeFormat).format(date);
};

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

export const acceptedTimeFormats = ['h:mm aaa', 'hh:mm aaa', 'HH:mm'] as const;

export type AcceptedTimeFormats = (typeof acceptedTimeFormats)[number];

export function formatTime(value: string | undefined, timeFormat: TimeFormat) {
	try {
		const formattedTime = parseTime(value, {
			// defaultDate: new Date(),
			// defaultTimeOfDay: 'am',
			timeFormat: timeFormats[timeFormat],
		});
		// console.log(`formattedTime`, formattedTime);
		// const foo = parseTime(value);
		// console.log(`value`, value);
		// console.log(`foo`, foo);

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
			timeFormat: timeFormats['HH:mm'],
		});

		return true;
	} catch (e) {
		return false;
	}
}

export function transformValuePropToInputValue(
	valueProp: string | undefined,
	timeFormat: TimeFormat
): string {
	if (typeof valueProp === 'undefined') return '';
	return formatTime(valueProp, timeFormat);
}
