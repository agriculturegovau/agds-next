import { DefaultComboboxOption } from '../combobox';
import { formatTime } from '../time-input';

export function filterOptions<Option extends DefaultComboboxOption>(
	options: Option[],
	inputValue: string | undefined = '',
	selectedItems?: Option[]
) {
	const sanitizedInputValue = inputValue?.toLowerCase() ?? '';

	return options.filter(function filterOption(option) {
		const [hh, mm] = option.value.split(':');
		const hasMatch =
			hh.startsWith(sanitizedInputValue) ||
			mm.startsWith(sanitizedInputValue) ||
			option.label.toLowerCase().includes(sanitizedInputValue) ||
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
