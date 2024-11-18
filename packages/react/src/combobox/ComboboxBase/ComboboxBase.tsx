import {
	Fragment,
	// Profiler,
	type FocusEvent,
	type FocusEventHandler,
	type ReactNode,
	type Ref,
} from 'react';
import { UseComboboxReturnValue } from 'downshift';
import { boxPalette, fontGrid, mapSpacing, packs, tokens } from '../../core';
import { Popover, usePopover } from '../../_popover';
import { textInputStyles } from '../../text-input';
import { Field } from '../../field';
import {
	generateHighlightStyles,
	type ComboboxMaxWidthValues,
	type DefaultComboboxOption,
	useIsIos,
	validateMaxWidth,
} from '../utils';
import { ComboboxRenderItem } from '../ComboboxRenderItem';
// import { ComboboxListItem } from './ComboboxListItem';
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
	maxWidth?: ComboboxMaxWidthValues;
	showDropdownTrigger?: boolean;
	clearable?: boolean;
	isAutocomplete: boolean;
	// Downshift
	loading?: boolean;
	inputItems?: Option[];
	networkError?: boolean;
	emptyResultsMessage?: string;
	renderItem?: (item: Option, inputValue?: string) => ReactNode;
	combobox: UseComboboxReturnValue<Option>;
	// input props
	'aria-describedby'?: string;
	'aria-invalid'?: boolean;
	inputRef?: Ref<HTMLInputElement>;
	onBlur?: FocusEventHandler<HTMLInputElement>;
	onFocus?: FocusEventHandler<HTMLInputElement>;
};

const hoverStyles = {
	color: boxPalette.foregroundText,
	backgroundColor: boxPalette.backgroundShade,
	'> span': packs.underline,
};

const FONT_SIZE_LINE_HEIGHT = fontGrid('sm', 'default');

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
	renderItem = (item) => <ComboboxRenderItem itemLabel={item.label} />,
	...props
}: ComboboxBaseProps<Option>) {
	const showClearButton = clearable && combobox.selectedItem;
	const hasButtons = showDropdownTrigger || showClearButton;
	const hasBothButtons = showDropdownTrigger && showClearButton;
	const isIos = useIsIos();

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

	const handleOnBlur = (event: FocusEvent<HTMLInputElement>) => {
		// If a user presses the Done button on the iOS keyboard, we shouldn't close the dropdown
		if (isIos && !event.nativeEvent?.relatedTarget) {
			// @ts-expect-error: Property 'preventDownshiftDefault' does not exist on type 'FocusEvent'
			event.nativeEvent.preventDownshiftDefault = true;
		}
		onBlur?.(event);
	};

	return (
		// <Profiler
		// 	id="combobox"
		// 	onRender={(a, b, c, d) => {
		// 		console.log(a, b, c, d);
		// 	}}
		// >
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
					css={{
						maxWidth,
						position: 'relative',
						...generateHighlightStyles(combobox.inputValue),
						li: {
							alignItems: 'center',
							borderBottomStyle: 'solid',
							borderBottomWidth: tokens.borderWidth.sm,
							borderColor: boxPalette.borderMuted,
							display: 'flex',
							gap: mapSpacing(0.75),
							paddingBottom: mapSpacing(0.75),
							paddingLeft: mapSpacing(1),
							paddingRight: mapSpacing(1),
							paddingTop: mapSpacing(0.75),
							cursor: 'pointer',
							color: boxPalette.foregroundAction,
							'&:hover': hoverStyles,
							'&[aria-selected="true"]': hoverStyles,
							'&:last-of-type': { borderBottom: 'none' },
						},
						'[data-combobox-render-item="beforeElement"]': { flexShrink: 0 },
						'[data-combobox-render-item="itemLabel"]': {
							alignItems: 'stretch',
							display: 'flex',
							flexDirection: 'column',
						},
						'[data-combobox-render-item="secondaryText"]': {
							color: boxPalette.foregroundMuted,
							fontFamily: tokens.font.body,
							fontWeight: tokens.fontWeight.normal,
							...FONT_SIZE_LINE_HEIGHT,
						},
						'[data-combobox-render-item="tertiaryText"]': {
							color: boxPalette.foregroundMuted,
							fontFamily: tokens.font.body,
							fontWeight: tokens.fontWeight.normal,
							...FONT_SIZE_LINE_HEIGHT,
						},
						'[data-combobox-render-item="endElement"]': {
							flexShrink: 0,
							marginLeft: 'auto',
						},
						'[data-combobox-render-item="renderedLabel"]': {
							color: 'inherit',
							fontFamily: tokens.font.body,
							fontWeight: tokens.fontWeight.normal,
							...FONT_SIZE_LINE_HEIGHT,
						},
					}}
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
							onBlur: handleOnBlur,
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
												// <ComboboxListItem
												// 	key={`${item.value}-${index}`}
												// 	isActiveItem={combobox.highlightedIndex === index}
												// 	isInteractive={true}
												// 	{...combobox.getItemProps({ item, index })}
												// >
												// 	{renderItem(item)}
												// </ComboboxListItem>
												<li
													// Required for Android TalkBack to be able to access the list items
													// See https://issues.chromium.org/issues/40260928
													// But stops iOS from being able to access them ◔_◔
													key={`${item.value}-${index}`}
													tabIndex={isIos ? undefined : -1}
													{...combobox.getItemProps({ item, index })}
												>
													{renderItem(item)}
												</li>
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
		// </Profiler>
	);
}
