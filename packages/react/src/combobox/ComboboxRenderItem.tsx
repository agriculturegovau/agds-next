import { Fragment, isValidElement, ReactNode } from 'react';
import { Text } from '../text';
import { Stack } from '../stack';
import { splitLabel } from './utils';

export type ComboboxRenderItemProps = {
	/** The label of the item. */
	itemLabel: string;
	/** The value of the Combobox/Autocomplete text input. */
	inputValue: string;
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
	return (
		<Fragment>
			{beforeElement ? (
				<div css={{ flexShrink: 0 }}>{beforeElement}</div>
			) : null}
			<Stack as="span">
				<span>{renderItemLabel(itemLabel, inputValue)}</span>
				{secondaryText ? (
					isValidElement(secondaryText) ? (
						secondaryText
					) : (
						<Text color="muted" fontSize="xs">
							{secondaryText}
						</Text>
					)
				) : null}
				{tertiaryText ? (
					isValidElement(tertiaryText) ? (
						tertiaryText
					) : (
						<Text color="muted" fontSize="xs">
							{tertiaryText}
						</Text>
					)
				) : null}
			</Stack>
			{endElement ? (
				<div css={{ marginLeft: 'auto', flexShrink: 0 }}>{endElement}</div>
			) : null}
		</Fragment>
	);
}

function renderItemLabel(itemLabel: string, inputValue: string) {
	return splitLabel(itemLabel, inputValue).map((part, index) => {
		const isHighlighted = part.toLowerCase() === inputValue.toLowerCase();
		if (isHighlighted) {
			return (
				<Text
					key={index}
					as="mark"
					display="inline"
					color="inherit"
					fontWeight="bold"
					css={{ background: 'none' }}
				>
					{part}
				</Text>
			);
		}
		return (
			<Text key={index} as="span" display="inline" color="inherit">
				{part}
			</Text>
		);
	});
}
