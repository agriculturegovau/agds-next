import { RefObject } from 'react';
import format from 'date-fns/format';
import FocusLock from 'react-focus-lock';
import {
	CustomComponents,
	Labels,
	DayPicker,
	DayPickerSingleProps,
	DayPickerRangeProps,
} from 'react-day-picker';
import { ChevronLeftIcon, ChevronRightIcon } from '../../icon/src';
import { CalendarContainer } from './CalendarContainer';

export type CalendarSingleProps = Omit<
	DayPickerSingleProps,
	'mode' | 'components'
>;

export function CalendarSingle(props: CalendarSingleProps) {
	return (
		<FocusLock autoFocus={false} returnFocus>
			<CalendarContainer range={false}>
				<DayPicker mode="single" {...defaultDayPickerProps} {...props} />
			</CalendarContainer>
		</FocusLock>
	);
}

export type CalendarRangeProps = Omit<
	DayPickerRangeProps,
	'mode' | 'components'
> & {
	returnFocusRef?: RefObject<HTMLButtonElement>;
};

export function CalendarRange({
	returnFocusRef,
	...props
}: CalendarRangeProps) {
	return (
		<FocusLock
			autoFocus={false}
			onDeactivation={() => {
				// https://github.com/theKashey/react-focus-lock#unmounting-and-focus-management
				if (!returnFocusRef) return;
				window.setTimeout(() => returnFocusRef.current?.focus(), 0);
			}}
		>
			<CalendarContainer range={true}>
				<DayPicker mode="range" {...defaultDayPickerProps} {...props} />
			</CalendarContainer>
		</FocusLock>
	);
}

const calendarLabels: Partial<Labels> = {
	// This improves the aria label for each day button
	// More info: https://github.com/gpbl/react-day-picker/pull/1582
	labelDay: (day, _, options) => {
		return format(day, 'do MMMM yyyy (EEEE)', options);
	},
};

const calendarComponents: CustomComponents = {
	IconRight: () => <ChevronRightIcon color="action" weight="bold" />,
	IconLeft: () => <ChevronLeftIcon color="action" weight="bold" />,
};

const defaultDayPickerProps = {
	components: calendarComponents,
	labels: calendarLabels,
};
