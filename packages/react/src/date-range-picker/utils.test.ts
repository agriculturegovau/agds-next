import { subMonths } from 'date-fns';
import { ensureValidDateRange, getCalendarDefaultMonth } from './utils';

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
		expect(ensureValidDateRange(invalidDateRange)).toEqual({
			from: validDateRange.from,
			to: undefined,
		});
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
		).toEqual(valueProp.from);
		expect(getCalendarDefaultMonth('to', valueProp, yearRangeProp, 2)).toEqual(
			subMonths(valueProp.to, 1)
		);
	});

	test('uses the closest date from the yearRange prop when set', () => {
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
		).toEqual(2020);
		expect(
			getCalendarDefaultMonth(
				inputMode,
				valueProp,
				{
					from: 2030,
					to: 2050,
				},
				numberOfMonths
			)?.getFullYear()
		).toEqual(2030);
		expect(
			getCalendarDefaultMonth(
				inputMode,
				valueProp,
				{
					from: 1990,
					to: 2100,
				},
				numberOfMonths
			)?.getFullYear()
		).toEqual(1990);
	});
});
