import { forwardRef, MouseEventHandler, RefObject, useMemo } from 'react';
import { format } from 'date-fns';
import { Flex } from '../flex';
import { CalendarIcon } from '../icon';
import { TextInputProps, textInputStyles } from '../text-input';
import { mapSpacing } from '../core';
import { Button } from '../button';
import { Field } from '../field';
import { acceptedDateFormats, type AcceptedDateFormats } from './utils';

export type DateInputProps = Omit<TextInputProps, 'invalid'> & {
	invalid: {
		/** If true, the entire field will be rendered in an invalid state.  */
		field: boolean;
		/** If true, only the input element will be rendered in an invalid state. */
		input: boolean;
	};
	dateFormat: AcceptedDateFormats;
	buttonRef: RefObject<HTMLButtonElement>;
	buttonOnClick: MouseEventHandler<HTMLButtonElement>;
	buttonAriaLabel: string;
};

export const DateInput = forwardRef<HTMLInputElement, DateInputProps>(
	function DateInput(
		{
			label,
			hideOptionalLabel,
			required,
			hint,
			message,
			invalid,
			block,
			id,
			buttonRef,
			maxWidth: maxWidthProp = 'md',
			buttonOnClick,
			buttonAriaLabel,
			disabled,
			value,
			dateFormat: dateFormatProp,
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
			return '(e.g. ' + format(new Date(), dateFormat) + ')';
		}, [dateFormatProp]);

		return (
			<Field
				label={label}
				maxWidth={maxWidthProp}
				secondaryLabel={secondaryLabel}
				hideOptionalLabel={hideOptionalLabel}
				required={required}
				hint={hint}
				message={message}
				invalid={invalid.field}
				id={id}
			>
				{(a11yProps) => (
					<Flex alignItems="flex-end" css={{ maxWidth }}>
						<input
							ref={ref}
							type="text"
							css={{ ...styles, maxWidth: 'unset' }}
							autoComplete="off"
							{...a11yProps}
							aria-invalid={Boolean(invalid.field || invalid.input)}
							{...props}
							value={value}
							disabled={disabled}
						/>
						<Button
							type="button"
							ref={buttonRef}
							onClick={buttonOnClick}
							disabled={disabled}
							variant="secondary"
							aria-label={buttonAriaLabel}
							css={{
								borderTopLeftRadius: 0,
								borderBottomLeftRadius: 0,
								paddingLeft: mapSpacing(1),
								paddingRight: mapSpacing(1),
							}}
						>
							<CalendarIcon size="md" css={{ display: 'block' }} />
						</Button>
					</Flex>
				)}
			</Field>
		);
	}
);
