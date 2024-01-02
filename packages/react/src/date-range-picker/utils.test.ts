import { add, subDays } from 'date-fns';
import {
	getValidDateRange,
	ensureValidDateRange,
	getCalendarDefaultMonth,
} from './utils';

describe('getValidDateRange', () => {
	test('works from empty values', () => {
		const today = new Date();
		const nextWeek = add(today, { weeks: 1 });

		expect(
			getValidDateRange('from', today, { from: undefined, to: undefined })
		).toStrictEqual({ from: today, to: undefined });

		expect(
			getValidDateRange('to', nextWeek, { from: today, to: undefined })
		).toStrictEqual({ from: today, to: nextWeek });
	});

	test('works with existing values', () => {
		const today = new Date();
		const nextWeek = add(today, { weeks: 1 });
		const nextMonth = add(today, { months: 1 });

		expect(
			getValidDateRange('from', today, { from: nextMonth, to: nextMonth })
		).toStrictEqual({ from: today, to: nextMonth });

		expect(
			getValidDateRange('to', nextMonth, { from: today, to: nextWeek })
		).toStrictEqual({ from: today, to: nextMonth });

		expect(
			getValidDateRange('to', nextWeek, { from: today, to: nextMonth })
		).toStrictEqual({ from: today, to: nextWeek });
	});

	test('selecting a start date after the end date', () => {
		const today = new Date();
		const nextWeek = add(today, { weeks: 1 });
		const nextMonth = add(today, { months: 1 });
		expect(
			getValidDateRange('from', nextMonth, { from: today, to: nextWeek })
		).toStrictEqual({ from: nextMonth, to: undefined });
	});

	test('selecting a end date before the start date', () => {
		const today = new Date();
		const nextWeek = add(today, { weeks: 1 });
		const nextMonth = add(today, { months: 1 });
		expect(
			getValidDateRange('to', today, { from: nextWeek, to: nextMonth })
		).toStrictEqual({ from: today, to: undefined });
	});
});

describe('ensureValidDateRange', () => {
	const validDateRange = {
		from: new Date(1999, 0, 0),
		to: new Date(2000, 0, 0),
	};
	test('allows valid date ranges', () => {
		expect(ensureValidDateRange(validDateRange)).toEqual(validDateRange);
	});

	const invalidDateRange = {
		from: new Date(2000, 0, 0),
		to: new Date(1999, 0, 0), // `to` is after `from`
	};
	test('fixes invalid date ranges', () => {
		expect(ensureValidDateRange(invalidDateRange)).toEqual(validDateRange);
	});
});

describe('getCalendarDefaultMonth', () => {
	test('returns undefined when no props are set', () => {
		const inputMode = undefined;
		const valueProp = { from: undefined, to: undefined };
		const yearRangeProp = undefined;
		const numberOfMonths = 2;
		expect(
			getCalendarDefaultMonth(
				inputMode,
				valueProp,
				yearRangeProp,
				numberOfMonths
			)
		).toEqual(undefined);
	});

	test('uses the value prop when set', () => {
		const valueProp = { from: new Date(2010, 1, 1), to: new Date(2010, 2, 2) };
		const yearRangeProp = undefined;
		expect(
			getCalendarDefaultMonth('from', valueProp, yearRangeProp, 1)
		).toEqual(valueProp.from);
		expect(getCalendarDefaultMonth('to', valueProp, yearRangeProp, 1)).toEqual(
			valueProp.to
		);

		expect(
			getCalendarDefaultMonth('from', valueProp, yearRangeProp, 2)
		).toEqual(subDays(valueProp.from, 1));
		expect(getCalendarDefaultMonth('to', valueProp, yearRangeProp, 2)).toEqual(
			subDays(valueProp.to, 1)
		);
	});

	test('uses the middle year from the yearRange prop when set', () => {
		const inputMode = undefined;
		const valueProp = { from: undefined, to: undefined };
		const numberOfMonths = 2;
		expect(
			getCalendarDefaultMonth(
				inputMode,
				valueProp,
				{
					from: 2010,
					to: 2020,
				},
				numberOfMonths
			)?.getFullYear()
		).toEqual(2015);
		expect(
			getCalendarDefaultMonth(
				inputMode,
				valueProp,
				{
					from: 2005,
					to: 2008,
				},
				numberOfMonths
			)?.getFullYear()
		).toEqual(2006);
		expect(
			getCalendarDefaultMonth(
				inputMode,
				valueProp,
				{
					from: 2005,
					to: 2005,
				},
				numberOfMonths
			)?.getFullYear()
		).toEqual(2005);
	});
});
