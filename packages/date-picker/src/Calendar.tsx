import { RefObject } from 'react';
import FocusLock from 'react-focus-lock';
import {
	CustomComponents,
	DayPicker,
	DayPickerSingleProps,
	DayPickerRangeProps,
} from 'react-day-picker';
import { ChevronLeftIcon, ChevronRightIcon } from '@ag.ds-next/icon';
import { CalendarContainer } from './CalendarContainer';

export type CalendarSingleProps = Omit<
	DayPickerSingleProps,
	'mode' | 'components'
>;

export function CalendarSingle(props: CalendarSingleProps) {
	return (
		<FocusLock autoFocus={false} returnFocus>
			<CalendarContainer>
				<DayPicker mode="single" components={calendarComponents} {...props} />
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
			<CalendarContainer>
				<DayPicker mode="range" components={calendarComponents} {...props} />
			</CalendarContainer>
		</FocusLock>
	);
}

const calendarComponents: CustomComponents = {
	IconRight: () => <ChevronRightIcon color="action" weight="bold" />,
	IconLeft: () => <ChevronLeftIcon color="action" weight="bold" />,
};
