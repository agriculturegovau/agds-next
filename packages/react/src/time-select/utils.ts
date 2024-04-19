import { DefaultComboboxOption } from '../combobox';
import { formatTime, TimeFormat } from '../time-input/utils';

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
			// When 12 and 24 is typed, show 00:XX as a helper for all scenarios
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

export function generateTimeArray<Option>({
	min,
	max,
	step,
	timeFormat,
}: {
	min: string;
	max: string;
	step: number;
	timeFormat: TimeFormat;
}): Option[] {
	// Parse min and max times
	const [parsedMinHours, parsedMinMinutes] = parseTime(min);
	const [parsedMaxHours, parsedMaxMinutes] = parseTime(max);
	const validStep = Math.round(clampNumber(step, 1, 60));

	let minHours;
	let minMinutes;
	let maxHours;
	let maxMinutes;

	if (parsedMinHours > parsedMaxHours) {
		minHours = parsedMaxHours;
		minMinutes = parsedMaxMinutes;
		maxHours = parsedMinHours;
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

	// Initialize result array
	const result: Option[] = [];

	// Iterate through the time range and add times to the result array
	for (
		let totalMinutes = minTotalMinutes;
		totalMinutes <= maxTotalMinutes;
		totalMinutes += validStep
	) {
		const hours = Math.floor(totalMinutes / 60);
		const minutes = totalMinutes % 60;
		const HHmm = formatValue(hours, minutes);

		result.push({
			label: formatTime(HHmm, timeFormat),
			value: HHmm,
		});
	}

	return result;
}

function clampNumber(num: number, min: number, max: number) {
	return Math.min(Math.max(num, min), max);
}

function parseTime(timeString: string) {
	const [hours, minutes] = timeString.split(':').map(Number);

	return [clampNumber(hours, 0, 23), clampNumber(minutes, 0, 59)];
}

function formatValue(hours: number, minutes: number) {
	const formattedHours = String(hours).padStart(2, '0');
	const formattedMinutes = String(minutes).padStart(2, '0');
	return `${formattedHours}:${formattedMinutes}`;
}
