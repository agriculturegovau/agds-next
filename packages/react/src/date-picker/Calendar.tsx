import {
	ChangeEvent,
	ChangeEventHandler,
	createContext,
	Fragment,
	RefObject,
	useCallback,
	useContext,
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

export type CalendarSingleProps = Omit<
	DayPickerSingleProps,
	'mode' | 'components'
> & {
	yearRange?: { from: number; to: number };
};

export function CalendarSingle({ yearRange, ...props }: CalendarSingleProps) {
	return (
		<FocusLock autoFocus={false} returnFocus>
			<CalendarContainer range={false}>
				<CalendarLabelContext.Provider value={{ yearRange }}>
					<DayPicker mode="single" {...defaultDayPickerProps} {...props} />
				</CalendarLabelContext.Provider>
			</CalendarContainer>
		</FocusLock>
	);
}

export type CalendarRangeProps = Omit<
	DayPickerRangeProps,
	'mode' | 'components'
> & {
	yearRange?: { from: number; to: number };
	returnFocusRef?: RefObject<HTMLButtonElement>;
};

export function CalendarRange({
	yearRange,
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
				<CalendarLabelContext.Provider value={{ yearRange }}>
					<DayPicker mode="range" {...defaultDayPickerProps} {...props} />
				</CalendarLabelContext.Provider>
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
		const year = getYear(displayMonth);

		const { goToMonth } = useNavigation();
		const onYearChange = useCallback(
			(event: ChangeEvent<HTMLSelectElement>) => {
				const year = parseInt(event.target.value);
				// Go to the first day of the month
				goToMonth(new Date(year, getMonth(displayMonth), 1));
			},
			[goToMonth, displayMonth]
		);

		const { yearRange } = useCalendarLabelContext();

		const yearOptions = useMemo(() => {
			const lowerBound = yearRange?.from ?? currentYear - 10;
			const upperBound = yearRange?.to ?? currentYear + 10;

			let yearOptions = Array.from(
				{ length: upperBound - lowerBound + 1 },
				(_, i) => i + lowerBound
			);
			// Ensures that if the user navigates to a year outside the dropdown, the dropdown options are updated
			if (yearOptions.length > 1 && !yearOptions.includes(year)) {
				yearOptions = [...yearOptions, year].sort();
			}

			return yearOptions;
		}, [year, yearRange]);

		const formattedMonth = format(displayMonth, 'MMMM');
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
				<Flex alignItems="center" gap={0.5} width="100%">
					<Flex
						as="span"
						color="text"
						fontSize="lg"
						lineHeight="heading"
						fontWeight="bold"
						width="50%"
						justifyContent="flex-end"
					>
						{formattedMonth}
					</Flex>
					<Flex width="50%" justifyContent="flex-start">
						<YearSelect
							options={yearOptions}
							value={year}
							onChange={onYearChange}
						/>
					</Flex>
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

function YearSelect({
	options,
	value,
	onChange,
}: {
	options: number[];
	value: number;
	onChange: ChangeEventHandler<HTMLSelectElement>;
}) {
	const autoId = useId();
	const selectId = `calendar-${autoId}-year`;
	return (
		<div css={{ position: 'relative' }}>
			<label htmlFor={selectId} css={visuallyHiddenStyles}>
				Year
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
				fontSize="lg"
				lineHeight="nospace"
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
					<option key={option}>{option}</option>
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

type CalendarLabelContextType = {
	yearRange?: { from: number; to: number };
};

const CalendarLabelContext = createContext<
	CalendarLabelContextType | undefined
>(undefined);

function useCalendarLabelContext() {
	const context = useContext(CalendarLabelContext);
	if (!context) throw Error('No context found');
	return context;
}

const defaultDayPickerProps = {
	components: calendarComponents,
	labels: calendarLabels,
};
