import React, { MouseEventHandler, RefObject } from 'react';
import { Flex } from '@ag.ds-next/box';
import { CalendarIcon } from '@ag.ds-next/icon';
import { TextInput, TextInputProps } from '@ag.ds-next/text-input';
import { mapSpacing } from '@ag.ds-next/core';
import { Button } from '@ag.ds-next/button';
import { fieldMaxWidth } from '@ag.ds-next/field';

export type DateInputProps = TextInputProps & {
	buttonRef: RefObject<HTMLButtonElement>;
	buttonOnClick: MouseEventHandler<HTMLButtonElement>;
};

export const DateInput = ({
	block,
	disabled,
	buttonRef,
	buttonOnClick,
	maxWidth,
	...props
}: DateInputProps) => {
	return (
		<Flex
			alignItems="flex-end"
			css={{
				position: 'relative',
				maxWidth: block
					? undefined
					: maxWidth
					? fieldMaxWidth[maxWidth]
					: '12.8125rem',

				'& > div': {
					flex: 1,
				},
			}}
		>
			<TextInput
				{...props}
				block
				css={{
					borderRight: 'none',
					borderTopRightRadius: 0,
					borderBottomRightRadius: 0,
				}}
			/>
			<Button
				type="button"
				ref={buttonRef}
				onClick={buttonOnClick}
				disabled={disabled}
				variant="secondary"
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
	);
};
