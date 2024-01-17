import { subMonths } from 'date-fns';
import {
	ensureValidDateRange,
	getCalendarDefaultMonth,
	getFromDateInputButtonAriaLabel,
	getToDateInputButtonAriaLabel,
} from './utils';

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

describe('getFromDateInputButtonAriaLabel', () => {
	it('returns `Choose start date` when no date is set', () => {
		expect(getFromDateInputButtonAriaLabel(undefined, 'dd/mm/yyyy')).toEqual(
			'Choose start date'
		);
		expect(getFromDateInputButtonAriaLabel('', 'dd/mm/yyyy')).toEqual(
			'Choose start date'
		);
	});

	it('returns `Change start date, x` when a date is set', () => {
		expect(getFromDateInputButtonAriaLabel('14/02/1990', 'dd/mm/yyyy')).toEqual(
			'Change start date, 14th February 1990 (Wednesday)'
		);
		expect(getFromDateInputButtonAriaLabel('05/06/2010', 'dd/mm/yyyy')).toEqual(
			'Change start date, 5th June 2010 (Saturday)'
		);
	});
});

describe('getToDateInputButtonAriaLabel', () => {
	it('returns `Choose end date` when no date is set', () => {
		expect(getToDateInputButtonAriaLabel(undefined, 'dd/mm/yyyy')).toEqual(
			'Choose end date'
		);
		expect(getToDateInputButtonAriaLabel('', 'dd/mm/yyyy')).toEqual(
			'Choose end date'
		);
	});

	it('returns `Change end date, x` when a date is set', () => {
		expect(getToDateInputButtonAriaLabel('14/02/1990', 'dd/mm/yyyy')).toEqual(
			'Change end date, 14th February 1990 (Wednesday)'
		);
		expect(getToDateInputButtonAriaLabel('05/06/2010', 'dd/mm/yyyy')).toEqual(
			'Change end date, 5th June 2010 (Saturday)'
		);
	});
});
