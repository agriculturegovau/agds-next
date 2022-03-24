import React, { forwardRef, MouseEventHandler, RefObject } from 'react';
import { Flex } from '@ag.ds-next/box';
import { CalendarIcon } from '@ag.ds-next/icon';
import { TextInputProps, textInputStyles } from '@ag.ds-next/text-input';
import { mapSpacing } from '@ag.ds-next/core';
import { Button } from '@ag.ds-next/button';
import { Field, fieldMaxWidth } from '@ag.ds-next/field';

export type DateInputProps = TextInputProps & {
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
			maxWidth: maxWidthProp,
			id,
			buttonRef,
			buttonOnClick,
			disabled,
			...props
		},
		ref
	) {
		const styles = {
			...textInputStyles({
				block,
				maxWidth: maxWidthProp,
				invalid,
				valid,
			}),
			maxWidth: 'unset',
			width: '100%',
			borderRight: 'none',
			borderTopRightRadius: 0,
			borderBottomRightRadius: 0,
		};
		return (
			<Field
				label={label}
				required={Boolean(required)}
				hint={hint}
				message={message}
				invalid={invalid}
				valid={valid}
				id={id}
			>
				{(allyProps) => (
					<Flex
						alignItems="flex-end"
						css={{
							maxWidth: block
								? undefined
								: maxWidthProp
								? fieldMaxWidth[maxWidthProp]
								: '12.8125rem',
						}}
					>
						<input
							ref={ref}
							css={styles}
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

// export const DateInput = ({
// 	block,
// 	disabled,
// 	buttonRef,
// 	buttonOnClick,
// 	maxWidth,
// 	...props
// }: DateInputProps) => {
// 	return (
// 		<Flex
// 			alignItems="flex-end"
// 			css={{
// 				position: 'relative',

// 				'& > div': {
// 					flex: 1,
// 				},
// 			}}
// 		>
// 			<TextInput
// 				{...props}
// 				disabled={disabled}
// 				block
// 				css={{
//
// 				}}
// 			/>

// 		</Flex>
// 	);
// };
