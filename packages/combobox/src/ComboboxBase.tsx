import { Fragment, useState } from 'react';
import { UseComboboxReturnValue } from 'downshift';
import { usePopper } from 'react-popper';
import { mapSpacing } from '@ag.ds-next/core';
import { textInputStyles } from '@ag.ds-next/text-input';
import { Field } from '@ag.ds-next/field';
import { Text } from '@ag.ds-next/text';
import { ComboboxProps } from './Combobox';
import { ComboboxList } from './ComboboxList';
import { ComboboxListItem } from './ComboboxListItem';
import { ComboboxListLoading } from './ComboboxListLoading';
import { ComboboxListError } from './ComboboxListError';
import { ComboboxListEmptyResults } from './ComboboxListEmptyResults';
import {
	ComboboxDropdownTrigger,
	ComboboxClearButton,
} from './ComboboxButtons';
import { DefaultComboboxOption, splitLabel, useComboboxInputId } from './utils';

export type ComboboxBaseProps<Option extends DefaultComboboxOption> =
	ComboboxProps<Option> & {
		loading?: boolean;
		networkError?: boolean;
		inputItems?: Option[];
		downshift: UseComboboxReturnValue<Option>;
	};

export function ComboboxBase<Option extends DefaultComboboxOption>({
	label,
	hideOptionalLabel,
	required,
	hint,
	message,
	invalid,
	id: idProp,
	disabled,
	block,
	maxWidth: maxWidthProp = 'xl',
	showDropdownTrigger = true,
	clearable = false,
	renderItem = defaultRenderItem,
	emptyResultsMessage = 'No options found.',
	loading,
	networkError,
	downshift,
	inputItems,
}: ComboboxBaseProps<Option>) {
	const inputId = useComboboxInputId(idProp);

	// Popper state
	const [refEl, setRefEl] = useState<HTMLDivElement | null>(null);
	const [popperEl, setPopperEl] = useState<HTMLDivElement | null>(null);
	const { styles, attributes } = usePopper(refEl, popperEl, {
		placement: 'bottom-start',
		modifiers: [{ name: 'offset', options: { offset: [0, 8] } }],
	});

	const { maxWidth, ...inputStyles } = {
		...textInputStyles({
			block,
			maxWidth: maxWidthProp,
			invalid,
		}),
		paddingRight: mapSpacing(3),
	};

	return (
		<div css={{ position: 'relative', maxWidth }} ref={setRefEl}>
			<Field
				label={label}
				hideOptionalLabel={hideOptionalLabel}
				required={Boolean(required)}
				hint={hint}
				message={message}
				invalid={invalid}
				id={inputId}
			>
				{(a11yProps) => (
					<div css={{ position: 'relative' }} {...downshift.getComboboxProps()}>
						<input
							css={[inputStyles, { width: '100%' }]}
							disabled={disabled}
							{...a11yProps}
							{...downshift.getInputProps({ type: 'text' })}
						/>
						{showDropdownTrigger && (
							<ComboboxDropdownTrigger
								disabled={disabled}
								{...downshift.getToggleButtonProps()}
							/>
						)}
						{!showDropdownTrigger && clearable && downshift.selectedItem && (
							<ComboboxClearButton
								disabled={disabled}
								onClick={downshift.reset}
							/>
						)}
					</div>
				)}
			</Field>
			<div
				ref={setPopperEl}
				style={styles.popper}
				{...attributes.popper}
				css={{ zIndex: 1, width: '100%' }}
			>
				<ComboboxList {...downshift.getMenuProps()} isOpen={downshift.isOpen}>
					{downshift.isOpen && (
						<Fragment>
							{loading ? (
								<ComboboxListLoading />
							) : networkError ? (
								<ComboboxListError />
							) : (
								<Fragment>
									{inputItems?.length ? (
										inputItems.map((item, index) => {
											const isActiveItem = downshift.highlightedIndex === index;
											return (
												<ComboboxListItem
													key={`${item.value}${index}`}
													isActiveItem={isActiveItem}
													isInteractive={true}
													{...downshift.getItemProps({ item, index })}
												>
													{renderItem(item, downshift.inputValue)}
												</ComboboxListItem>
											);
										})
									) : (
										<ComboboxListEmptyResults message={emptyResultsMessage} />
									)}
								</Fragment>
							)}
						</Fragment>
					)}
				</ComboboxList>
			</div>
		</div>
	);
}

export function defaultRenderItem<Option extends DefaultComboboxOption>(
	item: Option,
	inputValue: string
) {
	return splitLabel(item.label, inputValue).map((part, index) => {
		const isHighlighted = part.toLowerCase() === inputValue.toLowerCase();
		if (isHighlighted) {
			return (
				<Text
					key={index}
					as="mark"
					color="action"
					fontWeight="bold"
					css={{ background: 'none' }}
				>
					{part}
				</Text>
			);
		}
		return (
			<Text key={index} as="span" color="action">
				{part}
			</Text>
		);
	});
}
