import { add } from 'date-fns';
import {
	constrainDate,
	getValidDateRange,
	formatDate,
	formatHumanReadableDate,
	parseDate,
	transformValuePropToInputValue,
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

describe('formatDate', () => {
	expect(formatDate(new Date(2020, 0, 31))).toEqual('31/01/2020');
	expect(formatDate(new Date(2020, 11, 6))).toEqual('06/12/2020');
});

describe('formatHumanReadableDate', () => {
	expect(formatHumanReadableDate(new Date(2020, 0, 31))).toEqual(
		'Friday January 31st, 2020'
	);
	expect(formatHumanReadableDate(new Date(2020, 11, 6))).toEqual(
		'Sunday December 6th, 2020'
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
