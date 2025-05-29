import { type CSSProperties, useMemo } from 'react';
import { canUseDOM, useId } from '../core';

export function useComboboxInputId(idProp?: string) {
	const autoId = useId();
	return idProp || `combobox-input-${autoId}`;
}

const comboboxMaxWidthValues = ['md', 'lg', 'xl'] as const;
export type ComboboxMaxWidthValues = (typeof comboboxMaxWidthValues)[number];

export function validateMaxWidth(
	componentType: string,
	maxWidth: ComboboxMaxWidthValues
) {
	if (
		process.env.NODE_ENV !== 'production' &&
		!comboboxMaxWidthValues.includes(maxWidth)
	) {
		console.warn(
			`${componentType}: The \`maxWidth\` value "${maxWidth}" is not supported. Supported values are: ${comboboxMaxWidthValues.join(
				', '
			)}`
		);
	}
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
 * @param inputValue The value of the text input (eg. "Aust")
 */
export function generateHighlightStyles(
	inputValue?: string
): Record<string, CSSProperties> {
	const styles: Record<string, CSSProperties> = {};
	if (!inputValue) return styles;

	const characters = inputValue.toLowerCase().split('');

	characters.forEach((_, index) => {
		// When typing "abc"
		// This generates things like [data-char="a" i] + [data-char="b" i] + [data-char="c" i]
		// to ensure we select consecutive elements
		const baseSelector = characters
			.slice(0, index + 1)
			.map((char) => `[data-char="${char}" i]`)
			.join(' + ');

		// This generates things like [data-char="a" i]:has(+ [data-char="b" i] + [data-char="c" i])
		// to ensure we select earlier elements whose later siblings match
		const hasSelector = characters
			.slice(index + 1)
			.map((char) => `+ [data-char="${char}" i]`)
			.join(' ');

		const fullSelector = hasSelector
			? `${baseSelector}:has(${hasSelector})`
			: baseSelector;

		styles[fullSelector] = {
			fontWeight: 'bold',
		};
	});

	return styles;
}

export function useIsIos() {
	const isIos = useMemo(() => {
		if (!canUseDOM()) return false;

		return (
			// See https://github.com/stowball/Layout-Engine/blob/master/layout.engine.js#L86
			CSS &&
			CSS?.supports('-webkit-appearance', '-apple-pay-button') &&
			CSS?.supports('-webkit-overflow-scrolling', 'auto')
		);
	}, []);

	return isIos;
}
