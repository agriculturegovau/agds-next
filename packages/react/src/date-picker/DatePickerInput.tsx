import { forwardRef, MouseEventHandler, RefObject } from 'react';
import { Flex } from '../flex';
import { CalendarIcon } from '../icon';
import { TextInputProps, textInputStyles } from '../text-input';
import { mapSpacing } from '../core';
import { Button } from '../button';
import { Field } from '../field';

export type DateInputProps = Omit<TextInputProps, 'invalid'> & {
	invalid: {
		/** If true, the entire field will be rendered in an invalid state.  */
		field: boolean;
		/** If true, only the input element will be rendered in an invalid state. */
		input: boolean;
	};
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
			...props
		},
		ref
	) {
		const { maxWidth, ...styles } = {
			...textInputStyles({
				block,
				invalid: invalid.input,
				maxWidth: maxWidthProp,
			}),
			width: '100%',
			borderRight: 'none',
			borderTopRightRadius: 0,
			borderBottomRightRadius: 0,
		};

		return (
			<Field
				label={label}
				secondaryLabel="(dd/mm/yyyy)"
				maxWidth={maxWidthProp}
				hideOptionalLabel={hideOptionalLabel}
				required={Boolean(required)}
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
