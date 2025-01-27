import { subMonths } from 'date-fns';
import { getCalendarDefaultMonth, getHoverRange } from './utils';

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

describe('getHoverRange', () => {
	test('returns empty object with no args passed', () => {
		expect(getHoverRange()).toEqual({});
	});

	describe("inputMode === 'from'", () => {
		test('returns empty object with no `hoverDayISO` and `fromDate`', () => {
			expect(getHoverRange('from', undefined, undefined, new Date())).toEqual(
				{}
			);
		});

		test('returns empty object when `fromDate` equals `toDate`', () => {
			expect(
				getHoverRange(
					'from',
					undefined,
					new Date('2000-01-01'),
					new Date('2000-01-01')
				)
			).toEqual({});
		});

		test('returns appropriate object when `fromDate` is before `toDate`', () => {
			expect(
				getHoverRange(
					'from',
					undefined,
					new Date('2000-01-01'),
					new Date('2000-01-03')
				)
			).toEqual({
				[new Date('2000-01-01').toISOString()]: true,
				[new Date('2000-01-02').toISOString()]: true,
			});
		});

		test('returns appropriate object starting with `hoverDayISO` when `hoverDayISO` is before `fromDate`', () => {
			expect(
				getHoverRange(
					'from',
					new Date('2000-01-01').toISOString(),
					new Date('2000-01-02'),
					new Date('2000-01-03')
				)
			).toEqual({
				[new Date('2000-01-01').toISOString()]: true,
				[new Date('2000-01-02').toISOString()]: true,
			});
		});

		test('returns appropriate, first 60 days object when range is large', () => {
			expect(
				getHoverRange(
					'from',
					undefined,
					new Date('2000-01-01'),
					new Date('2001-01-01')
				)
			).toEqual({
				'2000-01-01T00:00:00.000Z': true,
				'2000-01-02T00:00:00.000Z': true,
				'2000-01-03T00:00:00.000Z': true,
				'2000-01-04T00:00:00.000Z': true,
				'2000-01-05T00:00:00.000Z': true,
				'2000-01-06T00:00:00.000Z': true,
				'2000-01-07T00:00:00.000Z': true,
				'2000-01-08T00:00:00.000Z': true,
				'2000-01-09T00:00:00.000Z': true,
				'2000-01-10T00:00:00.000Z': true,
				'2000-01-11T00:00:00.000Z': true,
				'2000-01-12T00:00:00.000Z': true,
				'2000-01-13T00:00:00.000Z': true,
				'2000-01-14T00:00:00.000Z': true,
				'2000-01-15T00:00:00.000Z': true,
				'2000-01-16T00:00:00.000Z': true,
				'2000-01-17T00:00:00.000Z': true,
				'2000-01-18T00:00:00.000Z': true,
				'2000-01-19T00:00:00.000Z': true,
				'2000-01-20T00:00:00.000Z': true,
				'2000-01-21T00:00:00.000Z': true,
				'2000-01-22T00:00:00.000Z': true,
				'2000-01-23T00:00:00.000Z': true,
				'2000-01-24T00:00:00.000Z': true,
				'2000-01-25T00:00:00.000Z': true,
				'2000-01-26T00:00:00.000Z': true,
				'2000-01-27T00:00:00.000Z': true,
				'2000-01-28T00:00:00.000Z': true,
				'2000-01-29T00:00:00.000Z': true,
				'2000-01-30T00:00:00.000Z': true,
				'2000-01-31T00:00:00.000Z': true,
				'2000-02-01T00:00:00.000Z': true,
				'2000-02-02T00:00:00.000Z': true,
				'2000-02-03T00:00:00.000Z': true,
				'2000-02-04T00:00:00.000Z': true,
				'2000-02-05T00:00:00.000Z': true,
				'2000-02-06T00:00:00.000Z': true,
				'2000-02-07T00:00:00.000Z': true,
				'2000-02-08T00:00:00.000Z': true,
				'2000-02-09T00:00:00.000Z': true,
				'2000-02-10T00:00:00.000Z': true,
				'2000-02-11T00:00:00.000Z': true,
				'2000-02-12T00:00:00.000Z': true,
				'2000-02-13T00:00:00.000Z': true,
				'2000-02-14T00:00:00.000Z': true,
				'2000-02-15T00:00:00.000Z': true,
				'2000-02-16T00:00:00.000Z': true,
				'2000-02-17T00:00:00.000Z': true,
				'2000-02-18T00:00:00.000Z': true,
				'2000-02-19T00:00:00.000Z': true,
				'2000-02-20T00:00:00.000Z': true,
				'2000-02-21T00:00:00.000Z': true,
				'2000-02-22T00:00:00.000Z': true,
				'2000-02-23T00:00:00.000Z': true,
				'2000-02-24T00:00:00.000Z': true,
				'2000-02-25T00:00:00.000Z': true,
				'2000-02-26T00:00:00.000Z': true,
				'2000-02-27T00:00:00.000Z': true,
				'2000-02-28T00:00:00.000Z': true,
				'2000-02-29T00:00:00.000Z': true,
			});
		});
	});

	describe("inputMode === 'to'", () => {
		test('returns empty object with no `hoverDayISO` and `fromDate`', () => {
			expect(getHoverRange('to', undefined, undefined, new Date())).toEqual({});
		});

		test('returns empty object when `fromDate` equals `toDate`', () => {
			expect(
				getHoverRange(
					'to',
					undefined,
					new Date('2000-01-01'),
					new Date('2000-01-01')
				)
			).toEqual({});
		});

		test('returns appropriate object when `fromDate` is before `toDate`', () => {
			expect(
				getHoverRange(
					'to',
					undefined,
					new Date('2000-01-01'),
					new Date('2000-01-03')
				)
			).toEqual({
				[new Date('2000-01-01').toISOString()]: true,
				[new Date('2000-01-02').toISOString()]: true,
			});
		});

		test('returns appropriate object ending with `hoverDayISO` when `hoverDayISO` is after `toDate`', () => {
			expect(
				getHoverRange(
					'to',
					new Date('2000-01-04').toISOString(),
					new Date('2000-01-01'),
					new Date('2000-01-02')
				)
			).toEqual({
				[new Date('2000-01-01').toISOString()]: true,
				[new Date('2000-01-02').toISOString()]: true,
				[new Date('2000-01-03').toISOString()]: true,
			});
		});

		test('returns appropriate, last 60 days object when range is large', () => {
			expect(
				getHoverRange(
					'to',
					undefined,
					new Date('2000-01-01'),
					new Date('2001-01-01')
				)
			).toEqual({
				'2000-11-02T00:00:00.000Z': true,
				'2000-11-03T00:00:00.000Z': true,
				'2000-11-04T00:00:00.000Z': true,
				'2000-11-05T00:00:00.000Z': true,
				'2000-11-06T00:00:00.000Z': true,
				'2000-11-07T00:00:00.000Z': true,
				'2000-11-08T00:00:00.000Z': true,
				'2000-11-09T00:00:00.000Z': true,
				'2000-11-10T00:00:00.000Z': true,
				'2000-11-11T00:00:00.000Z': true,
				'2000-11-12T00:00:00.000Z': true,
				'2000-11-13T00:00:00.000Z': true,
				'2000-11-14T00:00:00.000Z': true,
				'2000-11-15T00:00:00.000Z': true,
				'2000-11-16T00:00:00.000Z': true,
				'2000-11-17T00:00:00.000Z': true,
				'2000-11-18T00:00:00.000Z': true,
				'2000-11-19T00:00:00.000Z': true,
				'2000-11-20T00:00:00.000Z': true,
				'2000-11-21T00:00:00.000Z': true,
				'2000-11-22T00:00:00.000Z': true,
				'2000-11-23T00:00:00.000Z': true,
				'2000-11-24T00:00:00.000Z': true,
				'2000-11-25T00:00:00.000Z': true,
				'2000-11-26T00:00:00.000Z': true,
				'2000-11-27T00:00:00.000Z': true,
				'2000-11-28T00:00:00.000Z': true,
				'2000-11-29T00:00:00.000Z': true,
				'2000-11-30T00:00:00.000Z': true,
				'2000-12-01T00:00:00.000Z': true,
				'2000-12-02T00:00:00.000Z': true,
				'2000-12-03T00:00:00.000Z': true,
				'2000-12-04T00:00:00.000Z': true,
				'2000-12-05T00:00:00.000Z': true,
				'2000-12-06T00:00:00.000Z': true,
				'2000-12-07T00:00:00.000Z': true,
				'2000-12-08T00:00:00.000Z': true,
				'2000-12-09T00:00:00.000Z': true,
				'2000-12-10T00:00:00.000Z': true,
				'2000-12-11T00:00:00.000Z': true,
				'2000-12-12T00:00:00.000Z': true,
				'2000-12-13T00:00:00.000Z': true,
				'2000-12-14T00:00:00.000Z': true,
				'2000-12-15T00:00:00.000Z': true,
				'2000-12-16T00:00:00.000Z': true,
				'2000-12-17T00:00:00.000Z': true,
				'2000-12-18T00:00:00.000Z': true,
				'2000-12-19T00:00:00.000Z': true,
				'2000-12-20T00:00:00.000Z': true,
				'2000-12-21T00:00:00.000Z': true,
				'2000-12-22T00:00:00.000Z': true,
				'2000-12-23T00:00:00.000Z': true,
				'2000-12-24T00:00:00.000Z': true,
				'2000-12-25T00:00:00.000Z': true,
				'2000-12-26T00:00:00.000Z': true,
				'2000-12-27T00:00:00.000Z': true,
				'2000-12-28T00:00:00.000Z': true,
				'2000-12-29T00:00:00.000Z': true,
				'2000-12-30T00:00:00.000Z': true,
				'2000-12-31T00:00:00.000Z': true,
			});
		});
	});
});
