import { Fragment, ReactNode, useState } from 'react';
import { UseComboboxReturnValue } from 'downshift';
import { usePopper } from 'react-popper';
import { FieldMaxWidth, mergeRefs } from '../../core';
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
	ComboboxButtonContainer,
	ComboboxClearButton,
	ComboboxButtonDivider,
} from './ComboboxButtons';

type ComboboxBaseProps<Option extends DefaultComboboxOption> = {
	// Field props
	label: string;
	hideOptionalLabel?: boolean;
	required?: boolean;
	hint?: string;
	message?: string;
	invalid?: boolean;
	inputId: string;
	inputName?: string;
	disabled?: boolean;
	// Styles
	block?: boolean;
	maxWidth?: Extract<FieldMaxWidth, 'md' | 'lg' | 'xl'>;
	showDropdownTrigger?: boolean;
	clearable?: boolean;
	// Downshift
	combobox: UseComboboxReturnValue<Option>;
	loading?: boolean;
	inputItems?: Option[];
	networkError?: boolean;
	emptyResultsMessage?: string;
	renderItem?: (item: Option, inputValue: string) => ReactNode;
};

export function ComboboxBase<Option extends DefaultComboboxOption>({
	label,
	hideOptionalLabel,
	required,
	hint,
	message,
	invalid,
	inputId,
	inputName,
	disabled,
	block = false,
	maxWidth: maxWidthProp = 'xl',
	showDropdownTrigger = true,
	clearable = false,
	renderItem = defaultRenderItem,
	emptyResultsMessage = 'No options found.',
	loading,
	networkError,
	combobox,
	inputItems,
}: ComboboxBaseProps<Option>) {
	// Popper state
	const [refEl, setRefEl] = useState<HTMLDivElement | null>(null);
	const [popperEl, setPopperEl] = useState<HTMLDivElement | null>(null);
	const { styles, attributes } = usePopper(refEl, popperEl, {
		placement: 'bottom-start',
		modifiers: [{ name: 'offset', options: { offset: [0, 8] } }],
	});

	const showClearButton = clearable && combobox.selectedItem;
	const hasButtons = showDropdownTrigger || showClearButton;
	const hasBothButtons = showDropdownTrigger && showClearButton;

	const { maxWidth, ...inputStyles } = {
		...textInputStyles({ block, maxWidth: maxWidthProp, invalid }),
		paddingRight: hasBothButtons ? '5rem' : '3rem',
	};

	const { ref: menuRef, ...menuProps } = combobox.getMenuProps({
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
						{...combobox.getInputProps({
							...a11yProps,
							type: 'text',
							name: inputName,
						})}
					/>
					{hasButtons && (
						<ComboboxButtonContainer>
							{showDropdownTrigger && (
								<ComboboxDropdownTrigger
									disabled={disabled}
									{...combobox.getToggleButtonProps()}
								/>
							)}
							{hasBothButtons && <ComboboxButtonDivider />}
							{showClearButton && (
								<ComboboxClearButton
									disabled={disabled}
									onClick={combobox.reset}
								/>
							)}
						</ComboboxButtonContainer>
					)}
					<ComboboxList
						{...menuProps}
						ref={mergeRefs([menuRef, setPopperEl])}
						maxWidth={maxWidthProp}
						isOpen={combobox.isOpen}
					>
						{combobox.isOpen && (
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
													combobox.highlightedIndex === index;
												return (
													<ComboboxListItem
														key={`${item.value}${index}`}
														isActiveItem={isActiveItem}
														isInteractive={true}
														{...combobox.getItemProps({ item, index })}
													>
														{renderItem(item, combobox.inputValue)}
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
