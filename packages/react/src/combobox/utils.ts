import { useId } from '../core';

export function useComboboxInputId(idProp?: string) {
	const autoId = useId();
	return idProp || `combobox-input-${autoId}`;
}

export type DefaultComboboxOption = { label: string; value: string };

export function filterOptions<Option extends DefaultComboboxOption>(
	options: Option[],
	inputValue: string | undefined = '',
	selectedItems?: Option[]
) {
	const sanitizedInputValue = inputValue?.toLowerCase() || '';

	return options.filter(function filterOption(option) {
		const hasMatch =
			option.value.toLowerCase().includes(sanitizedInputValue) ||
			option.label.toLowerCase().includes(sanitizedInputValue);

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

/**
 * @param optionLabel The display label of the option (eg. "Australia", "New Zealand" etc)
 * @param inputValue The value of the text input (eg. "Aust")
 */
export function splitLabel(optionLabel: string, inputValue: string) {
	if (!inputValue) return [optionLabel];

	const iinputValue = inputValue.toLowerCase();
	const ilabel = optionLabel.toLowerCase();
	const results = [];

	let i = 0;

	while (i < optionLabel.length) {
		const part = optionLabel.slice(i);
		const ipart = ilabel.slice(i);
		const x = ipart.indexOf(iinputValue);
		if (x === -1) {
			results.push(part);
			return results;
		}
		if (x !== 0) results.push(part.slice(0, x));
		results.push(part.slice(x, x + iinputValue.length));
		i += x + iinputValue.length;
	}

	return results;
}
