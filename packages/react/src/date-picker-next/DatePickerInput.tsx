import { forwardRef, MouseEventHandler, RefObject, useMemo } from 'react';
import { format } from 'date-fns';
import { Flex } from '../flex';
import { CalendarIcon } from '../icon';
import { TextInputProps, textInputStyles } from '../text-input';
import { mapSpacing, packs, tokens } from '../core';
import { Button } from '../button';
import { Field } from '../field';
import { acceptedDateFormats, type AcceptedDateFormats } from './utils';

export type DateInputProps = Omit<TextInputProps, 'invalid'> & {
	buttonAriaLabel: string;
	buttonOnClick: MouseEventHandler<HTMLButtonElement>;
	buttonRef: RefObject<HTMLButtonElement>;
	dateFormat: AcceptedDateFormats;
	highlight?: boolean;
	invalid: {
		/** If true, the entire field will be rendered in an invalid state.  */
		field: boolean;
		/** If true, only the input element will be rendered in an invalid state. */
		input: boolean;
	};
	isCalendarOpen: boolean;
	secondaryLabelDate?: Date;
};

export const DateInput = forwardRef<HTMLInputElement, DateInputProps>(
	function DateInput(
		{
			block,
			buttonAriaLabel,
			buttonOnClick,
			buttonRef,
			dateFormat: dateFormatProp,
			disabled,
			hideOptionalLabel,
			highlight,
			hint,
			id,
			invalid,
			isCalendarOpen,
			label,
			maxWidth: maxWidthProp = 'md',
			message,
			required,
			secondaryLabelDate = new Date(),
			value,
			...props
		},
		ref
	) {
		const { maxWidth, ...styles } = {
			...textInputStyles({
				block,
				maxWidth: maxWidthProp,
			}),
			width: '100%',
			borderRight: 'none',
			borderTopRightRadius: 0,
			borderBottomRightRadius: 0,
		};

		// The secondary label should show today's date in the supplied date format (via the `dateFormat` prop)
		// If the supplied date format is not an accepted format, fallback to the default date format of `dd/MM/yyyy`
		// Note: TypeScript will complain about incorrect values passed into the `dateFormat` prop, but not everyone relies on TypeScript
		const secondaryLabel = useMemo(() => {
			const dateFormat = acceptedDateFormats.includes(dateFormatProp)
				? dateFormatProp
				: 'dd/MM/yyyy';
			return '(e.g. ' + format(secondaryLabelDate, dateFormat) + ')';
		}, [dateFormatProp, secondaryLabelDate]);

		return (
			<Field
				hideOptionalLabel={hideOptionalLabel}
				hint={hint}
				id={id}
				invalid={invalid.field}
				label={label}
				maxWidth={maxWidthProp}
				message={message}
				required={required}
				secondaryLabel={secondaryLabel}
			>
				{(a11yProps) => (
					<Flex
						alignItems="flex-end"
						css={{
							borderRadius: tokens.borderRadius,
							maxWidth,
							...(highlight ? packs.outline : undefined),
						}}
					>
						<input
							autoComplete="off"
							css={{ ...styles, maxWidth: 'unset' }}
							ref={ref}
							type="text"
							{...a11yProps}
							aria-invalid={Boolean(invalid.field || invalid.input)}
							{...props}
							disabled={disabled}
							value={value}
						/>
						<Button
							aria-expanded={isCalendarOpen}
							aria-label={buttonAriaLabel}
							css={{
								borderTopLeftRadius: 0,
								borderBottomLeftRadius: 0,
								paddingLeft: mapSpacing(1),
								paddingRight: mapSpacing(1),
							}}
							disabled={disabled}
							iconBefore={CalendarIcon}
							onClick={buttonOnClick}
							ref={buttonRef}
							type="button"
							variant="secondary"
						/>
					</Flex>
				)}
			</Field>
		);
	}
);
