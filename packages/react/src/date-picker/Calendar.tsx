import {
	ChangeEvent,
	ChangeEventHandler,
	Fragment,
	RefObject,
	useCallback,
	useMemo,
} from 'react';
import format from 'date-fns/format';
import FocusLock from 'react-focus-lock';
import {
	CustomComponents,
	Labels,
	DayPicker,
	DayPickerSingleProps,
	DayPickerRangeProps,
	useNavigation,
	CaptionLabelProps,
} from 'react-day-picker';
import { getMonth, getYear } from 'date-fns';
import { boxPalette, mapSpacing, tokens, useId } from '../core';
import { ChevronDownIcon, ChevronLeftIcon, ChevronRightIcon } from '../icon';
import { Box } from '../box';
import { Flex } from '../flex';
import { visuallyHiddenStyles } from '../a11y';
import { CalendarContainer } from './CalendarContainer';
import { useCalendar } from './CalendarContext';

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

const currentYear = getYear(new Date());

const calendarComponents: CustomComponents = {
	IconLeft: () => <ChevronLeftIcon color="inherit" weight="bold" />,
	IconRight: () => <ChevronRightIcon color="inherit" weight="bold" />,
	// Customizing the label to include a year dropdown
	// By default, the year select will include the previous and next 10 years
	// Context  is used to pass props between the react components we own (e.g. CalendarRange) and react-day-picker components
	CaptionLabel: function CaptionLabel({ displayMonth, id }: CaptionLabelProps) {
		const { goToMonth } = useNavigation();

		const month = getMonth(displayMonth);
		const year = getYear(displayMonth);

		const onYearChange = useCallback(
			(event: ChangeEvent<HTMLSelectElement>) => {
				const year = parseInt(event.target.value);
				// Go to the first day of the month
				goToMonth(new Date(year, getMonth(displayMonth), 1));
			},
			[goToMonth, displayMonth]
		);

		const onMonthChange = useCallback(
			(event: ChangeEvent<HTMLSelectElement>) => {
				const monthIndex = parseInt(event.target.value);
				// Go to the first day of the month
				goToMonth(new Date(year, monthIndex, 1));
			},
			[goToMonth, year]
		);

		const { yearRange, yearsVisitedRef } = useCalendar();

		const yearOptions = useMemo(() => {
			// Update the map of visited years whenever the year changes
			yearsVisitedRef.current.set(year, true);

			const lowerBound = yearRange?.from ?? currentYear - 10;
			const upperBound = yearRange?.to ?? currentYear + 10;

			let yearOptions = Array.from(
				{ length: upperBound - lowerBound + 1 },
				(_, i) => i + lowerBound
			);

			// Ensures that if the user navigates to a year outside the dropdown, the dropdown options are updated
			if (yearOptions.length > 1) {
				yearsVisitedRef.current.forEach((_, key) => {
					if (!yearOptions.includes(key)) {
						yearOptions = [...yearOptions, key].sort();
					}
				});
			}

			return yearOptions.map((year) => ({ value: year, label: year }));
		}, [year, yearRange, yearsVisitedRef]);

		const monthOptions = useMemo(() => {
			return [
				{ label: 'January', value: 0 },
				{ label: 'February', value: 1 },
				{ label: 'March', value: 2 },
				{ label: 'April', value: 3 },
				{ label: 'May', value: 4 },
				{ label: 'June', value: 5 },
				{ label: 'July', value: 6 },
				{ label: 'August', value: 7 },
				{ label: 'September', value: 8 },
				{ label: 'October', value: 9 },
				{ label: 'November', value: 10 },
				{ label: 'December', value: 11 },
			];
		}, []);

		const formattedMonthYear = format(displayMonth, 'MMMM yyyy');

		return yearOptions.length > 1 ? (
			<Fragment>
				<h2
					id={id}
					aria-live="polite"
					aria-atomic="true"
					css={visuallyHiddenStyles}
				>
					{formattedMonthYear}
				</h2>
				<Flex justifyContent="center" gap={0.5} width="100%">
					<YearMonthSelect
						label="Month"
						options={monthOptions}
						value={month}
						onChange={onMonthChange}
					/>
					<YearMonthSelect
						label="Year"
						options={yearOptions}
						value={year}
						onChange={onYearChange}
					/>
				</Flex>
			</Fragment>
		) : (
			<Box
				as="h2"
				id={id}
				aria-live="polite"
				aria-atomic="true"
				fontWeight="bold"
				fontSize="lg"
				lineHeight="heading"
			>
				{formattedMonthYear}
			</Box>
		);
	},
};

function YearMonthSelect({
	label,
	options,
	value,
	onChange,
}: {
	label: string;
	options: { value: number | string; label: string | number }[];
	value: number | string;
	onChange: ChangeEventHandler<HTMLSelectElement>;
}) {
	const autoId = useId();
	const selectId = `calendar-${autoId}-select`;
	return (
		<div css={{ position: 'relative' }}>
			<label htmlFor={selectId} css={visuallyHiddenStyles}>
				{label}
			</label>
			<Box
				as="select"
				id={selectId}
				value={value}
				onChange={onChange}
				rounded
				focus
				paddingRight={1.5}
				color="text"
				fontSize="md"
				fontWeight="bold"
				css={{
					height: '2rem',
					borderWidth: tokens.borderWidth.sm,
					borderStyle: 'solid',
					borderColor: boxPalette.border,
					appearance: 'none',
					background: 'none',
					paddingLeft: mapSpacing(0.5),
					paddingRight: mapSpacing(2),
				}}
			>
				{options.map((option) => (
					<option key={option.value} value={option.value}>
						{option.label}
					</option>
				))}
			</Box>
			<ChevronDownIcon
				weight="bold"
				css={{
					position: 'absolute',
					top: '50%',
					right: mapSpacing(0.5),
					transform: 'translateY(-50%)',
					pointerEvents: 'none',
					color: boxPalette.foregroundAction,
				}}
			/>
		</div>
	);
}

const defaultDayPickerProps = {
	components: calendarComponents,
	labels: calendarLabels,
};
