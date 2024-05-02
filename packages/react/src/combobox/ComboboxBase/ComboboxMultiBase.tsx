import {
	Fragment,
	Ref,
	useCallback,
	MouseEvent,
	useRef,
	ReactNode,
	FocusEventHandler,
	FocusEvent,
} from 'react';
import {
	UseComboboxReturnValue,
	UseMultipleSelectionReturnValue,
} from 'downshift';
import { Popover, usePopover } from '../../_popover';
import {
	boxPalette,
	fontGrid,
	mapSpacing,
	mergeRefs,
	packs,
	tokens,
	useTernaryState,
} from '../../core';
import { Field } from '../../field';
import { Flex } from '../../flex';
import {
	type ComboboxMaxWidthValues,
	type DefaultComboboxOption,
	validateMaxWidth,
} from '../utils';
import { ComboboxRenderItem } from '../ComboboxRenderItem';
import { ComboboxListItem } from './ComboboxListItem';
import { ComboboxListLoading } from './ComboboxListLoading';
import { ComboboxListError } from './ComboboxListError';
import { ComboboxListEmptyResults } from './ComboboxListEmptyResults';
import {
	ComboboxDropdownTrigger,
	ComboboxClearButton,
	ComboboxButtonContainer,
	ComboboxButtonDivider,
} from './ComboboxButtons';
import { ComboboxTag } from './ComboboxTag';

type ComboboxMultiBaseProps<Option extends DefaultComboboxOption> = {
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
	maxWidth?: ComboboxMaxWidthValues;
	showDropdownTrigger?: boolean;
	clearable?: boolean;
	// Downshift
	combobox: UseComboboxReturnValue<Option>;
	multiSelection: UseMultipleSelectionReturnValue<Option>;
	selectedItems: Option[];
	setSelectedItems: (value: Option[]) => void;
	loading?: boolean;
	inputItems?: Option[];
	networkError?: boolean;
	emptyResultsMessage?: string;
	renderItem?: (item: Option, inputValue: string) => ReactNode;
	// input props
	'aria-describedby'?: string;
	'aria-invalid'?: boolean;
	inputRef?: Ref<HTMLInputElement>;
	onBlur?: FocusEventHandler<HTMLInputElement>;
	onFocus?: FocusEventHandler<HTMLInputElement>;
};

export function ComboboxMultiBase<Option extends DefaultComboboxOption>({
	label,
	hideOptionalLabel,
	required,
	hint,
	message,
	invalid = false,
	inputId,
	disabled = false,
	block = true,
	maxWidth: maxWidthProp = 'xl',
	// clearable = false,
	renderItem = (item, inputValue) => (
		<ComboboxRenderItem itemLabel={item.label} inputValue={inputValue} />
	),
	emptyResultsMessage = 'No options found.',
	loading,
	networkError,
	combobox,
	inputItems,
	selectedItems,
	setSelectedItems,
	multiSelection,
	inputRef: inputRefProp,
	onBlur,
	onFocus,
	...props
}: ComboboxMultiBaseProps<Option>) {
	const inputRef = useRef<HTMLInputElement>(null);

	if (process.env.NODE_ENV !== 'production' && maxWidthProp) {
		validateMaxWidth('ComboboxMulti', maxWidthProp);

		if (block) {
			// Future enhancement: Automatically set block to false if maxWidth is defined.
			// Requires usage research to ensure that this change would not break existing UIs.
			console.warn(
				`ComboboxMulti: The \`maxWidth\` prop is being ignored. Fix by setting the \`block\` prop to \`false\`.`
			);
		}
	}

	const [isInputFocused, setInputFocused, setInputBlurred] =
		useTernaryState(false);

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

	const showClearButton = selectedItems?.length > 0;

	const styles = comboboxMultiStyles({
		block,
		disabled,
		invalid: invalid || Boolean(props['aria-invalid']),
		isInputFocused,
		maxWidth: maxWidthProp,
		showClearButton,
	});

	// Focus the input element if the user clicks inside the container
	// This should be prevented if a user clicks on any other element (e.g. a Tag)
	const fieldContainerRef = useRef<HTMLDivElement>(null);
	const handleFieldContainerClick = useCallback(
		(event: MouseEvent<HTMLDivElement>) => {
			if (event.target !== fieldContainerRef.current) return;
			inputRef.current?.focus();
		},
		[inputRef]
	);

	const onClear = useCallback(() => {
		setSelectedItems([]);
		inputRef.current?.focus();
	}, [setSelectedItems]);

	const inputRefs = inputRefProp
		? mergeRefs([inputRef, inputRefProp])
		: inputRef;

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
					css={styles.fieldContainer}
					onClick={handleFieldContainerClick}
				>
					<Flex
						ref={fieldContainerRef}
						gap={0.5}
						flexWrap="wrap"
						alignItems="center"
						css={styles.container}
					>
						{selectedItems.map((item, idx) => (
							<ComboboxTag
								key={`selected-item-${idx}`}
								onRemove={() => multiSelection.removeSelectedItem(item)}
								disabled={disabled}
								{...multiSelection.getSelectedItemProps({
									selectedItem: item,
									index: idx,
								})}
							>
								{item.label}
							</ComboboxTag>
						))}
						<div css={styles.inputContainer}>
							<input
								disabled={disabled}
								{...combobox.getInputProps(
									multiSelection.getDropdownProps({
										...a11yProps,
										...{
											'aria-describedby':
												props['aria-describedby'] ||
												a11yProps['aria-describedby'],
											'aria-invalid':
												props['aria-invalid'] || a11yProps['aria-invalid'],
										},
										ref: inputRefs,
										type: 'text',
										preventKeyAction: combobox.isOpen,
										onFocus: (event: FocusEvent<HTMLInputElement>) => {
											onFocus?.(event);
											setInputFocused();
										},
										onBlur: (event: FocusEvent<HTMLInputElement>) => {
											onBlur?.(event);
											setInputBlurred();
										},
									})
								)}
								css={styles.input}
							/>
						</div>
						<ComboboxButtonContainer>
							{showClearButton && (
								<Fragment>
									<ComboboxClearButton disabled={disabled} onClick={onClear} />
									<ComboboxButtonDivider />
								</Fragment>
							)}
							<ComboboxDropdownTrigger
								{...combobox.getToggleButtonProps({
									isOpen: combobox.isOpen,
									disabled,
								})}
							/>
						</ComboboxButtonContainer>
					</Flex>
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

function comboboxMultiStyles({
	block,
	disabled,
	invalid,
	isInputFocused,
	maxWidth,
	showClearButton,
}: {
	block: boolean;
	disabled: boolean;
	invalid: boolean;
	isInputFocused: boolean;
	maxWidth: ComboboxMaxWidthValues;
	showClearButton: boolean;
}) {
	return {
		fieldContainer: {
			...(!block &&
				maxWidth && {
					maxWidth: tokens.maxWidth.field[maxWidth],
				}),
		},
		container: {
			position: 'relative',
			cursor: 'text',
			background: boxPalette.backgroundBody,
			borderWidth: tokens.borderWidth.lg,
			borderStyle: 'solid',
			borderColor: boxPalette.border,
			borderRadius: tokens.borderRadius,
			color: boxPalette.foregroundText,
			...packs.input.md,
			height: 'auto',
			minHeight: packs.input.md.height,
			margin: 0,
			paddingTop: mapSpacing(0.25),
			paddingBottom: mapSpacing(0.25),
			paddingLeft: mapSpacing(0.5),
			paddingRight: showClearButton ? '5rem' : '3rem',

			...(disabled && {
				cursor: 'not-allowed',
				borderColor: boxPalette.borderMuted,
				backgroundColor: boxPalette.backgroundShade,
				color: boxPalette.foregroundMuted,
			}),

			...(invalid && {
				backgroundColor: boxPalette.systemErrorMuted,
				borderColor: boxPalette.systemError,
			}),

			...(isInputFocused && packs.outline),
		},
		inputContainer: {
			display: 'flex',
			flex: '1 1 2rem',
		},
		input: {
			appearance: 'none',
			boxSizing: 'border-box',
			borderWidth: 0,
			width: '100%',
			background: boxPalette.backgroundBody,
			color: boxPalette.foregroundText,
			fontFamily: tokens.font.body,
			...fontGrid('sm', 'default'),

			'&[aria-invalid="true"]': {
				backgroundColor: boxPalette.systemErrorMuted,
				borderColor: boxPalette.systemError,
			},

			'&:focus': {
				outline: 'none',
			},

			'&:disabled': {
				cursor: 'not-allowed',
				color: boxPalette.foregroundMuted,
				backgroundColor: boxPalette.backgroundShade,
			},
		},
	} as const;
}
