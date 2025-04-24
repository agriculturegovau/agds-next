import {
	addDays,
	format,
	getMonth,
	getYear,
	startOfISOWeek,
	startOfWeek,
	type Locale,
} from 'date-fns';
import React, {
	Fragment,
	type ChangeEvent,
	type ChangeEventHandler,
	type MouseEventHandler,
	type RefObject,
	useCallback,
	useMemo,
} from 'react';
import {
	DayPicker,
	type CaptionLabelProps,
	type CustomComponents,
	type DateRange,
	type DayButtonProps,
	type DayProps,
	type MonthCaptionProps,
	type PropsBase,
	type PropsRange,
	type PropsSingle,
	type WeekdaysProps,
	useDayPicker,
} from 'react-day-picker';
import FocusLock from 'react-focus-lock';
import { visuallyHiddenStyles } from '../a11y';
import { Box } from '../box';
import { boxPalette, mapSpacing, tokens, useId } from '../core';
import { Flex } from '../flex';
import { ChevronDownIcon, ChevronLeftIcon, ChevronRightIcon } from '../icon';
import { CalendarContainer, CalendarRangeContainer } from './CalendarContainer';
import { useCalendar } from './CalendarContext';
import { formatHumanReadableDate } from './utils';

type CustomCaptionLabelProps = CaptionLabelProps & { displayIndex: number };
type CustomDayButtonProps = DayButtonProps & {
	dayProps: DayProps;
};

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
	PropsBase & PropsSingle,
	'mode' | 'components'
>;

export function CalendarSingle(props: CalendarSingleProps) {
	return (
		<FocusLock autoFocus={false}>
			<CalendarContainer>
				<DayPicker mode="single" {...defaultDayPickerProps} {...props} />
			</CalendarContainer>
		</FocusLock>
	);
}

export type CalendarRangeProps = Omit<
	PropsBase & PropsRange,
	'mode' | 'components'
> & {
	inputMode?: 'from' | 'to';
	Ref?: RefObject<HTMLDivElement>;
};

export function CalendarRange({
	inputMode,
	Ref,
	...props
}: CalendarRangeProps) {
	return (
		<FocusLock autoFocus={false}>
			<CalendarRangeContainer Ref={Ref} inputMode={inputMode}>
				<DayPicker mode="range" {...defaultDayPickerProps} {...props} />
			</CalendarRangeContainer>
		</FocusLock>
	);
}

const currentYear = getYear(new Date());

const calendarComponents: Partial<CustomComponents> = {
	// Nav is combined with the `MonthCaption` component, this forces an override to remove a duplicated navigation
	Nav: function Nav() {
		return null;
	},
	/*
		Custom `Caption` component to improve accessibility and focus order of react-day-picker
		Default:
		* MonthCaption.tsx: https://github.com/gpbl/react-day-picker/blob/667be07ff1884257abbbafc005008f18ef318cc9/src/components/MonthCaption.tsx
		* Nav.tsx: https://github.com/gpbl/react-day-picker/blob/48f00dc20f920ee2174eb5b196bb0034b4ac19d1/src/components/Nav.tsx
	*/
	MonthCaption: function MonthCaption(props: MonthCaptionProps) {
		const { children, displayIndex } = props;
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
		const nextLabel = labelNext(nextMonth);

		const isFirst = displayIndex === 0;
		const isLast = displayIndex === months.length - 1;

		return (
			<div className={classNames.month_caption} style={styles?.month_caption}>
				{isFirst && (
					<button
						aria-label={previousLabel}
						className={classNames.button_previous}
						disabled={!previousMonth}
						onClick={handlePreviousClick}
						type="button"
					>
						<ChevronLeftIcon color="inherit" weight="bold" />
					</button>
				)}
				{CaptionLabelComponent && (
					<CaptionLabelComponent
						{...(children as React.ReactElement).props}
						displayIndex={props.displayIndex}
					/>
				)}

				{isLast && (
					<button
						aria-label={nextLabel}
						className={classNames.button_next}
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
	// Context is used to pass props between the react components we own (e.g. CalendarRange) and react-day-picker components
	// Default: https://github.com/gpbl/react-day-picker/blob/667be07ff1884257abbbafc005008f18ef318cc9/src/components/CaptionLabel.tsx
	// @ts-expect-error: Type 'HTMLAttributes<HTMLSpanElement>' is not assignable to type 'CustomCaptionLabelProps'.
	CaptionLabel: function CaptionLabel(props: CustomCaptionLabelProps) {
		const { displayIndex } = props;
		const { goToMonth, months } = useDayPicker();
		const displayMonth = months[displayIndex].date;

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
				<h2 aria-atomic aria-live="polite" css={visuallyHiddenStyles}>
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
				lineHeight="heading"
			>
				{formattedMonthYear}
			</Box>
		);
	},
	// Overwrite the default `Weekdays` that passes `aria-hidden` into the <thead> which is not correct
	// Default: https://github.com/gpbl/react-day-picker/blob/667be07ff1884257abbbafc005008f18ef318cc9/src/components/Weekdays.tsx
	Weekdays: function Weekdays(props: WeekdaysProps) {
		return (
			<thead>
				<tr {...props} />
			</thead>
		);
	},
	// Custom `Day` that passes properties to the `DayButton` component or renders hidden table cells
	// In v9 `Day` was split into both `Day` and `DayButton`
	Day: function Day(props: DayProps) {
		const { children, modifiers } = props;
		const { components } = useDayPicker();

		// Draw hidden day table cells
		if (modifiers.hidden || !children) {
			return (
				<td tabIndex={-1}>
					{/* Without this focusable span, left and right do not work in screen readers */}
					<span tabIndex={-1}>{children}</span>
				</td>
			);
		}

		// We have to pass the props into the DayButton component to be rendered into the `<td>`
		// Filter out the props that are not required
		const dayProps = {
			...props,
			children: undefined,
			day: undefined,
			modifiers: undefined,
			role: undefined, // Redundant role "gridcell" on <td> [no-redundant-role]
		};
		const DayButtonComponent = components.DayButton;
		return (
			<DayButtonComponent
				{...(children as React.ReactElement).props}
				dayProps={dayProps}
			/>
		);
	},
	/**
	 * Custom `DayButton` component combined with the `Day` component to abide by Date Picker Dialog ARIA pattern
	 * Both props are merged into the table cell: `Day` contains styling and current states, `DayButton` contains functionality and events
	 * Key change: we no longer render <button>s, everything happens on <td>s
	 * Default DayButton: https://github.com/gpbl/react-day-picker/blob/667be07ff1884257abbbafc005008f18ef318cc9/src/components/DayButton.tsx
	 * Default Day: https://github.com/gpbl/react-day-picker/blob/af8deb602b7ebb4c0f99a86139b63041352157bf/src/components/Day.tsx
	 */
	// @ts-expect-error Property 'dayClassName' is missing in type '{ day: CalendarDay; modifiers: Modifiers; } & ButtonHTMLAttributes<HTMLButtonElement>'
	DayButton: function DayButton(props: CustomDayButtonProps) {
		const {
			children,
			className,
			day,
			dayProps,
			disabled,
			modifiers,
			onClick,
			onKeyDown,
			type,
			...restDayButtonProps
		} = props;
		const { classNames, dayPickerProps, selected } = useDayPicker();
		const { clearHoveredDay, onHover } = useCalendar();
		const isHidden = modifiers.hidden;

		const ref = React.useRef<HTMLTableCellElement>(null);
		React.useEffect(() => {
			if (modifiers.focused) ref.current?.focus();
		}, [modifiers.focused]);

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

		const ariaProps = {
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
		};

		// Custom start and end selectors for focus, modifiers ranges are only applied after both are selected
		const dataProps = {
			'data-start-day': modifiers?.range_start
				? modifiers.range_start
				: undefined,
			'data-end-day': modifiers?.range_end ? modifiers.range_end : undefined,
		};

		// The interactive props are typed for Button but are used in the <td>
		const interactiveProps = {
			onClick,
			onKeyDown: handleKeyDown,
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

		// In react-day-picker v9, the class names `range_start` and `range_end` are only given once both start and end dates are selected
		// This function checks either start or end date has been selected and returns the classNames
		function getDateRangeClassNames() {
			// Only check in `range` mode
			if (dayPickerProps.mode !== 'range') return [];
			// Check if cell is selected and if a start or end date has been selected
			if (!modifiers.selected || !selected) return [];

			const { to, from } = selected as DateRange;
			// Only start date selected
			if (from && !to) return [classNames.range_start];
			// Only end date selected
			if (!from && to) return [classNames.range_end];

			return [];
		}

		const tableCellClassNames = [
			dayProps.className,
			...getDateRangeClassNames(),
		].join(' ');

		return (
			<td
				{...dayProps}
				{...restDayButtonProps}
				{...ariaProps}
				{...dataProps}
				className={tableCellClassNames}
				// @ts-expect-error: Property 'disabled' does not exist on type 'ClassAttributes<HTMLTableDataCellElement> & TdHTMLAttributes<HTMLTableDataCellElement> & { ...; }'
				disabled={disabled}
				ref={ref}
				{...interactiveProps}
			>
				{/* Without this focusable span, left and right do not work in screen readers */}
				<span tabIndex={-1}>{children}</span>
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
