export type DefaultComboboxOption = { label: string; value: string };

export function filterOptions<Option extends DefaultComboboxOption>(
	options: Option[],
	inputValue: string
) {
	inputValue = inputValue.toLowerCase();
	return options.filter(
		({ value, label }) =>
			value.toLowerCase().includes(inputValue) ||
			label.toLowerCase().includes(inputValue)
	);
}

export function splitLabel(label: string, inputValue: string) {
	if (!inputValue) return [label];
	return label.split(new RegExp(`(${inputValue})`, 'gi')).filter(Boolean);
}
