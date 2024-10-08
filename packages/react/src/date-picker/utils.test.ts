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
		expect(parseDate('31/01/1950')).toEqual(new Date(1950, 0, 31));
		expect(parseDate('9/12/1999')).toEqual(new Date(1999, 11, 9));
		expect(parseDate('01/01/2000')).toEqual(new Date(2000, 0, 1));
	});

	test('works on partially valid dates', () => {
		expect(parseDate('5/2/2000')).toEqual(new Date(2000, 1, 5));
		expect(parseDate('5/10/2000')).toEqual(new Date(2000, 9, 5));
		expect(parseDate('05/4/2000')).toEqual(new Date(2000, 3, 5));
		expect(parseDate('05/4/24')).toEqual(undefined);
		expect(parseDate('5/04/19')).toEqual(undefined);
		expect(parseDate('5/04/25')).toEqual(undefined);
		expect(parseDate('5/04/50')).toEqual(undefined);
		expect(parseDate('5/04/51')).toEqual(undefined);
		expect(parseDate('5/04/73')).toEqual(undefined);
	});

	test('works on invalid dates and invalid formats', () => {
		expect(parseDate('50/50/2019')).toEqual(undefined);
		expect(parseDate('50/50/19')).toEqual(undefined);
		expect(parseDate('31/01/199')).toEqual(undefined);
		expect(parseDate('31-01-19')).toEqual(undefined);
		expect(parseDate('1-2-3')).toEqual(undefined);
	});

	describe('prefers `dd/mm/yyyy` over `mm/dd/yyyy`', () => {
		['02/10/2023', '2/10/2023'].forEach((example) => {
			test(`Format "${example}"`, () => {
				const formattedDate = parseDate(example);
				expect(formattedDate).toEqual(new Date(2023, 9, 2));
			});
		});
	});

	describe('parses valid `mm/dd/yyyy` dates', () => {
		['02/22/2023', '2/22/2023'].forEach((example) => {
			test(`Format "${example}"`, () => {
				const formattedDate = parseDate(example);
				expect(formattedDate).toEqual(new Date(2023, 1, 22));
			});
		});
	});

	describe('works on alternative date formats', () => {
		const testFormats = [
			'8-2-2023',
			'08-02-2023',
			'8-02-2023',
			'08-2-2023',
			'8 2 2023',
			'08 02 2023',
			'8 02 2023',
			'08 2 2023',
			'8th February 2023',
			'8th Feb 2023',
			'February 8th 2023',
			'Feb 8th 2023',
			'8 February 2023',
			'8 Feb 2023',
			'February 8 2023',
			'Feb 8 2023',
			'08 February 2023',
			'08 Feb 2023',
			'February 08 2023',
			'Feb 08 2023',
		];

		testFormats.forEach((example) => {
			test(`Format "${example}"`, () => {
				const formattedDate = parseDate(example);
				expect(formattedDate).toEqual(new Date(2023, 1, 8));
			});
		});
	});

	describe('only parses allowed date formats', () => {
		const allowedAUFormats = [
			'dd/MM/yyyy', // e.g. 13/10/2023
		] as const;

		const allowedUSFormats = [
			'MM/dd/yyyy', // e.g. 10/13/2023
		] as const;

		test('Formats a valid AU format', () => {
			const formattedDate = parseDate('13/10/2023', allowedAUFormats);
			expect(formattedDate).toEqual(new Date(2023, 9, 13));
		});

		test('Doesn’t format an invalid AU format', () => {
			const formattedDate = parseDate('10/13/2023', allowedAUFormats);
			expect(formattedDate).toEqual(undefined);
		});

		test('Formats a valid US format', () => {
			const formattedDate = parseDate('13/10/2023', allowedUSFormats);
			expect(formattedDate).toEqual(undefined);
		});

		test('Doesn’t format an invalid US format', () => {
			const formattedDate = parseDate('10/13/2023', allowedUSFormats);
			expect(formattedDate).toEqual(new Date(2023, 9, 13));
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
	expect(formatDate(new Date(2020, 0, 31), 'dd/MM/yyyy')).toEqual('31/01/2020');
	expect(formatDate(new Date(2020, 11, 6), 'dd/MM/yyyy')).toEqual('06/12/2020');
});

describe('formatHumanReadableDate', () => {
	expect(formatHumanReadableDate(new Date(2020, 0, 31))).toEqual(
		'31st January 2020 Friday'
	);
	expect(formatHumanReadableDate(new Date(2020, 11, 6))).toEqual(
		'6th December 2020 Sunday'
	);
});

describe('transformValuePropToInputValue', () => {
	test('works with undefined', () => {
		expect(transformValuePropToInputValue(undefined, 'dd/MM/yyyy')).toEqual('');
	});

	test('works with strings', () => {
		expect(transformValuePropToInputValue('', 'dd/MM/yyyy')).toEqual('');
		expect(transformValuePropToInputValue('abc', 'dd/MM/yyyy')).toEqual('abc');
		expect(transformValuePropToInputValue('aa/bb/cccc', 'dd/MM/yyyy')).toEqual(
			'aa/bb/cccc'
		);
	});

	test('works with dates', () => {
		const exampleDate = new Date(1999, 11, 10);
		expect(transformValuePropToInputValue(exampleDate, 'dd/MM/yyyy')).toEqual(
			formatDate(exampleDate, 'dd/MM/yyyy')
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
	it('returns "Choose date" when no date is set', () => {
		expect(getDateInputButtonAriaLabel({ value: undefined })).toEqual(
			'Choose date'
		);

		expect(getDateInputButtonAriaLabel({ value: '' })).toEqual('Choose date');
	});

	it('returns "Change date, x" when a date is set', () => {
		expect(getDateInputButtonAriaLabel({ value: '05/06/2010' })).toEqual(
			'Change date, 5th June 2010 Saturday'
		);
	});

	it('returns "Choose start date" when no date and "start" is set', () => {
		expect(
			getDateInputButtonAriaLabel({ value: undefined, rangeName: 'start' })
		).toEqual('Choose start date');

		expect(
			getDateInputButtonAriaLabel({ value: '', rangeName: 'start' })
		).toEqual('Choose start date');
	});

	it('returns "Change start date, x" when a date and "start" is set', () => {
		expect(
			getDateInputButtonAriaLabel({ value: '05/06/2010', rangeName: 'start' })
		).toEqual('Change start date, 5th June 2010 Saturday');
	});

	it('returns "Choose end date" when no date and "end" is set', () => {
		expect(
			getDateInputButtonAriaLabel({ value: '', rangeName: 'end' })
		).toEqual('Choose end date');
	});

	it('returns "Change end date, x" when a date and "end" is set', () => {
		expect(
			getDateInputButtonAriaLabel({ value: '05/06/2010', rangeName: 'end' })
		).toEqual('Change end date, 5th June 2010 Saturday');
	});
});
