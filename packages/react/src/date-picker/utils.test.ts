import {
	constrainDate,
	formatDate,
	formatHumanReadableDate,
	parseDate,
	transformValuePropToInputValue,
	getCalendarDefaultMonth,
	getDateInputButtonAriaLabel,
} from './utils';

const auDateFormat = 'dd/mm/yyyy';
const usDateFormat = 'mm/dd/yyyy';

describe('parseDate', () => {
	describe('AU date format', () => {
		test('works on valid dates', () => {
			expect(parseDate('31/01/1950', auDateFormat)).toEqual(
				new Date(1950, 0, 31)
			);
			expect(parseDate('9/12/1999', auDateFormat)).toEqual(
				new Date(1999, 11, 9)
			);
			expect(parseDate('01/01/2000', auDateFormat)).toEqual(
				new Date(2000, 0, 1)
			);
		});

		test('works on partially valid dates', () => {
			expect(parseDate('5/2/2000', auDateFormat)).toEqual(new Date(2000, 1, 5));
			expect(parseDate('5/10/2000', auDateFormat)).toEqual(
				new Date(2000, 9, 5)
			);
			expect(parseDate('05/4/2000', auDateFormat)).toEqual(
				new Date(2000, 3, 5)
			);
			expect(parseDate('05/4/24', auDateFormat)).toEqual(new Date(2024, 3, 5));
			expect(parseDate('5/04/19', auDateFormat)).toEqual(new Date(2019, 3, 5));
			expect(parseDate('5/04/25', auDateFormat)).toEqual(new Date(2025, 3, 5));
			expect(parseDate('5/04/50', auDateFormat)).toEqual(new Date(2050, 3, 5));
			expect(parseDate('5/04/51', auDateFormat)).toEqual(new Date(1951, 3, 5));
			expect(parseDate('5/04/73', auDateFormat)).toEqual(new Date(1973, 3, 5));
		});

		test('works on invalid dates and invalid formats', () => {
			expect(parseDate('50/50/2019', auDateFormat)).toEqual(undefined);
			expect(parseDate('50/50/19', auDateFormat)).toEqual(undefined);
			expect(parseDate('31/01/199', auDateFormat)).toEqual(undefined);
			expect(parseDate('31-01-19', auDateFormat)).toEqual(undefined);
			expect(parseDate('1-2-3', auDateFormat)).toEqual(undefined);
		});
	});

	describe('US date format', () => {
		test('works on valid dates', () => {
			expect(parseDate('31/01/1950', usDateFormat)).toEqual(undefined);
			expect(parseDate('9/12/1999', usDateFormat)).toEqual(
				new Date(1999, 8, 12)
			);
			expect(parseDate('01/01/2000', usDateFormat)).toEqual(
				new Date(2000, 0, 1)
			);
		});

		test('works on partially valid dates', () => {
			expect(parseDate('5/2/2000', usDateFormat)).toEqual(new Date(2000, 4, 2));
			expect(parseDate('5/10/2000', usDateFormat)).toEqual(
				new Date(2000, 4, 10)
			);
			expect(parseDate('05/4/2000', usDateFormat)).toEqual(
				new Date(2000, 4, 4)
			);
			expect(parseDate('05/4/24', usDateFormat)).toEqual(new Date(2024, 4, 4));
			expect(parseDate('5/04/19', usDateFormat)).toEqual(new Date(2019, 4, 4));
		});

		test('works on invalid dates and invalid formats', () => {
			expect(parseDate('50/50/2019', usDateFormat)).toEqual(undefined);
			expect(parseDate('50/50/19', usDateFormat)).toEqual(undefined);
			expect(parseDate('31/01/199', usDateFormat)).toEqual(undefined);
			expect(parseDate('31-01-19', usDateFormat)).toEqual(undefined);
			expect(parseDate('1-2-3', usDateFormat)).toEqual(undefined);
		});
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
	expect(formatDate(new Date(2020, 0, 31), auDateFormat)).toEqual('31/01/2020');
	expect(formatDate(new Date(2020, 11, 6), auDateFormat)).toEqual('06/12/2020');
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
		expect(transformValuePropToInputValue(undefined, auDateFormat)).toEqual('');
	});

	test('works with strings', () => {
		expect(transformValuePropToInputValue('', auDateFormat)).toEqual('');
		expect(transformValuePropToInputValue('abc', auDateFormat)).toEqual('abc');
		expect(transformValuePropToInputValue('aa/bb/cccc', auDateFormat)).toEqual(
			'aa/bb/cccc'
		);
	});

	test('works with dates', () => {
		const exampleDate = new Date(1999, 11, 10);
		expect(transformValuePropToInputValue(exampleDate, auDateFormat)).toEqual(
			formatDate(exampleDate, auDateFormat)
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
		expect(getDateInputButtonAriaLabel(undefined, auDateFormat)).toEqual(
			'Choose date'
		);
		expect(getDateInputButtonAriaLabel('', auDateFormat)).toEqual(
			'Choose date'
		);
	});

	it('returns `Change date, x` when a date is set', () => {
		expect(getDateInputButtonAriaLabel('14/02/1990', auDateFormat)).toEqual(
			'Change date, 14th February 1990 (Wednesday)'
		);
		expect(getDateInputButtonAriaLabel('05/06/2010', auDateFormat)).toEqual(
			'Change date, 5th June 2010 (Saturday)'
		);
	});
});
