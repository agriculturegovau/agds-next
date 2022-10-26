import { forwardRef, MouseEventHandler, RefObject, useMemo } from 'react';
import { Flex } from '../box';
import { CalendarIcon } from '../icon';
import { TextInputProps, textInputStyles } from '../text-input';
import { mapSpacing } from '../core';
import { Button } from '../button';
import { Field } from '../field';
import { parseDate, formatHumanReadableDate } from './utils';

export type DateInputProps = Omit<
	TextInputProps,
	'inputMode' | 'pattern' | 'type'
> & {
	buttonRef: RefObject<HTMLButtonElement>;
	buttonOnClick: MouseEventHandler<HTMLButtonElement>;
};

export const DateInput = forwardRef<HTMLInputElement, DateInputProps>(
	function DateInput(
		{
			label,
			required,
			hint,
			message,
			invalid,
			valid,
			block,
			id,
			buttonRef,
			maxWidth: maxWidthProp,
			buttonOnClick,
			disabled,
			value,
			...props
		},
		ref
	) {
		const { maxWidth, ...styles } = {
			...textInputStyles({ block, invalid, maxWidth: maxWidthProp, valid }),
			width: '100%',
			borderRight: 'none',
			borderTopRightRadius: 0,
			borderBottomRightRadius: 0,
		};

		const ariaLabel = useMemo(() => {
			if (typeof value !== 'string') return 'Choose date';
			const parsed = parseDate(value);
			if (!parsed) return 'Choose date';
			return `Change Date, ${formatHumanReadableDate(parsed)}`;
		}, [value]);

		return (
			<Field
				label={label}
				secondaryLabel="(dd/mm/yyyy)"
				required={Boolean(required)}
				hint={hint}
				message={message}
				invalid={invalid}
				valid={valid}
				id={id}
			>
				{(a11yProps) => (
					<Flex alignItems="flex-end" css={{ maxWidth }}>
						<input
							ref={ref}
							type="text"
							css={{ ...styles, maxWidth: 'unset' }}
							{...a11yProps}
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
							aria-label={ariaLabel}
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
