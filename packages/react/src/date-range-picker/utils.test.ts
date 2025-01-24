import { subMonths } from 'date-fns';
import { getCalendarDefaultMonth } from './utils';

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

	describe("inputMode === 'from'", () => {
		test('returns earliest year when `from` value is before `to` value', () => {
			const inputMode = 'from';
			const valueProp = {
				from: new Date(1999, 1, 1),
				to: new Date(2000, 1, 1),
			};
			const yearRangeProp = undefined;
			const numberOfMonths = 2;

			expect(
				getCalendarDefaultMonth(
					inputMode,
					valueProp,
					yearRangeProp,
					numberOfMonths
				)?.getFullYear()
			).toEqual(1999);
		});

		test('returns earliest year when `from` value is after `to` value', () => {
			const inputMode = 'from';
			const valueProp = {
				from: new Date(2000, 1, 1),
				to: new Date(1999, 1, 1),
			};
			const yearRangeProp = undefined;
			const numberOfMonths = 2;

			expect(
				getCalendarDefaultMonth(
					inputMode,
					valueProp,
					yearRangeProp,
					numberOfMonths
				)?.getFullYear()
			).toEqual(1999);
		});

		test('returns `to` value when `from` is undefined', () => {
			const inputMode = 'from';
			const valueProp = {
				from: undefined,
				to: new Date(2000, 1, 1),
			};
			const yearRangeProp = undefined;
			const numberOfMonths = 2;

			expect(
				getCalendarDefaultMonth(
					inputMode,
					valueProp,
					yearRangeProp,
					numberOfMonths
				)?.getFullYear()
			).toEqual(2000);
		});
	});

	describe("inputMode === 'to'", () => {
		test('returns earliest year when `to` value is before `from` value', () => {
			const inputMode = 'from';
			const valueProp = {
				from: new Date(2000, 1, 1),
				to: new Date(1999, 1, 1),
			};
			const yearRangeProp = undefined;
			const numberOfMonths = 2;

			expect(
				getCalendarDefaultMonth(
					inputMode,
					valueProp,
					yearRangeProp,
					numberOfMonths
				)?.getFullYear()
			).toEqual(1999);
		});

		test('returns earliest year when `to` value is after `from` value', () => {
			const inputMode = 'from';
			const valueProp = {
				from: new Date(1999, 1, 1),
				to: new Date(2000, 1, 1),
			};
			const yearRangeProp = undefined;
			const numberOfMonths = 2;

			expect(
				getCalendarDefaultMonth(
					inputMode,
					valueProp,
					yearRangeProp,
					numberOfMonths
				)?.getFullYear()
			).toEqual(1999);
		});

		test('returns `from` value when `to` is undefined', () => {
			const inputMode = 'from';
			const valueProp = {
				from: new Date(2000, 1, 1),
				to: undefined,
			};
			const yearRangeProp = undefined;
			const numberOfMonths = 2;

			expect(
				getCalendarDefaultMonth(
					inputMode,
					valueProp,
					yearRangeProp,
					numberOfMonths
				)?.getFullYear()
			).toEqual(2000);
		});
	});
});
