import React, { forwardRef, MouseEventHandler, RefObject } from 'react';
import { Flex } from '@ag.ds-next/box';
import { CalendarIcon } from '@ag.ds-next/icon';
import { TextInputProps, textInputStyles } from '@ag.ds-next/text-input';
import { mapSpacing } from '@ag.ds-next/core';
import { Button } from '@ag.ds-next/button';
import { Field } from '@ag.ds-next/field';

export type DateInputProps = TextInputProps & {
	buttonRef: RefObject<HTMLButtonElement>;
	buttonOnClick: MouseEventHandler<HTMLButtonElement>;
};

export const DateInput = forwardRef<HTMLInputElement, DateInputProps>(
	function DateInput(
		{
			label,
			required,
			requiredLabel,
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
		return (
			<Field
				label={label}
				required={Boolean(required)}
				requiredLabel={requiredLabel}
				hint={hint}
				message={message}
				invalid={invalid}
				valid={valid}
				id={id}
			>
				{(allyProps) => (
					<Flex alignItems="flex-end" css={{ maxWidth }}>
						<input
							ref={ref}
							css={{ ...styles, maxWidth: 'unset' }}
							{...allyProps}
							{...props}
							disabled={disabled}
						/>
						<Button
							type="button"
							ref={buttonRef}
							onClick={buttonOnClick}
							disabled={disabled}
							variant="secondary"
							aria-label="Choose date"
							css={{
								borderTopLeftRadius: 0,
								borderBottomLeftRadius: 0,
								paddingLeft: mapSpacing(1),
								paddingRight: mapSpacing(1),
							}}
						>
							<CalendarIcon size="md" />
						</Button>
					</Flex>
				)}
			</Field>
		);
	}
);
