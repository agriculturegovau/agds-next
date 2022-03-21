import React, { useRef, useState } from 'react';
import type { DayPickerProps } from 'react-day-picker';
import { DateUtils } from 'react-day-picker';
import DayPickerInput from 'react-day-picker/DayPickerInput';
import { TextInput } from '@ag.ds-next/text-input';
import dateFnsFormat from 'date-fns/format';
import dateFnsParse from 'date-fns/parse';
import { DateRangePickerContainer } from './DateRangePickerContainer';
import { Flex } from '@ag.ds-next/box';

function parseDate(str, format, locale) {
	const parsed = dateFnsParse(str, format, new Date(), { locale });
	if (DateUtils.isDate(parsed)) {
		return parsed;
	}
	return undefined;
}

function formatDate(date, format, locale) {
	return dateFnsFormat(date, format, { locale });
}

const FORMAT = 'dd/MM/yyyy';

export type DateRangePickerProps = {
	label: string;
	invalid?: boolean;
	valid?: boolean;
	message?: string;
	disabled?: boolean;
	required?: boolean;
	requiredLabel?: boolean;
	hint?: string;
	block?: boolean;
} & Pick<
	DayPickerProps,
	'disabledDays' | 'modifiers' | 'initialMonth' | 'fromMonth' | 'toMonth'
>;

export const DateRangePicker = ({
	label,
	invalid,
	valid,
	message,
	disabled,
	required,
	requiredLabel,
	hint,
	block,
	...dayPickerProps
}: DateRangePickerProps) => {
	const toRef = useRef();
	const [state, setState] = useState({ from: undefined, to: undefined });

	function showFromMonth() {
		const { from, to } = state;
		if (!from) {
			return;
		}
		// if (moment(to).diff(moment(from), 'months') < 2) {
		//   this.to.getDayPicker().showMonth(from);
		// }
	}

	function handleFromChange(from) {
		// Change the from date and focus the "to" input field
		setState((s) => ({ ...s, from }));
	}

	function handleToChange(to) {
		setState((s) => ({ ...s, to }), showFromMonth);
	}

	console.log(toRef);

	return (
		<DateRangePickerContainer>
			<DayPickerInput
				component={(props) => (
					<TextInput label="From date" requiredLabel={false} {...props} />
				)}
				showOverlay={disabled ? false : undefined}
				value={state.from}
				placeholder=""
				format={FORMAT}
				formatDate={formatDate}
				parseDate={parseDate}
				dayPickerProps={{
					selectedDays: [state.from, { from: state.from, to: state.to }],
					disabledDays: { after: state.to },
					toMonth: state.to,
					modifiers: { start: state.from, end: state.to },
					numberOfMonths: 2,
					onDayClick: () => toRef.current?.focus(),
				}}
				onDayChange={handleFromChange}
			/>
			<DayPickerInput
				component={(props) => (
					<TextInput
						ref={toRef}
						label="To date"
						requiredLabel={false}
						{...props}
					/>
				)}
				showOverlay={disabled ? false : undefined}
				value={state.to}
				placeholder=""
				format={FORMAT}
				formatDate={formatDate}
				parseDate={parseDate}
				dayPickerProps={{
					selectedDays: [state.from, { from: state.from, to: state.to }],
					disabledDays: { before: state.from },
					modifiers: { start: state.from, end: state.to },
					month: state.from,
					fromMonth: state.from,
					numberOfMonths: 2,
				}}
				onDayChange={handleToChange}
			/>
		</DateRangePickerContainer>
	);
};
