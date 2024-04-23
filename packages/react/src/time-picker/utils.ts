import { type DefaultComboboxOption } from '../combobox/utils';
import { formatTime, type TimeFormat } from '../time-input/utils';

export function filterOptions<Option extends DefaultComboboxOption>(
	options: Option[],
	inputValue: string | undefined = '',
	selectedItems?: Option[]
) {
	const sanitizedInputValue =
		inputValue?.toLowerCase().replace(/\W/g, '') ?? '';

	return options.filter(function filterOption(option) {
		const HHmm = option.value.split(':').join('');
		const hasMatch =
			HHmm.includes(sanitizedInputValue) ||
			option.label.toLowerCase().includes(sanitizedInputValue) ||
			// When 12 and 24 is typed, show 00:XX options
			(HHmm.startsWith('00') &&
				sanitizedInputValue.length < 4 &&
				(sanitizedInputValue.startsWith('12') ||
					sanitizedInputValue.startsWith('24'))) ||
			formatTime(sanitizedInputValue, 'HH:mm') === option.value;

		if (typeof selectedItems === 'undefined') {
			return hasMatch;
		}

		return (
			hasMatch &&
			!selectedItems?.some(
				(item) => item.label === option.label && item.value === option.value
			)
		);
	});
}

export function generateOptions({
	interval,
	max,
	min,
	timeFormat,
}: {
	interval: number;
	max: string;
	min: string;
	timeFormat: TimeFormat;
}) {
	const [parsedMinHours, parsedMinMinutes] = parseTime(min);
	const [parsedMaxHours, parsedMaxMinutes] = parseTime(max);
	const validInterval = isNaN(Number(interval))
		? 60
		: Math.round(clampNumber(Number(interval), 1, 180));

	let minHours;
	let minMinutes;
	let maxHours;
	let maxMinutes;

	if (parsedMinHours > parsedMaxHours) {
		minHours = parsedMaxHours;
		minMinutes = parsedMaxMinutes;
		maxHours = parsedMinHours;
		maxMinutes = parsedMinMinutes;
	} else if (
		parsedMinHours === parsedMaxHours &&
		parsedMinMinutes > parsedMaxMinutes
	) {
		minHours = parsedMinHours;
		minMinutes = parsedMaxMinutes;
		maxHours = parsedMaxHours;
		maxMinutes = parsedMinMinutes;
	} else {
		minHours = parsedMinHours;
		minMinutes = parsedMinMinutes;
		maxHours = parsedMaxHours;
		maxMinutes = parsedMaxMinutes;
	}

	// Convert times to minutes
	const minTotalMinutes = minHours * 60 + minMinutes;
	const maxTotalMinutes = maxHours * 60 + maxMinutes;

	const options = [];

	// Iterate through the time range and add times to the options array
	for (
		let totalMinutes = minTotalMinutes;
		totalMinutes <= maxTotalMinutes;
		totalMinutes += validInterval
	) {
		const hours = Math.floor(totalMinutes / 60);
		const minutes = totalMinutes % 60;
		const HHmm = formatValue(hours, minutes);

		// We put midnight first, so don't also want it at the end. This also helps to clamp anything 24:XX
		if (hours !== 24) {
			const val = {
				label: formatTime(HHmm, timeFormat),
				value: HHmm,
			};

			options.push(val);
		}
	}

	return options;
}

export function clampNumber(num: number, min: number, max: number) {
	const clampedNumber = Math.min(Math.max(num, min), max);
	return isNaN(clampedNumber) ? 0 : clampedNumber;
}

export function parseTime(timeString: string) {
	const [hours, minutes] = timeString.split(':').map(Number);
	return [clampNumber(hours, 0, 24), clampNumber(minutes, 0, 59)];
}

export function formatValue(hours: number, minutes: number) {
	const formattedHours = String(hours).padStart(2, '0');
	const formattedMinutes = String(minutes).padStart(2, '0');
	return `${formattedHours}:${formattedMinutes}`;
}
