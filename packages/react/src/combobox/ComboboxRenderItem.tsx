import { Fragment, isValidElement, ReactNode } from 'react';

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

	return (
		<Fragment>
			{beforeElement ? (
				<div data-combobox-render-item="beforeElement">{beforeElement}</div>
			) : null}
			<span data-combobox-render-item="itemLabel">
				{itemLabel}
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
