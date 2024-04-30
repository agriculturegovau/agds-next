import { FocusEventHandler, Fragment, ReactNode, Ref } from 'react';
import { UseComboboxReturnValue } from 'downshift';
import { FieldMaxWidth, packs } from '../../core';
import { Popover, usePopover } from '../../_popover';
import { textInputStyles } from '../../text-input';
import { Field } from '../../field';
import {
	ComboboxMaxWidthValues,
	DefaultComboboxOption,
	validateMaxWidth,
} from '../utils';
import { ComboboxRenderItem } from '../ComboboxRenderItem';
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
import { ComboboxSearchIcon } from './ComboboxSearchIcon';

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
	maxWidth?: Extract<FieldMaxWidth, ComboboxMaxWidthValues>;
	showDropdownTrigger?: boolean;
	clearable?: boolean;
	isAutocomplete: boolean;
	// Downshift
	loading?: boolean;
	inputItems?: Option[];
	networkError?: boolean;
	emptyResultsMessage?: string;
	renderItem?: (item: Option, inputValue: string) => ReactNode;
	combobox: UseComboboxReturnValue<Option>;
	// input props
	'aria-describedby'?: string;
	'aria-invalid'?: boolean;
	inputRef?: Ref<HTMLInputElement>;
	onBlur?: FocusEventHandler<HTMLInputElement>;
	onFocus?: FocusEventHandler<HTMLInputElement>;
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
	isAutocomplete,
	emptyResultsMessage = 'No options found.',
	loading,
	networkError,
	combobox,
	inputItems,
	inputRef: inputRefProp,
	onBlur,
	onFocus,
	renderItem = (item, inputValue) => (
		<ComboboxRenderItem itemLabel={item.label} inputValue={inputValue} />
	),
	...props
}: ComboboxBaseProps<Option>) {
	const showClearButton = clearable && combobox.selectedItem;
	const hasButtons = showDropdownTrigger || showClearButton;
	const hasBothButtons = showDropdownTrigger && showClearButton;

	validateMaxWidth('ComboBox', maxWidthProp);

	const { maxWidth, ...inputStyles } = {
		...textInputStyles({ block, maxWidth: maxWidthProp }),
		...packs.truncate,
		paddingRight: hasBothButtons ? '5rem' : '3rem',
	};

	const popover = usePopover({
		// Popovers should always match the width of the related input
		matchReferenceWidth: true,
		// Popovers have a max-height as the list of options can be very long
		maxHeight: 295,
		// Minimum acceptable height of the popover before it gets flipped
		minHeight: 195,
		// For a11y reasons, the popover element is hidden with CSS and not conditionally rendered
		hiddenWithCSS: true,
		isOpen: combobox.isOpen,
	});

	const { id: labelId } = combobox.getLabelProps();

	return (
		<Field
			label={label}
			labelId={labelId}
			hideOptionalLabel={hideOptionalLabel}
			required={Boolean(required)}
			hint={hint}
			maxWidth={maxWidthProp}
			message={message}
			invalid={invalid}
			id={inputId}
		>
			{(a11yProps) => (
				<div
					{...popover.getReferenceProps()}
					css={{ position: 'relative', maxWidth }}
				>
					{isAutocomplete && <ComboboxSearchIcon disabled={disabled} />}
					<input
						css={{
							...inputStyles,
							width: '100%',
							...(isAutocomplete && { paddingLeft: '3rem' }),
						}}
						disabled={disabled}
						{...combobox.getInputProps({
							...a11yProps,
							...{
								'aria-describedby':
									props['aria-describedby'] || a11yProps['aria-describedby'],
								'aria-invalid':
									props['aria-invalid'] || a11yProps['aria-invalid'],
							},
							ref: inputRefProp,
							type: 'text',
							name: inputName,
							onBlur,
							onFocus,
						})}
					/>
					{hasButtons && (
						<ComboboxButtonContainer>
							{showClearButton && (
								<ComboboxClearButton
									disabled={disabled}
									onClick={combobox.reset}
								/>
							)}
							{hasBothButtons && <ComboboxButtonDivider />}
							{showDropdownTrigger && (
								<ComboboxDropdownTrigger
									{...combobox.getToggleButtonProps({
										isOpen: combobox.isOpen,
										disabled,
									})}
								/>
							)}
						</ComboboxButtonContainer>
					)}
					<Popover
						as="ul"
						{...combobox.getMenuProps(popover.getPopoverProps())}
						visibility={combobox.isOpen ? 'visible' : 'hidden'}
					>
						{combobox.isOpen ? (
							<Fragment>
								{loading ? (
									<ComboboxListLoading />
								) : networkError ? (
									<ComboboxListError />
								) : (
									<Fragment>
										{inputItems?.length ? (
											inputItems.map((item, index) => (
												<ComboboxListItem
													key={`${item.value}-${index}`}
													isActiveItem={combobox.highlightedIndex === index}
													isInteractive={true}
													{...combobox.getItemProps({ item, index })}
												>
													{renderItem(item, combobox.inputValue)}
												</ComboboxListItem>
											))
										) : (
											<ComboboxListEmptyResults message={emptyResultsMessage} />
										)}
									</Fragment>
								)}
							</Fragment>
						) : null}
					</Popover>
				</div>
			)}
		</Field>
	);
}
