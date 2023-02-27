import { Fragment, ReactNode, useState } from 'react';
import { UseComboboxReturnValue } from 'downshift';
import { usePopper } from 'react-popper';
import { FieldMaxWidth, mapSpacing, mergeRefs } from '../../core';
import { textInputStyles } from '../../text-input';
import { Field } from '../../field';
import { DefaultComboboxOption } from '../utils';
import { defaultRenderItem } from '../defaultRenderItem';
import { ComboboxList } from './ComboboxList';
import { ComboboxListItem } from './ComboboxListItem';
import { ComboboxListLoading } from './ComboboxListLoading';
import { ComboboxListError } from './ComboboxListError';
import { ComboboxListEmptyResults } from './ComboboxListEmptyResults';
import {
	ComboboxDropdownTrigger,
	ComboboxClearButton,
} from './ComboboxButtons';

export type CommonComboboxProps<Option extends DefaultComboboxOption> = {
	/** Describes the purpose of the field. */
	label: string;
	/** If true, "(optional)" will never be appended to the label. */
	hideOptionalLabel?: boolean;
	/** If false, "(optional)" will be appended to the label. */
	required?: boolean;
	/** Provides extra information about the field. */
	hint?: string;
	/** Message to show when the field is invalid. */
	message?: string;
	/** If true, the invalid state will be rendered. */
	invalid?: boolean;
	/** If true, the field will stretch to the fill the width of its container. */
	block?: boolean;
	/** The maximum width of the field. */
	maxWidth?: Extract<FieldMaxWidth, 'md' | 'lg' | 'xl'>;
	/** If true, the field will not be interactive. */
	disabled?: boolean;
	/** Defines an identifier (ID) which must be unique. */
	id?: string;
	/** A string specifying a name for the input control. */
	name?: string;
	/** If true, the dropdown trigger will be rendered. */
	showDropdownTrigger?: boolean;
	/** If true, the selected item can be cleared. Only available when `showDropdownTrigger` is false. */
	clearable?: boolean;
	/** Function to be fired following a change event. */
	onChange?: (value: Option | null) => void;
	/** The value of the field. */
	value?: Option | null;
	/** Used to override the default item rendering.  */
	renderItem?: (item: Option, inputValue: string) => ReactNode;
	/** Message to display when no options match the users search term. */
	emptyResultsMessage?: string;
};

type ComboboxBaseProps<Option extends DefaultComboboxOption> =
	CommonComboboxProps<Option> & {
		inputId: string;
		inputItems?: Option[];
		loading?: boolean;
		networkError?: boolean;
		downshift: UseComboboxReturnValue<Option>;
	};

export function ComboboxBase<Option extends DefaultComboboxOption>({
	label,
	hideOptionalLabel,
	required,
	hint,
	message,
	invalid,
	inputId,
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
	// Popper state
	const [refEl, setRefEl] = useState<HTMLDivElement | null>(null);
	const [popperEl, setPopperEl] = useState<HTMLDivElement | null>(null);
	const { styles, attributes } = usePopper(refEl, popperEl, {
		placement: 'bottom-start',
		modifiers: [{ name: 'offset', options: { offset: [0, 8] } }],
	});

	const { maxWidth, ...inputStyles } = {
		...textInputStyles({ block, maxWidth: maxWidthProp, invalid }),
		paddingRight: mapSpacing(3),
	};

	const { ref: menuRef, ...menuProps } = downshift.getMenuProps({
		...attributes.popper,
		style: styles.popper,
	});

	return (
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
				<div ref={setRefEl} css={{ position: 'relative', maxWidth }}>
					<input
						css={{ ...inputStyles, width: '100%' }}
						disabled={disabled}
						{...downshift.getInputProps({ ...a11yProps, type: 'text' })}
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
					<ComboboxList
						{...menuProps}
						ref={mergeRefs([menuRef, setPopperEl])}
						maxWidth={maxWidthProp}
						isOpen={downshift.isOpen}
					>
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
												const isActiveItem =
													downshift.highlightedIndex === index;
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
			)}
		</Field>
	);
}
