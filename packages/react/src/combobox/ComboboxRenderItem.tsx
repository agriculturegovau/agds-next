import { Fragment, isValidElement, ReactNode, useMemo } from 'react';
// import { boxPalette, tokens } from '../core';
// import { fontGrid } from '../core/utils/fontGrid';

export type ComboboxRenderItemProps = {
	/** The label of the item. */
	itemLabel: string;
	/** @deprecated Unused. Individual items no longer need to know the value of the Combobox/Autocomplete text input. */
	inputValue?: string;
	/** Supporting text for the item. */
	tertiaryText?: ReactNode;
	/** Supporting text for the item. */
	secondaryText?: ReactNode;
	/** Used to add decorative elements to the end of the item such as Indicator dot or Notification badge. */
	beforeElement?: ReactNode;
	/** Used to add decorative elements to the end of the item such as Indicator dot or Notification badge. */
	endElement?: ReactNode;
};

// const FONT_SIZE_LINE_HEIGHT = fontGrid('sm', 'default');

export function ComboboxRenderItem({
	itemLabel,
	inputValue,
	beforeElement,
	endElement,
	secondaryText,
	tertiaryText,
}: ComboboxRenderItemProps) {
	// deprecation warnings
	if (process.env.NODE_ENV !== 'production' && inputValue) {
		console.warn('Combobox: The `inputValue` prop is now unused.');
	}

	const renderedLabel = useMemo(() => renderItemLabel(itemLabel), [itemLabel]);

	return (
		<Fragment>
			{beforeElement ? (
				<div data-combobox-render-item="beforeElement">{beforeElement}</div>
			) : null}
			<span data-combobox-render-item="itemLabel">
				{renderedLabel}
				{secondaryText ? (
					isValidElement(secondaryText) ? (
						secondaryText
					) : (
						<span data-combobox-render-item="secondaryText">
							{secondaryText}
						</span>
					)
				) : null}
				{tertiaryText ? (
					isValidElement(tertiaryText) ? (
						tertiaryText
					) : (
						<span data-combobox-render-item="tertiaryText">{tertiaryText}</span>
					)
				) : null}
			</span>
			{endElement ? (
				<div data-combobox-render-item="endElement">{endElement}</div>
			) : null}
		</Fragment>
	);
}

function renderItemLabel(itemLabel: string) {
	return (
		<span aria-label={itemLabel} data-combobox-render-item="renderedLabel">
			{itemLabel.split('').map((character, index) => (
				<span data-char={character} key={index}>
					{character}
				</span>
			))}
		</span>
	);
}
