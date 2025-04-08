import React from 'react';
import {
	Fragment,
	type ChangeEvent,
	type ChangeEventHandler,
	type MouseEventHandler,
	useCallback,
	useMemo,
} from 'react';
import FocusLock from 'react-focus-lock';
import {
	CustomComponents,
	DayPicker,
	type CaptionLabelProps,
	type MonthCaptionProps,
	type PropsRange,
	type PropsSingle,
	type DayProps,
	useDayPicker,
	DayButtonProps,
} from 'react-day-picker';
import {
	addDays,
	format,
	getMonth,
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

export type CalendarSingleProps = Omit<PropsSingle, 'mode' | 'components'>;

export function CalendarSingle(props: CalendarSingleProps) {
	return (
		<FocusLock autoFocus={false} returnFocus>
			<CalendarContainer>
				<DayPicker mode="single" {...defaultDayPickerProps} {...props} />
			</CalendarContainer>
		</FocusLock>
	);
}

export type CalendarRangeProps = Omit<PropsRange, 'mode' | 'components'> & {
	inputMode?: 'from' | 'to';
};

export function CalendarRange({ inputMode, ...props }: CalendarRangeProps) {
	return (
		<FocusLock autoFocus={false}>
			<CalendarRangeContainer dateRange={props.selected} inputMode={inputMode}>
				<DayPicker mode="range" {...defaultDayPickerProps} {...props} />
			</CalendarRangeContainer>
		</FocusLock>
	);
}

const currentYear = getYear(new Date());

const calendarComponents: Partial<CustomComponents> = {
	// Overwrite Nav, integrated in MonthCaption
	Nav: function Nav() {
		return null;
	},
	/*
		Custom `Caption` component to improve acessibility and focus order of react-day-picker
		Default:
		* Caption.tsx: https://github.com/gpbl/react-day-picker/blob/9ad13dc72fff814dcf720a62f6e3b5ea38e8af6d/src/components/Caption.tsx
		* CaptionNavigation.tsx: https://github.com/gpbl/react-day-picker/blob/9ad13dc72fff814dcf720a62f6e3b5ea38e8af6d/src/components/CaptionNavigation.tsx
		* Navigation.tsx: https://github.com/gpbl/react-day-picker/blob/9ad13dc72fff814dcf720a62f6e3b5ea38e8af6d/src/components/Navigation.tsx
	*/
	MonthCaption: function Caption(props: MonthCaptionProps) {
		const {
			classNames,
			components,
			goToMonth,
			labels: { labelPrevious, labelNext },
			months,
			nextMonth,
			previousMonth,
			styles,
		} = useDayPicker();

		const handlePreviousClick: MouseEventHandler = () => {
			if (!previousMonth) return;
			goToMonth(previousMonth);
		};

		const handleNextClick: MouseEventHandler = () => {
			if (!nextMonth) return;
			goToMonth(nextMonth);
		};

		const CaptionLabelComponent = components?.CaptionLabel;

		const previousLabel = labelPrevious(previousMonth);
		const previousClassName = [classNames.button_previous].join(' ');

		const nextLabel = labelNext(nextMonth);
		const nextClassName = [classNames.button_next].join(' ');

		const isFirst = props.displayIndex === 0;
		const isLast = props.displayIndex === months.length - 1;

		return (
			<div className={classNames.month_caption} style={styles?.month_caption}>
				{isFirst && (
					<button
						aria-label={previousLabel}
						className={previousClassName}
						disabled={!previousMonth}
						onClick={handlePreviousClick}
						type="button"
					>
						<ChevronLeftIcon color="inherit" weight="bold" />
					</button>
				)}
				{CaptionLabelComponent && <CaptionLabelComponent id={props.id} />}
				{isLast && (
					<button
						aria-label={nextLabel}
						className={nextClassName}
						disabled={!nextMonth}
						onClick={handleNextClick}
						type="button"
					>
						<ChevronRightIcon color="inherit" weight="bold" />
					</button>
				)}
			</div>
		);
	},
	// Customizing the label to include a year dropdown
	// By default, the year select will include the previous and next 10 years
	// Context  is used to pass props between the react components we own (e.g. CalendarRange) and react-day-picker components
	CaptionLabel: function CaptionLabel({ id }: CaptionLabelProps) {
		const { goToMonth, dayPickerProps, ...rest } = useDayPicker();
		// TODO: Function this into usable state
		const displayIndex = 0;
		const displayMonth = rest.months[displayIndex].date;

		const month = getMonth(displayMonth);
		const year = getYear(displayMonth);

		const onYearChange = useCallback(
			(event: ChangeEvent<HTMLSelectElement>) => {
				const year = parseInt(event.target.value);
				// Go to the first day of the month
				goToMonth(
					new Date(year, getMonth(displayMonth) - (displayIndex || 0), 1)
				);
			},
			[displayIndex, displayMonth, goToMonth]
		);

		const onMonthChange = useCallback(
			(event: ChangeEvent<HTMLSelectElement>) => {
				const monthIndex = parseInt(event.target.value);
				// Go to the first day of the month
				goToMonth(new Date(year, monthIndex - (displayIndex || 0), 1));
			},
			[displayIndex, goToMonth, year]
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
				<h2 aria-atomic aria-live="polite" css={visuallyHiddenStyles} id={id}>
					{formattedMonthYear}
				</h2>
				<Flex gap={0.5} justifyContent="center" width="100%">
					<YearMonthSelect
						label="Month"
						onChange={onMonthChange}
						options={monthOptions}
						value={month}
					/>
					<YearMonthSelect
						label="Year"
						onChange={onYearChange}
						options={yearOptions}
						value={year}
					/>
				</Flex>
			</Fragment>
		) : (
			<Box
				aria-atomic
				aria-live="polite"
				as="h2"
				fontSize="lg"
				fontWeight="bold"
				id={id}
				lineHeight="heading"
			>
				{formattedMonthYear}
			</Box>
		);
	},
	// Custom `HeadRow` component to abide by Date Picker Dialog ARIA pattern
	// Default: https://github.com/gpbl/react-day-picker/blob/9ad13dc72fff814dcf720a62f6e3b5ea38e8af6d/src/components/HeadRow.tsx
	// HeadRow: function HeadRow() {
	// 	const {
	// 		classNames,
	// 		styles,
	// 		locale,
	// 		weekStartsOn,
	// 		ISOWeek,
	// 		formatters: { formatWeekdayName },
	// 		labels: { labelWeekday },
	// 	} = useDayPicker();

	// 	const weekdays = getWeekdays(locale, weekStartsOn, ISOWeek);

	// 	return (
	// 		<tr style={styles.head_row} className={classNames.head_row}>
	// 			{weekdays.map((weekday, i) => (
	// 				<th
	// 					key={i}
	// 					scope="col"
	// 					className={classNames.head_cell}
	// 					style={styles.head_cell}
	// 					// I disagree with using abbr instead of aria-label as it's never announced
	// 					// As per MDN: https://developer.mozilla.org/en-US/docs/Web/HTML/Element/th#abbr
	// 					// A short, abbreviated description of the header cell's content provided as an alternative label to use for the header cell when referencing the cell in other contexts. Some user-agents, such as speech readers, may present this description before the content itself.
	// 					abbr={labelWeekday(weekday, { locale })}
	// 				>
	// 					{formatWeekdayName(weekday, { locale })}
	// 				</th>
	// 			))}
	// 		</tr>
	// 	);
	// },
	// Custom `Week` component to abide by Date Picker Dialog ARIA pattern
	// Default: http://github.com/gpbl/react-day-picker/blob/main/src/components/Week.tsx
	Day: function Day(props: DayProps) {
		const { modifiers } = props;
		// Draw hidden day table cells
		if (modifiers.hidden) {
			return <td></td>;
		}
		return props.children;
	},
	/**
	 * Custom `DayButton` component combined with the `Day` component to abide by Date Picker Dialog ARIA pattern
	 * Default DayButton: https://github.com/gpbl/react-day-picker/blob/main/src/components/DayButton.tsx
	 * Default Day: https://github.com/gpbl/react-day-picker/blob/main/src/components/Day.tsx
	 */
	DayButton: function DayButton(props: DayButtonProps) {
		const {
			children,
			className,
			day,
			disabled,
			modifiers,
			onBlur,
			onClick,
			onFocus,
			onKeyDown,
			...restProps
		} = props;
		const { classNames } = useDayPicker();
		const { onHover, clearHoveredDay } = useCalendar();

		const ref = React.useRef<HTMLTableCellElement>(null);
		React.useEffect(() => {
			if (modifiers.focused) ref.current?.focus();
		}, [modifiers.focused]);

		const isHidden = modifiers.hidden;

		const handleKeyDown = (event: KeyboardEvent) => {
			if (!isHidden && (event.key === 'Enter' || event.key === 'Space')) {
				event.preventDefault();
				event.stopPropagation();
				// @ts-expect-error: Argument of type 'KeyboardEvent' is not assignable to parameter of type 'MouseEvent<HTMLButtonElement, MouseEvent>'.
				onClick?.(event);
			} else {
				// @ts-expect-error: Argument of type 'KeyboardEvent' is not assignable to parameter of type 'KeyboardEvent<HTMLButtonElement>'
				onKeyDown?.(event);
			}
		};

		const interactiveProps = {
			'aria-current': (modifiers.today ? 'date' : undefined) as
				| 'date'
				| undefined,
			// Improve the aria labels of each button.
			// Selected and dates within range are manually announced.
			'aria-label': `${
				modifiers.selected && !modifiers?.range_middle ? 'Selected. ' : ''
			}${formatHumanReadableDate(day.date)}${
				modifiers?.range_middle ? '. Between selected dates' : ''
			}`,
			'aria-selected':
				// React Day Picker incorrectly marks ranges as selected
				modifiers?.range_middle ? undefined : modifiers.selected,
			// react-day-picker flags types button actions and we will get TS errors for <td>
			onBlur: onBlur as React.FocusEventHandler<unknown>,
			onClick: onClick as React.MouseEventHandler<unknown>,
			onFocus: onFocus as React.FocusEventHandler<unknown>,
			onKeyDown: handleKeyDown as any, // TODO: Fix this typing
			onMouseEnter: () => {
				if (onHover && !isHidden) {
					clearHoveredDay?.cancel();
					onHover(day.date);
				}
			},
			onMouseLeave: () => {
				if (onHover && clearHoveredDay && !isHidden) {
					clearHoveredDay();
				}
			},
		};

		const tableCellClassNames = [
			classNames.day,
			modifiers.today ? classNames.today : undefined,
			modifiers.selected ? classNames.selected : undefined,
		].join(' ');

		return (
			<td
				{...restProps}
				className={tableCellClassNames}
				//@ts-expect-error: Property 'disabled' does not exist on type 'ClassAttributes<HTMLTableDataCellElement> & TdHTMLAttributes<HTMLTableDataCellElement> & { ...; }'
				disabled={disabled}
				ref={ref}
				{...(isHidden ? undefined : interactiveProps)}
			>
				<span className={className} tabIndex={-1}>
					{children}
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
			<label css={visuallyHiddenStyles} htmlFor={selectId}>
				{label}
			</label>
			<Box
				as="select"
				autoComplete="off"
				color="text"
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
				focusRingFor="keyboard"
				fontWeight="bold"
				id={selectId}
				onChange={onChange}
				paddingRight={1.5}
				rounded
				value={value}
			>
				{options.map((option) => (
					<option key={option.value} value={option.value}>
						{option.label}
					</option>
				))}
			</Box>
			<ChevronDownIcon
				css={{
					position: 'absolute',
					top: '50%',
					right: mapSpacing(0.5),
					transform: 'translateY(-50%)',
					pointerEvents: 'none',
					color: boxPalette.foregroundAction,
				}}
				weight="bold"
			/>
		</div>
	);
}

const defaultDayPickerProps = {
	components: calendarComponents,
};
