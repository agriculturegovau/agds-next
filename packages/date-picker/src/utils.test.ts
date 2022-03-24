import { add } from 'date-fns';
import { getValidDateRange } from './utils';

test('works from empty values', () => {
	const today = new Date();
	const nextWeek = add(today, { weeks: 1 });

	expect(
		getValidDateRange('start', today, { from: undefined, to: undefined })
	).toStrictEqual({ from: today, to: undefined });

	expect(
		getValidDateRange('end', nextWeek, { from: today, to: undefined })
	).toStrictEqual({ from: today, to: nextWeek });
});

test('works with existing values', () => {
	const today = new Date();
	const nextWeek = add(today, { weeks: 1 });
	const nextMonth = add(today, { months: 1 });

	expect(
		getValidDateRange('start', today, { from: nextMonth, to: nextMonth })
	).toStrictEqual({ from: today, to: nextMonth });

	expect(
		getValidDateRange('end', nextMonth, { from: today, to: nextWeek })
	).toStrictEqual({ from: today, to: nextMonth });

	expect(
		getValidDateRange('end', nextWeek, { from: today, to: nextMonth })
	).toStrictEqual({ from: today, to: nextWeek });
});

test('selecting a start date after the end date', () => {
	const today = new Date();
	const nextWeek = add(today, { weeks: 1 });
	const nextMonth = add(today, { months: 1 });
	expect(
		getValidDateRange('start', nextMonth, { from: today, to: nextWeek })
	).toStrictEqual({ from: nextMonth, to: undefined });
});

test('selecting a end date before the start date', () => {
	const today = new Date();
	const nextWeek = add(today, { weeks: 1 });
	const nextMonth = add(today, { months: 1 });
	expect(
		getValidDateRange('end', today, { from: nextWeek, to: nextMonth })
	).toStrictEqual({ from: today, to: undefined });
});
