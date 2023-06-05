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

		return hasMatch && !selectedItems.includes(option);
	});
}

export function splitLabel(label: string, inputValue: string) {
	if (!inputValue) return [label];

	const iinput = inputValue.toLowerCase();
	const isource = label.toLowerCase();
	const results = [];

	let i = 0;
	while (i < label.length) {
		const part = label.slice(i);
		const ipart = isource.slice(i);
		const x = ipart.indexOf(iinput);
		if (x === -1) {
			results.push(part);
			return results;
		}

		if (x !== 0) results.push(part.slice(0, x));
		results.push(part.slice(x, x + iinput.length));
		i += x + iinput.length;
	}

	return results;
}
