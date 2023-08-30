import { Fragment, Ref, ReactNode } from 'react';
import { UseComboboxReturnValue } from 'downshift';
import { FieldMaxWidth, packs } from '../../core';
import { Popover, usePopover } from '../../_popover';
import { textInputStyles } from '../../text-input';
import { Field } from '../../field';
import { DefaultComboboxOption } from '../utils';
import { defaultRenderItem } from '../defaultRenderItem';
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
	inputRef?: Ref<HTMLInputElement>;
	loading?: boolean;
	inputItems?: Option[];
	networkError?: boolean;
	emptyResultsMessage?: string;
	renderItem?: (item: Option, inputValue: string) => ReactNode;
	combobox: UseComboboxReturnValue<Option>;
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
	inputRef: inputRefProp,
}: ComboboxBaseProps<Option>) {
	const showClearButton = clearable && combobox.selectedItem;
	const hasButtons = showDropdownTrigger || showClearButton;
	const hasBothButtons = showDropdownTrigger && showClearButton;

	const { maxWidth, ...inputStyles } = {
		...textInputStyles({ block, maxWidth: maxWidthProp, invalid }),
		...packs.truncate,
		paddingRight: hasBothButtons ? '5rem' : '3rem',
	};

	const popover = usePopover({
		matchReferenceWidth: true,
		maxHeight: 295,
	});
	const popoverProps = popover.getPopoverProps();
	const comboboxPopoverMenuProps = combobox.getMenuProps({
		...popoverProps,
		style: {
			...popoverProps.style,
			display: combobox.isOpen ? 'block' : 'none',
		},
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
				<div
					{...popover.getReferenceProps()}
					css={{ position: 'relative', maxWidth }}
				>
					<input
						css={{ ...inputStyles, width: '100%' }}
						disabled={disabled}
						{...combobox.getInputProps({
							...a11yProps,
							ref: inputRefProp,
							type: 'text',
							name: inputName,
						})}
					/>
					{hasButtons && (
						<ComboboxButtonContainer>
							{showDropdownTrigger && (
								<ComboboxDropdownTrigger
									{...combobox.getToggleButtonProps({
										isOpen: combobox.isOpen,
										disabled,
									})}
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
					<Popover as="ul" {...comboboxPopoverMenuProps}>
						{combobox.isOpen ? (
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
						) : null}
					</Popover>
				</div>
			)}
		</Field>
	);
}
