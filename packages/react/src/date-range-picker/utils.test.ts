import { add } from 'date-fns';
import { getValidDateRange, ensureValidDateRange } from './utils';

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
	const invalidDateRange = {
		from: new Date(2000, 0, 0),
		to: new Date(1999, 0, 0),
	};
	test('allows valid date ranges', () => {
		expect(ensureValidDateRange(validDateRange)).toEqual(validDateRange);
	});
	test('fixes invalid date ranges', () => {
		expect(ensureValidDateRange(invalidDateRange)).toEqual(validDateRange);
	});
});
