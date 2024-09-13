import { Fragment, isValidElement, ReactNode } from 'react';
import { boxPalette, tokens } from '../core';
import { fontGrid } from '../core/utils/fontGrid';

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

const FONT_SIZE_LINE_HEIGHT = fontGrid('sm', 'default');

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
				<div css={{ flexShrink: 0 }}>{beforeElement}</div>
			) : null}
			<span
				css={{
					alignItems: 'stretch',
					display: 'flex',
					flexDirection: 'column',
				}}
			>
				<span>{renderItemLabel(itemLabel)}</span>
				{secondaryText ? (
					isValidElement(secondaryText) ? (
						secondaryText
					) : (
						<span
							css={{
								color: boxPalette.foregroundMuted,
								fontFamily: tokens.font.body,
								fontWeight: tokens.fontWeight.normal,
								...FONT_SIZE_LINE_HEIGHT,
							}}
						>
							{secondaryText}
						</span>
					)
				) : null}
				{tertiaryText ? (
					isValidElement(tertiaryText) ? (
						tertiaryText
					) : (
						<span
							css={{
								color: boxPalette.foregroundMuted,
								fontFamily: tokens.font.body,
								fontWeight: tokens.fontWeight.normal,
								...FONT_SIZE_LINE_HEIGHT,
							}}
						>
							{tertiaryText}
						</span>
					)
				) : null}
			</span>
			{endElement ? (
				<div css={{ flexShrink: 0, marginLeft: 'auto' }}>{endElement}</div>
			) : null}
		</Fragment>
	);
}

function renderItemLabel(itemLabel: string) {
	return (
		<span
			css={{
				color: 'inherit',
				fontFamily: tokens.font.body,
				fontWeight: tokens.fontWeight.normal,
				...FONT_SIZE_LINE_HEIGHT,
			}}
		>
			{itemLabel.split('').map((character, index) => (
				<span data-char={character.toLowerCase()} key={index}>
					{character}
				</span>
			))}
		</span>
	);
}
