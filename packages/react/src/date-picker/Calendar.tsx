import {
	Fragment,
	type ChangeEvent,
	type ChangeEventHandler,
	type MouseEventHandler,
	type RefObject,
	useCallback,
	useMemo,
	useRef,
} from 'react';
import FocusLock from 'react-focus-lock';
import {
	CustomComponents,
	DayPicker,
	type CaptionLabelProps,
	type CaptionProps,
	type DayPickerRangeProps,
	type DayPickerSingleProps,
	type DayProps,
	type RowProps,
	useDayPicker,
	useDayRender,
	useNavigation,
} from 'react-day-picker';
import {
	addDays,
	format,
	getMonth,
	getUnixTime,
	getYear,
	startOfISOWeek,
	startOfWeek,
	type Locale,
} from 'date-fns';
import { boxPalette, mapSpacing, tokens, useId } from '../core';
import { ChevronDownIcon, ChevronLeftIcon, ChevronRightIcon } from '../icon';
import { Box } from '../box';
import { Flex } from '../flex';
import { visuallyHiddenStyles } from '../a11y';
import { CalendarContainer, CalendarRangeContainer } from './CalendarContainer';
import { useCalendar } from './CalendarContext';
import { formatHumanReadableDate } from './utils';

/**
 * Generate a series of 7 days, starting from the week, to use for formatting
 * the weekday names (Monday, Tuesday, etc.).
 */
export function getWeekdays(
	locale?: Locale,
	/** The index of the first day of the week (0 - Sunday). */
	weekStartsOn?: 0 | 1 | 2 | 3 | 4 | 5 | 6,
	/** Use ISOWeek instead of locale/ */
	ISOWeek?: boolean
): Date[] {
	const start = ISOWeek
		? startOfISOWeek(new Date())
		: startOfWeek(new Date(), { locale, weekStartsOn });

	const days = [];
	for (let i = 0; i < 7; i++) {
		const day = addDays(start, i);
		days.push(day);
	}
	return days;
}

export type CalendarSingleProps = Omit<
	DayPickerSingleProps,
	'mode' | 'components'
>;

export function CalendarSingle(props: CalendarSingleProps) {
	return (
		<FocusLock autoFocus={false} returnFocus>
			<CalendarContainer>
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
			<CalendarRangeContainer dateRange={props.selected}>
				<DayPicker mode="range" {...defaultDayPickerProps} {...props} />
			</CalendarRangeContainer>
		</FocusLock>
	);
}

const currentYear = getYear(new Date());

const calendarComponents: CustomComponents = {
	/*
		Custom `Caption` component to improve acessibility and focus order of react-day-picker
		Default:
		* Caption.tsx: https://github.com/gpbl/react-day-picker/blob/9ad13dc72fff814dcf720a62f6e3b5ea38e8af6d/src/components/Caption.tsx
		* CaptionNavigation.tsx: https://github.com/gpbl/react-day-picker/blob/9ad13dc72fff814dcf720a62f6e3b5ea38e8af6d/src/components/CaptionNavigation.tsx
		* Navigation.tsx: https://github.com/gpbl/react-day-picker/blob/9ad13dc72fff814dcf720a62f6e3b5ea38e8af6d/src/components/Navigation.tsx
	*/
	Caption: function Caption(props: CaptionProps) {
		const {
			classNames,
			styles,
			components,
			labels: { labelPrevious, labelNext },
			locale,
		} = useDayPicker();
		const { previousMonth, nextMonth, goToMonth } = useNavigation();

		const handlePreviousClick: MouseEventHandler = () => {
			if (!previousMonth) return;
			goToMonth(previousMonth);
		};

		const handleNextClick: MouseEventHandler = () => {
			if (!nextMonth) return;
			goToMonth(nextMonth);
		};

		const CaptionLabelComponent = components?.CaptionLabel;

		const previousLabel = labelPrevious(previousMonth, { locale });
		const previousClassName = [
			classNames.button_reset,
			classNames.button,
			classNames.nav_button,
			classNames.nav_button_previous,
		].join(' ');

		const nextLabel = labelNext(nextMonth, { locale });
		const nextClassName = [
			classNames.button_reset,
			classNames.button,
			classNames.nav_button,
			classNames.nav_button_next,
		].join(' ');

		return (
			<div className={classNames.caption} style={styles.caption}>
				<button
					aria-label={previousLabel}
					className={previousClassName}
					disabled={!previousMonth}
					onClick={handlePreviousClick}
				>
					<ChevronLeftIcon color="inherit" weight="bold" />
				</button>
				<CaptionLabelComponent
					id={props.id}
					displayMonth={props.displayMonth}
					displayIndex={props.displayIndex}
				/>
				<button
					aria-label={nextLabel}
					className={nextClassName}
					disabled={!nextMonth}
					onClick={handleNextClick}
				>
					<ChevronRightIcon color="inherit" weight="bold" />
				</button>
			</div>
		);
	},
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
	// Custom `HeadRow` component to abide by Date Picker Dialog ARIA pattern
	// Default: https://github.com/gpbl/react-day-picker/blob/9ad13dc72fff814dcf720a62f6e3b5ea38e8af6d/src/components/HeadRow.tsx
	HeadRow: function HeadRow() {
		const {
			classNames,
			styles,
			locale,
			weekStartsOn,
			ISOWeek,
			formatters: { formatWeekdayName },
			labels: { labelWeekday },
		} = useDayPicker();

		const weekdays = getWeekdays(locale, weekStartsOn, ISOWeek);

		return (
			<tr style={styles.head_row} className={classNames.head_row}>
				{weekdays.map((weekday, i) => (
					<th
						key={i}
						scope="col"
						className={classNames.head_cell}
						style={styles.head_cell}
						abbr={labelWeekday(weekday, { locale })}
					>
						{formatWeekdayName(weekday, { locale })}
					</th>
				))}
			</tr>
		);
	},
	// Custom `Row` component to abide by Date Picker Dialog ARIA pattern
	// Default: https://github.com/gpbl/react-day-picker/blob/9ad13dc72fff814dcf720a62f6e3b5ea38e8af6d/src/components/Row.tsx
	Row: function Row(props: RowProps) {
		const { styles, classNames, components } = useDayPicker();

		// Will always have a DayComponent. To satisfy TypeScript only
		const DayComponent = components?.Day;
		if (!DayComponent) return null;

		return (
			<tr className={classNames.row} style={styles.row}>
				{props.dates.map((date) => (
					<DayComponent
						key={getUnixTime(date)}
						displayMonth={props.displayMonth}
						date={date}
					/>
				))}
			</tr>
		);
	},
	// Custom `Day` component to abide by Date Picker Dialog ARIA pattern
	// Default: https://github.com/gpbl/react-day-picker/blob/9ad13dc72fff814dcf720a62f6e3b5ea38e8af6d/src/components/Day.tsx
	// Day: function Day(props: DayProps) {
	// 	const buttonRef = useRef<HTMLButtonElement>(null);
	// 	const { classNames, styles } = useDayPicker();
	// 	const { activeModifiers, buttonProps, divProps, isButton, isHidden } =
	// 		useDayRender(props.date, props.displayMonth, buttonRef);

	// 	return (
	// 		<td
	// 			aria-selected={
	// 				// React Day Picker incorrectly marks ranges as selected
	// 				activeModifiers.range_middle ? undefined : activeModifiers.selected
	// 			}
	// 			className={classNames.cell}
	// 			role="gridcell"
	// 			style={styles.cell}
	// 		>
	// 			{isHidden ? (
	// 				// Announce Blank so SR screen reader virtual cursor appears
	// 				<VisuallyHidden>Blank</VisuallyHidden>
	// 			) : !isButton ? (
	// 				// This case should never happen, but catering for it as per the OOTB RDP
	// 				<div
	// 					{...divProps}
	// 					// Remove `role` from `divProps`
	// 					role={undefined}
	// 				/>
	// 			) : (
	// 				<ReactDayPickerButton
	// 					name="day"
	// 					ref={buttonRef}
	// 					{...buttonProps}
	// 					// Improve the aria labels of each button.
	// 					// Selected and dates within range are manually announced.
	// 					aria-label={`${
	// 						activeModifiers.selected && !activeModifiers.range_middle
	// 							? 'Selected. '
	// 							: ''
	// 					}${formatHumanReadableDate(props.date)}${
	// 						activeModifiers.range_middle ? '. Between selected dates' : ''
	// 					}`}
	// 					// Remove `aria-selected` from `buttonProps`. It's on the `<td>`
	// 					aria-selected={undefined}
	// 					// Remove `role` from `buttonProps`
	// 					role={undefined}
	// 				/>
	// 			)}
	// 		</td>
	// 	);
	// },
	// Day: function Day(props: DayProps) {
	// 	const buttonRef = useRef<HTMLButtonElement>(null);
	// 	const { classNames, styles } = useDayPicker();
	// 	const { activeModifiers, buttonProps, divProps, isButton, isHidden } =
	// 		useDayRender(props.date, props.displayMonth, buttonRef);

	// 	return (
	// 		<td
	// 			aria-selected={
	// 				// React Day Picker incorrectly marks ranges as selected
	// 				activeModifiers.range_middle ? undefined : activeModifiers.selected
	// 			}
	// 			className={classNames.cell}
	// 			role="gridcell"
	// 			style={styles.cell}
	// 		>
	// 			{isHidden ? (
	// 				// Announce Blank so SR screen reader virtual cursor appears
	// 				<VisuallyHidden>Blank</VisuallyHidden>
	// 			) : !isButton ? (
	// 				// This case should never happen, but catering for it as per the OOTB RDP
	// 				<div
	// 					{...divProps}
	// 					// Remove `role` from `divProps`
	// 					role={undefined}
	// 				/>
	// 			) : (
	// 				<Button
	// 					name="day"
	// 					ref={buttonRef}
	// 					{...buttonProps}
	// 					onKeyDown={(e) => {
	// 						if (e.key === 'Enter' || e.key === 'Space') {
	// 							e.preventDefault();
	// 							e.stopPropagation();
	// 							buttonProps.onClick(e);
	// 						} else {
	// 							buttonProps.onKeyDown(e);
	// 						}
	// 					}}
	// 					// Improve the aria labels of each button.
	// 					// Selected and dates within range are manually announced.
	// 					aria-label={`${
	// 						activeModifiers.selected && !activeModifiers.range_middle
	// 							? 'Selected. '
	// 							: ''
	// 					}${formatHumanReadableDate(props.date)}${
	// 						activeModifiers.range_middle ? '. Between selected dates' : ''
	// 					}`}
	// 					// Remove `aria-selected` from `buttonProps`. It's on the `<td>`
	// 					aria-selected={undefined}
	// 					// Remove `role` from `buttonProps`
	// 					role={undefined}
	// 				/>
	// 			)}
	// 		</td>
	// 	);
	// },
	Day: function Day(props: DayProps) {
		const buttonRef = useRef<HTMLButtonElement>(null);
		const { activeModifiers, buttonProps, isHidden } = useDayRender(
			props.date,
			props.displayMonth,
			buttonRef
		);

		// @ts-expect-error: role is unused
		const { onClick, onKeyDown, role, ...restButtonProps } = buttonProps;

		return (
			<td
				aria-current={activeModifiers.today ? 'date' : undefined}
				// Improve the aria labels of each button.
				// Selected and dates within range are manually announced.
				aria-label={`${
					activeModifiers.selected && !activeModifiers.range_middle
						? 'Selected. '
						: ''
				}${formatHumanReadableDate(props.date)}${
					activeModifiers.range_middle ? '. Between selected dates' : ''
				}`}
				aria-selected={
					// React Day Picker incorrectly marks ranges as selected
					activeModifiers.range_middle ? undefined : activeModifiers.selected
				}
				// @ts-expect-error: Type 'MouseEventHandler<HTMLButtonElement> | undefined' is not assignable to type 'MouseEventHandler<HTMLTableDataCellElement> | undefined'
				onClick={onClick}
				onKeyDown={(event) => {
					if (event.key === 'Enter' || event.key === 'Space') {
						event.preventDefault();
						event.stopPropagation();
						// @ts-expect-error: Argument of type 'KeyboardEvent<HTMLTableDataCellElement>' is not assignable to parameter of type 'KeyboardEvent<HTMLButtonElement>'
						onClick?.(event);
					} else {
						// @ts-expect-error: Argument of type 'KeyboardEvent<HTMLTableDataCellElement>' is not assignable to parameter of type 'KeyboardEvent<HTMLButtonElement>'
						onKeyDown?.(event);
					}
				}}
				// @ts-expect-error: Type 'RefObject<HTMLButtonElement>' is not assignable to type 'LegacyRef<HTMLTableDataCellElement> | undefined'
				ref={buttonRef}
				tabIndex={-1}
				{...(isHidden ? undefined : restButtonProps)}
			>
				{/* Without this focusable span, left and right do not work in screen readers */}
				<span tabIndex={-1}>
					{isHidden ? undefined : restButtonProps.children}
				</span>
			</td>
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
				focusRingFor="keyboard"
				paddingRight={1.5}
				color="text"
				fontWeight="bold"
				css={{
					appearance: 'none',
					background: 'none',
					borderColor: boxPalette.border,
					borderStyle: 'solid',
					borderWidth: tokens.borderWidth.sm,
					fontSize: `${tokens.fontSize.xs.sm}rem`,
					height: '2rem',
					paddingLeft: mapSpacing(0.5),
					paddingRight: mapSpacing(2),
					'@media(min-width: 375px)': {
						fontSize: `${tokens.fontSize.xs.md}rem`,
					},
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
};
