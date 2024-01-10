import {
	constrainDate,
	formatDate,
	formatHumanReadableDate,
	parseDate,
	transformValuePropToInputValue,
	getCalendarDefaultMonth,
	getDateInputButtonAriaLabel,
} from './utils';

describe('parseDate', () => {
	test('works on valid dates', () => {
		expect(parseDate('31/01/1950')).not.toEqual(undefined);
		expect(parseDate('31/12/1999')).not.toEqual(undefined);
		expect(parseDate('01/01/2000')).not.toEqual(undefined);
	});
	test('works on invalid dates and invalid formats', () => {
		expect(parseDate('50/50/2019')).toEqual(undefined);
		expect(parseDate('50/50/19')).toEqual(undefined);
		expect(parseDate('31/01/19')).toEqual(undefined);
		expect(parseDate('31/01/199')).toEqual(undefined);
		expect(parseDate('31-01-19')).toEqual(undefined);
		expect(parseDate('1-2-3')).toEqual(undefined);
	});
});

describe('constrainDate', () => {
	test('works with dates inside of range', () => {
		const date = new Date(1999, 12, 15);
		const min = new Date(1999, 12, 10);
		const max = new Date(1999, 12, 20);
		expect(constrainDate(date, undefined, undefined)).toEqual(date);
		expect(constrainDate(date, min, undefined)).toEqual(date);
		expect(constrainDate(date, undefined, max)).toEqual(date);
	});
	test('works with dates before range', () => {
		const min = new Date(1999, 12, 10);
		const max = new Date(1999, 12, 20);
		expect(constrainDate(new Date(1990, 12, 10), min, max)).toEqual(min);
		expect(constrainDate(min, min, max)).toEqual(min);
	});
	test('works with dates after range', () => {
		const min = new Date(1999, 12, 10);
		const max = new Date(1999, 12, 20);
		expect(constrainDate(new Date(2000, 12, 10), min, max)).toEqual(max);
		expect(constrainDate(max, min, max)).toEqual(max);
	});
});

describe('formatDate', () => {
	expect(formatDate(new Date(2020, 0, 31))).toEqual('31/01/2020');
	expect(formatDate(new Date(2020, 11, 6))).toEqual('06/12/2020');
});

describe('formatHumanReadableDate', () => {
	expect(formatHumanReadableDate(new Date(2020, 0, 31))).toEqual(
		'31st January 2020 (Friday)'
	);
	expect(formatHumanReadableDate(new Date(2020, 11, 6))).toEqual(
		'6th December 2020 (Sunday)'
	);
});

describe('transformValuePropToInputValue', () => {
	test('works with undefined', () => {
		expect(transformValuePropToInputValue(undefined)).toEqual('');
	});

	test('works with strings', () => {
		expect(transformValuePropToInputValue('')).toEqual('');
		expect(transformValuePropToInputValue('abc')).toEqual('abc');
		expect(transformValuePropToInputValue('aa/bb/cccc')).toEqual('aa/bb/cccc');
	});

	test('works with dates', () => {
		const exampleDate = new Date(1999, 11, 10);
		expect(transformValuePropToInputValue(exampleDate)).toEqual(
			formatDate(exampleDate)
		);
	});
});

describe('getCalendarDefaultMonth', () => {
	test('returns undefined when no props are set', () => {
		const valueProp = undefined;
		const initialMonthProp = undefined;
		const yearRangeProp = undefined;
		expect(
			getCalendarDefaultMonth(valueProp, initialMonthProp, yearRangeProp)
		).toEqual(undefined);
	});

	test('uses the value prop when set', () => {
		const valueProp = new Date(2024, 0, 0);
		const initialMonthProp = undefined;
		const yearRangeProp = undefined;
		expect(
			getCalendarDefaultMonth(valueProp, initialMonthProp, yearRangeProp)
		).toEqual(valueProp);
	});

	test('uses the initialMonth prop when set', () => {
		const valueProp = undefined;
		const initialMonthProp = new Date(2024, 0, 0);
		const yearRangeProp = undefined;
		expect(
			getCalendarDefaultMonth(valueProp, initialMonthProp, yearRangeProp)
		).toEqual(initialMonthProp);
	});

	test('uses the closest date from the yearRange prop when set', () => {
		const valueProp = undefined;
		const initialMonthProp = undefined;
		expect(
			getCalendarDefaultMonth(valueProp, initialMonthProp, {
				from: 2010,
				to: 2020,
			})?.getFullYear()
		).toEqual(2020);
		expect(
			getCalendarDefaultMonth(valueProp, initialMonthProp, {
				from: 2030,
				to: 2050,
			})?.getFullYear()
		).toEqual(2030);
		expect(
			getCalendarDefaultMonth(valueProp, initialMonthProp, {
				from: 1990,
				to: 2100,
			})?.getFullYear()
		).toEqual(1990);
	});
});

describe('getDateInputButtonAriaLabel', () => {
	it('returns `Choose date` when no date is set', () => {
		expect(getDateInputButtonAriaLabel(undefined)).toEqual('Choose date');
		expect(getDateInputButtonAriaLabel('')).toEqual('Choose date');
	});

	it('returns `Change date, x` when a date is set', () => {
		expect(getDateInputButtonAriaLabel('14/02/1990')).toEqual(
			'Change date, 14th February 1990 (Wednesday)'
		);
		expect(getDateInputButtonAriaLabel('05/06/2010')).toEqual(
			'Change date, 5th June 2010 (Saturday)'
		);
	});
});
