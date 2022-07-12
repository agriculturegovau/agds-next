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
>;

export function CalendarRange(props: CalendarRangeProps) {
	return (
		<FocusLock autoFocus={false}>
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
