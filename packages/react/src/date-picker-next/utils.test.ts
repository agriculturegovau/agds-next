import {
	formatDate,
	formatHumanReadableDate,
	getCalendarDefaultMonth,
	getDateInputButtonAriaLabel,
	isValidDate,
	normaliseDateString,
	parseDate,
	transformValuePropToInputValue,
} from './utils';

describe('parseDate', () => {
	test('works on valid dates', () => {
		expect(parseDate('31/01/1950')).toEqual(new Date(1950, 0, 31));
		expect(parseDate('9/12/1999')).toEqual(new Date(1999, 11, 9));
		expect(parseDate('01/01/2000')).toEqual(new Date(2000, 0, 1));
		expect(parseDate('2025-01-23T23:30:23.954Z')).toEqual(
			new Date('2025-01-23T23:30:23.954Z')
		);
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
		expect(parseDate('2025-01-23T23:30:23.954AAA')).toEqual(undefined);
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

describe('isValidDate', () => {
	test('returns true for valid dates', () => {
		expect(isValidDate(new Date())).toEqual(true);
		expect(isValidDate('31/01/1950')).toEqual(true);
		expect(isValidDate('9/12/1999')).toEqual(true);
		expect(isValidDate('01/01/2000')).toEqual(true);
		expect(isValidDate('5/2/2000')).toEqual(true);
		expect(isValidDate('5/10/2000')).toEqual(true);
		expect(isValidDate('05/4/2000')).toEqual(true);
		expect(isValidDate('2025-01-23T23:30:23.954Z')).toEqual(true);
	});

	test('returns false for invalid dates', () => {
		expect(isValidDate()).toEqual(false);
		expect(isValidDate('')).toEqual(false);
		expect(isValidDate('50/50/2019')).toEqual(false);
		expect(isValidDate('50/50/19')).toEqual(false);
		expect(isValidDate('31/01/199')).toEqual(false);
		expect(isValidDate('31-01-19')).toEqual(false);
		expect(isValidDate('05/4/24')).toEqual(false);
		expect(isValidDate('5/04/19')).toEqual(false);
		expect(isValidDate('1-2-3')).toEqual(false);
		expect(isValidDate('30th of March 2025')).toEqual(false);
		expect(isValidDate('2025-01-23T23:30:23.954AAA')).toEqual(false);
	});

	describe('allowedDateFormats', () => {
		test('returns true for dates in allowed format', () => {
			expect(
				isValidDate(new Date(), { allowedDateFormats: ['dd-MM-yyyy'] })
			).toEqual(true);
			expect(
				isValidDate('31-01-1950', { allowedDateFormats: ['dd-MM-yyyy'] })
			).toEqual(true);
			expect(
				isValidDate('9-12-1999', { allowedDateFormats: ['dd-MM-yyyy'] })
			).toEqual(true);
			expect(
				isValidDate('01-01-2000', { allowedDateFormats: ['dd-MM-yyyy'] })
			).toEqual(true);
			expect(
				isValidDate('5-2-2000', { allowedDateFormats: ['dd-MM-yyyy'] })
			).toEqual(true);
			expect(
				isValidDate('5-10-2000', { allowedDateFormats: ['dd-MM-yyyy'] })
			).toEqual(true);
			expect(
				isValidDate('05-4-2000', { allowedDateFormats: ['dd-MM-yyyy'] })
			).toEqual(true);
		});

		test('returns false for dates in disallowed format', () => {
			expect(
				isValidDate('31-01-1950', { allowedDateFormats: ['dd MM yyyy'] })
			).toEqual(false);
			expect(
				isValidDate('9-12-1999', { allowedDateFormats: ['dd MM yyyy'] })
			).toEqual(false);
			expect(
				isValidDate('01-01-2000', { allowedDateFormats: ['dd MM yyyy'] })
			).toEqual(false);
			expect(
				isValidDate('5-2-2000', { allowedDateFormats: ['dd MM yyyy'] })
			).toEqual(false);
			expect(
				isValidDate('5-10-2000', { allowedDateFormats: ['dd MM yyyy'] })
			).toEqual(false);
			expect(
				isValidDate('05-4-2000', { allowedDateFormats: ['dd MM yyyy'] })
			).toEqual(false);
		});
	});

	describe('fromDate', () => {
		test('returns true when it’s a valid date', () => {
			expect(isValidDate(new Date(), { fromDate: new Date() })).toEqual(true);
			expect(isValidDate('31/01/1950', { fromDate: '31/01/1950' })).toEqual(
				true
			);
			expect(isValidDate('9/12/1999', { fromDate: '9/12/1999' })).toEqual(true);
			expect(isValidDate('01/01/2000', { fromDate: '01/01/2000' })).toEqual(
				true
			);
			expect(isValidDate('5/2/2000', { fromDate: '5/2/2000' })).toEqual(true);
			expect(isValidDate('5/10/2000', { fromDate: '5/10/2000' })).toEqual(true);
			expect(isValidDate('05/4/2000', { fromDate: '05/4/2000' })).toEqual(true);
			expect(
				isValidDate('2025-01-23T23:30:23.954Z', {
					fromDate: '2025-01-23T23:30:23.954Z',
				})
			).toEqual(true);
		});

		test('returns false when it’s an invalid date', () => {
			expect(isValidDate('01/01/2000', { fromDate: '50/50/2019' })).toEqual(
				false
			);
			expect(isValidDate('01/01/2000', { fromDate: '50/50/19' })).toEqual(
				false
			);
			expect(isValidDate('01/01/2000', { fromDate: '31/01/199' })).toEqual(
				false
			);
			expect(isValidDate('01/01/2000', { fromDate: '31-01-19' })).toEqual(
				false
			);
			expect(isValidDate('01/01/2000', { fromDate: '05/4/24' })).toEqual(false);
			expect(isValidDate('01/01/2000', { fromDate: '5/04/19' })).toEqual(false);
			expect(isValidDate('01/01/2000', { fromDate: '1-2-3' })).toEqual(false);
			expect(
				isValidDate('01/01/2000', { fromDate: '30th of March 2025' })
			).toEqual(false);
			expect(
				isValidDate('01/01/2000', { fromDate: '2025-01-23T23:30:23.954AAA' })
			).toEqual(false);
		});

		test('returns false when it’s after the `value`', () => {
			expect(isValidDate('01/01/2000', { fromDate: '01/01/2001' })).toEqual(
				false
			);
		});
	});

	describe('toDate', () => {
		test('returns true when it’s a valid date', () => {
			expect(isValidDate(new Date(), { toDate: new Date() })).toEqual(true);
			expect(isValidDate('31/01/1950', { toDate: '31/01/1950' })).toEqual(true);
			expect(isValidDate('9/12/1999', { toDate: '9/12/1999' })).toEqual(true);
			expect(isValidDate('01/01/2000', { toDate: '01/01/2000' })).toEqual(true);
			expect(isValidDate('5/2/2000', { toDate: '5/2/2000' })).toEqual(true);
			expect(isValidDate('5/10/2000', { toDate: '5/10/2000' })).toEqual(true);
			expect(isValidDate('05/4/2000', { toDate: '05/4/2000' })).toEqual(true);
			expect(
				isValidDate('2025-01-23T23:30:23.954Z', {
					toDate: '2025-01-23T23:30:23.954Z',
				})
			).toEqual(true);
		});

		test('returns false when it’s an invalid date', () => {
			expect(isValidDate('01/01/2000', { toDate: '50/50/2019' })).toEqual(
				false
			);
			expect(isValidDate('01/01/2000', { toDate: '50/50/19' })).toEqual(false);
			expect(isValidDate('01/01/2000', { toDate: '31/01/199' })).toEqual(false);
			expect(isValidDate('01/01/2000', { toDate: '31-01-19' })).toEqual(false);
			expect(isValidDate('01/01/2000', { toDate: '05/4/24' })).toEqual(false);
			expect(isValidDate('01/01/2000', { toDate: '5/04/19' })).toEqual(false);
			expect(isValidDate('01/01/2000', { toDate: '1-2-3' })).toEqual(false);
			expect(
				isValidDate('01/01/2000', { toDate: '30th of March 2025' })
			).toEqual(false);
			expect(
				isValidDate('01/01/2000', { toDate: '2025-01-23T23:30:23.954AAA' })
			).toEqual(false);
		});

		test('returns false when it’s before the `value`', () => {
			expect(isValidDate('01/01/2000', { toDate: '01/01/1999' })).toEqual(
				false
			);
		});
	});

	describe('minDate', () => {
		test('returns true when it’s a valid date', () => {
			expect(isValidDate(new Date(), { minDate: new Date() })).toEqual(true);
			expect(isValidDate('31/01/1950', { minDate: '31/01/1950' })).toEqual(
				true
			);
			expect(isValidDate('9/12/1999', { minDate: '9/12/1999' })).toEqual(true);
			expect(isValidDate('01/01/2000', { minDate: '01/01/2000' })).toEqual(
				true
			);
			expect(isValidDate('5/2/2000', { minDate: '5/2/2000' })).toEqual(true);
			expect(isValidDate('5/10/2000', { minDate: '5/10/2000' })).toEqual(true);
			expect(isValidDate('05/4/2000', { minDate: '05/4/2000' })).toEqual(true);
			expect(
				isValidDate('2025-01-23T23:30:23.954Z', {
					minDate: '2025-01-23T23:30:23.954Z',
				})
			).toEqual(true);
		});

		test('returns false when it’s an invalid date', () => {
			expect(isValidDate('01/01/2000', { minDate: '50/50/2019' })).toEqual(
				false
			);
			expect(isValidDate('01/01/2000', { minDate: '50/50/19' })).toEqual(false);
			expect(isValidDate('01/01/2000', { minDate: '31/01/199' })).toEqual(
				false
			);
			expect(isValidDate('01/01/2000', { minDate: '31-01-19' })).toEqual(false);
			expect(isValidDate('01/01/2000', { minDate: '05/4/24' })).toEqual(false);
			expect(isValidDate('01/01/2000', { minDate: '5/04/19' })).toEqual(false);
			expect(isValidDate('01/01/2000', { minDate: '1-2-3' })).toEqual(false);
			expect(
				isValidDate('01/01/2000', { minDate: '30th of March 2025' })
			).toEqual(false);
			expect(
				isValidDate('01/01/2000', { minDate: '2025-01-23T23:30:23.954AAA' })
			).toEqual(false);
		});

		test('returns false when it’s after the `value`', () => {
			expect(isValidDate('01/01/2000', { minDate: '01/01/2001' })).toEqual(
				false
			);
		});
	});

	describe('maxDate', () => {
		test('returns true when it’s a valid date', () => {
			expect(isValidDate(new Date(), { maxDate: new Date() })).toEqual(true);
			expect(isValidDate('31/01/1950', { maxDate: '31/01/1950' })).toEqual(
				true
			);
			expect(isValidDate('9/12/1999', { maxDate: '9/12/1999' })).toEqual(true);
			expect(isValidDate('01/01/2000', { maxDate: '01/01/2000' })).toEqual(
				true
			);
			expect(isValidDate('5/2/2000', { maxDate: '5/2/2000' })).toEqual(true);
			expect(isValidDate('5/10/2000', { maxDate: '5/10/2000' })).toEqual(true);
			expect(isValidDate('05/4/2000', { maxDate: '05/4/2000' })).toEqual(true);
			expect(
				isValidDate('2025-01-23T23:30:23.954Z', {
					maxDate: '2025-01-23T23:30:23.954Z',
				})
			).toEqual(true);
		});

		test('returns false when it’s an invalid date', () => {
			expect(isValidDate('01/01/2000', { maxDate: '50/50/2019' })).toEqual(
				false
			);
			expect(isValidDate('01/01/2000', { maxDate: '50/50/19' })).toEqual(false);
			expect(isValidDate('01/01/2000', { maxDate: '31/01/199' })).toEqual(
				false
			);
			expect(isValidDate('01/01/2000', { maxDate: '31-01-19' })).toEqual(false);
			expect(isValidDate('01/01/2000', { maxDate: '05/4/24' })).toEqual(false);
			expect(isValidDate('01/01/2000', { maxDate: '5/04/19' })).toEqual(false);
			expect(isValidDate('01/01/2000', { maxDate: '1-2-3' })).toEqual(false);
			expect(
				isValidDate('01/01/2000', { maxDate: '30th of March 2025' })
			).toEqual(false);
			expect(
				isValidDate('01/01/2000', { maxDate: '2025-01-23T23:30:23.954AAA' })
			).toEqual(false);
		});

		test('returns false when it’s before the `value`', () => {
			expect(isValidDate('01/01/2000', { maxDate: '01/01/1999' })).toEqual(
				false
			);
		});
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

describe('normaliseDateString', () => {
	test('works on valid dates', () => {
		expect(normaliseDateString('2025-01-23T23:30:23.954Z')).toEqual(
			new Date('2025-01-23T23:30:23.954Z')
		);
	});

	test('works on invalid dates and invalid formats', () => {
		expect(normaliseDateString('50/50/2019')).toEqual(undefined);
		expect(normaliseDateString('50/50/19')).toEqual(undefined);
		expect(normaliseDateString('31/01/199')).toEqual(undefined);
		expect(normaliseDateString('31-01-19')).toEqual(undefined);
		expect(normaliseDateString('1-2-3')).toEqual(undefined);
		expect(normaliseDateString('2025-01-23T23:30:23.954AAA')).toEqual(
			undefined
		);
	});
});
