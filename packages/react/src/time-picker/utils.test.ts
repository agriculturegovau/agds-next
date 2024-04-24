import {
	clampNumber,
	filterOptions,
	formatValue,
	generateOptions,
	parseTime,
} from './utils';

describe('filterOptions', () => {
	test('Filters options correctly', () => {
		const options = [
			/* 0 */ { label: '00:00', value: '00:00' },
			/* 1 */ { label: '12:00 am', value: '00:00' },
			/* 2 */ { label: '9:00', value: '09:00' },
			/* 3 */ { label: '9:00 am', value: '09:00' },
			/* 4 */ { label: '09:00 am', value: '09:00' },
			/* 5 */ { label: '12:00', value: '12:00' },
			/* 6 */ { label: '12:00 pm', value: '12:00' },
			/* 7 */ { label: '15:50', value: '15:50' },
			/* 8 */ { label: '3:50 pm', value: '15:50' },
			/* 9 */ { label: '03:50 pm', value: '15:50' },
			/* 10 */ { label: '21:00', value: '21:00' },
			/* 11 */ { label: '9:00 pm', value: '21:00' },
			/* 12 */ { label: '09:00 pm', value: '21:00' },
			/* 13 */ { label: '23:59', value: '23:59' },
			/* 14 */ { label: '11:59 pm', value: '23:59' },
			/* 15 */ { label: '12:43 am', value: '00:43' },
			/* 16 */ { label: '12:43 pm', value: '12:43' },
		];

		expect(filterOptions(options, '12')).toEqual([
			options[0],
			options[1],
			options[5],
			options[6],
			options[15],
			options[16],
		]);
		expect(filterOptions(options, "12 o'clock")).toEqual([
			options[0],
			options[1],
		]);
		expect(filterOptions(options, '12am')).toEqual([options[0], options[1]]);
		expect(filterOptions(options, '12 am')).toEqual([options[0], options[1]]);
		expect(filterOptions(options, '12 pm')).toEqual([options[5], options[6]]);
		expect(filterOptions(options, '1200')).toEqual([options[5], options[6]]);
		expect(filterOptions(options, '12:00')).toEqual([options[5], options[6]]);
		expect(filterOptions(options, '24')).toEqual([
			options[0],
			options[1],
			options[15],
			options[16],
		]);
		expect(filterOptions(options, '2400')).toEqual([options[0], options[1]]);
		expect(filterOptions(options, '24:00')).toEqual([options[0], options[1]]);
		expect(filterOptions(options, '12:43')).toEqual([options[15], options[16]]);

		expect(filterOptions(options, '5')).toEqual([
			options[7],
			options[8],
			options[9],
			options[13],
			options[14],
		]);

		expect(filterOptions(options, '9')).toEqual([
			options[2],
			options[3],
			options[4],
			options[11],
			options[12],
			options[13],
			options[14],
		]);
		expect(filterOptions(options, "9 o'clock")).toEqual([
			options[2],
			options[3],
			options[4],
		]);
		expect(filterOptions(options, '9am')).toEqual([
			options[2],
			options[3],
			options[4],
		]);
		expect(filterOptions(options, '9 am')).toEqual([
			options[2],
			options[3],
			options[4],
		]);
		expect(filterOptions(options, '9 pm')).toEqual([
			options[10],
			options[11],
			options[12],
		]);
		expect(filterOptions(options, '900')).toEqual([
			options[2],
			options[3],
			options[4],
		]);
		expect(filterOptions(options, '9:00')).toEqual([
			options[2],
			options[3],
			options[4],
		]);

		expect(filterOptions(options, 'am')).toEqual([
			options[1],
			options[3],
			options[4],
			options[15],
		]);
		expect(filterOptions(options, 'pm')).toEqual([
			options[6],
			options[8],
			options[9],
			options[11],
			options[12],
			options[14],
			options[16],
		]);

		expect(filterOptions(options, '00')).toEqual([
			options[0],
			options[1],
			options[2],
			options[3],
			options[4],
			options[5],
			options[6],
			options[10],
			options[11],
			options[12],
			options[15],
			options[16],
		]);

		expect(filterOptions(options, '25')).toEqual([]);
		expect(filterOptions(options, '99')).toEqual([]);
		expect(filterOptions(options, 'z')).toEqual([]);

		expect(filterOptions(options, '')).toEqual(options);
	});

	test('Filters out options from a different array but with the same value', () => {
		expect(
			filterOptions(
				[
					{ label: '12:00 am', value: '00:00' },
					{ label: '9:00 am', value: '09:00' },
					{ label: '3:50 pm', value: '15:50' },
				],
				undefined,
				// Note: This array is different from the first parameter of `filterOptions`
				[{ label: '9:00 am', value: '09:00' }]
			)
		).toEqual([
			{ label: '12:00 am', value: '00:00' },
			{ label: '3:50 pm', value: '15:50' },
		]);
	});
});

describe('generateOptions', () => {
	test('Valid options', () => {
		expect(
			generateOptions({
				interval: 60,
				min: '09:00',
				max: '14:00',
				timeFormat: 'h:mm aaa',
			})
		).toEqual([
			{ label: '9:00 am', value: '09:00' },
			{ label: '10:00 am', value: '10:00' },
			{ label: '11:00 am', value: '11:00' },
			{ label: '12:00 pm', value: '12:00' },
			{ label: '1:00 pm', value: '13:00' },
			{ label: '2:00 pm', value: '14:00' },
		]);

		expect(
			generateOptions({
				interval: 30,
				min: '00:00',
				max: '02:30',
				timeFormat: 'h:mm aaa',
			})
		).toEqual([
			{ label: '12:00 am', value: '00:00' },
			{ label: '12:30 am', value: '00:30' },
			{ label: '1:00 am', value: '01:00' },
			{ label: '1:30 am', value: '01:30' },
			{ label: '2:00 am', value: '02:00' },
			{ label: '2:30 am', value: '02:30' },
		]);

		expect(
			generateOptions({
				interval: 15,
				min: '23:00',
				max: '24:00',
				timeFormat: 'h:mm aaa',
			})
		).toEqual([
			{ label: '11:00 pm', value: '23:00' },
			{ label: '11:15 pm', value: '23:15' },
			{ label: '11:30 pm', value: '23:30' },
			{ label: '11:45 pm', value: '23:45' },
		]);

		expect(
			generateOptions({
				interval: 7,
				min: '23:30',
				max: '24:00',
				timeFormat: 'h:mm aaa',
			})
		).toEqual([
			{ label: '11:30 pm', value: '23:30' },
			{ label: '11:37 pm', value: '23:37' },
			{ label: '11:44 pm', value: '23:44' },
			{ label: '11:51 pm', value: '23:51' },
			{ label: '11:58 pm', value: '23:58' },
		]);

		expect(
			generateOptions({
				interval: 180,
				min: '12:00',
				max: '20:00',
				timeFormat: 'h:mm aaa',
			})
		).toEqual([
			{ label: '12:00 pm', value: '12:00' },
			{ label: '3:00 pm', value: '15:00' },
			{ label: '6:00 pm', value: '18:00' },
		]);
	});

	test('Time formats', () => {
		expect(
			generateOptions({
				interval: 180,
				min: '00:00',
				max: '24:00',
				timeFormat: 'h:mm aaa',
			})
		).toEqual([
			{ label: '12:00 am', value: '00:00' },
			{ label: '3:00 am', value: '03:00' },
			{ label: '6:00 am', value: '06:00' },
			{ label: '9:00 am', value: '09:00' },
			{ label: '12:00 pm', value: '12:00' },
			{ label: '3:00 pm', value: '15:00' },
			{ label: '6:00 pm', value: '18:00' },
			{ label: '9:00 pm', value: '21:00' },
		]);

		expect(
			generateOptions({
				interval: 180,
				min: '00:00',
				max: '24:00',
				timeFormat: 'hh:mm aaa',
			})
		).toEqual([
			{ label: '12:00 am', value: '00:00' },
			{ label: '03:00 am', value: '03:00' },
			{ label: '06:00 am', value: '06:00' },
			{ label: '09:00 am', value: '09:00' },
			{ label: '12:00 pm', value: '12:00' },
			{ label: '03:00 pm', value: '15:00' },
			{ label: '06:00 pm', value: '18:00' },
			{ label: '09:00 pm', value: '21:00' },
		]);

		expect(
			generateOptions({
				interval: 180,
				min: '00:00',
				max: '24:00',
				timeFormat: 'HH:mm',
			})
		).toEqual([
			{ label: '00:00', value: '00:00' },
			{ label: '03:00', value: '03:00' },
			{ label: '06:00', value: '06:00' },
			{ label: '09:00', value: '09:00' },
			{ label: '12:00', value: '12:00' },
			{ label: '15:00', value: '15:00' },
			{ label: '18:00', value: '18:00' },
			{ label: '21:00', value: '21:00' },
		]);
	});

	test('Clamping intervals', () => {
		expect(
			generateOptions({
				interval: -1,
				min: '23:00',
				max: '23:04',
				timeFormat: 'h:mm aaa',
			})
		).toEqual([
			{ label: '11:00 pm', value: '23:00' },
			{ label: '11:01 pm', value: '23:01' },
			{ label: '11:02 pm', value: '23:02' },
			{ label: '11:03 pm', value: '23:03' },
			{ label: '11:04 pm', value: '23:04' },
		]);

		expect(
			generateOptions({
				interval: 200,
				min: '12:00',
				max: '20:00',
				timeFormat: 'h:mm aaa',
			})
		).toEqual([
			{ label: '12:00 pm', value: '12:00' },
			{ label: '3:00 pm', value: '15:00' },
			{ label: '6:00 pm', value: '18:00' },
		]);
	});

	test('Clamping time', () => {
		expect(
			generateOptions({
				interval: 30,
				min: '-1:00',
				max: '01:00',
				timeFormat: 'h:mm aaa',
			})
		).toEqual([
			{ label: '12:00 am', value: '00:00' },
			{ label: '12:30 am', value: '00:30' },
			{ label: '1:00 am', value: '01:00' },
		]);

		expect(
			generateOptions({
				interval: 30,
				min: '00:-1',
				max: '01:00',
				timeFormat: 'h:mm aaa',
			})
		).toEqual([
			{ label: '12:00 am', value: '00:00' },
			{ label: '12:30 am', value: '00:30' },
			{ label: '1:00 am', value: '01:00' },
		]);

		expect(
			generateOptions({
				interval: 30,
				min: '00:80',
				max: '02:00',
				timeFormat: 'h:mm aaa',
			})
		).toEqual([
			{ label: '12:59 am', value: '00:59' },
			{ label: '1:29 am', value: '01:29' },
			{ label: '1:59 am', value: '01:59' },
		]);

		expect(
			generateOptions({
				interval: 30,
				min: '23:00',
				max: '25:00',
				timeFormat: 'h:mm aaa',
			})
		).toEqual([
			{ label: '11:00 pm', value: '23:00' },
			{ label: '11:30 pm', value: '23:30' },
		]);

		expect(
			generateOptions({
				interval: 30,
				min: '23:00',
				max: '24:59',
				timeFormat: 'h:mm aaa',
			})
		).toEqual([
			{ label: '11:00 pm', value: '23:00' },
			{ label: '11:30 pm', value: '23:30' },
		]);
	});

	test('Swaps min & max if max < min', () => {
		expect(
			generateOptions({
				interval: 60,
				min: '23:00',
				max: '20:00',
				timeFormat: 'h:mm aaa',
			})
		).toEqual([
			{ label: '8:00 pm', value: '20:00' },
			{ label: '9:00 pm', value: '21:00' },
			{ label: '10:00 pm', value: '22:00' },
			{ label: '11:00 pm', value: '23:00' },
		]);

		expect(
			generateOptions({
				interval: 1,
				min: '23:04',
				max: '23:00',
				timeFormat: 'h:mm aaa',
			})
		).toEqual([
			{ label: '11:00 pm', value: '23:00' },
			{ label: '11:01 pm', value: '23:01' },
			{ label: '11:02 pm', value: '23:02' },
			{ label: '11:03 pm', value: '23:03' },
			{ label: '11:04 pm', value: '23:04' },
		]);
	});

	test('Handles invalid options', () => {
		expect(
			generateOptions({
				// eslint-disable-next-line @typescript-eslint/ban-ts-comment
				// @ts-ignore
				interval: 'a',
				min: '09:00',
				max: '12:00',
				timeFormat: 'h:mm aaa',
			})
		).toEqual([
			{ label: '9:00 am', value: '09:00' },
			{ label: '10:00 am', value: '10:00' },
			{ label: '11:00 am', value: '11:00' },
			{ label: '12:00 pm', value: '12:00' },
		]);

		expect(
			generateOptions({
				// eslint-disable-next-line @typescript-eslint/ban-ts-comment
				// @ts-ignore
				interval: '30',
				min: '09:00',
				max: '11:00',
				timeFormat: 'h:mm aaa',
			})
		).toEqual([
			{ label: '9:00 am', value: '09:00' },
			{ label: '9:30 am', value: '09:30' },
			{ label: '10:00 am', value: '10:00' },
			{ label: '10:30 am', value: '10:30' },
			{ label: '11:00 am', value: '11:00' },
		]);

		expect(
			generateOptions({
				interval: 60,
				min: '09:a',
				max: '12:00',
				timeFormat: 'h:mm aaa',
			})
		).toEqual([
			{ label: '9:00 am', value: '09:00' },
			{ label: '10:00 am', value: '10:00' },
			{ label: '11:00 am', value: '11:00' },
			{ label: '12:00 pm', value: '12:00' },
		]);

		expect(
			generateOptions({
				interval: 60,
				min: 'a:30',
				max: '02:00',
				timeFormat: 'h:mm aaa',
			})
		).toEqual([
			{ label: '12:30 am', value: '00:30' },
			{ label: '1:30 am', value: '01:30' },
		]);

		expect(
			generateOptions({
				interval: 60,
				min: '09:00',
				max: '12:a',
				timeFormat: 'h:mm aaa',
			})
		).toEqual([
			{ label: '9:00 am', value: '09:00' },
			{ label: '10:00 am', value: '10:00' },
			{ label: '11:00 am', value: '11:00' },
			{ label: '12:00 pm', value: '12:00' },
		]);

		expect(
			generateOptions({
				interval: 60,
				min: 'a',
				max: '02',
				timeFormat: 'h:mm aaa',
			})
		).toEqual([
			{ label: '12:00 am', value: '00:00' },
			{ label: '1:00 am', value: '01:00' },
			{ label: '2:00 am', value: '02:00' },
		]);

		expect(
			generateOptions({
				interval: 60,
				min: 'a',
				max: 'b',
				timeFormat: 'h:mm aaa',
			})
		).toEqual([{ label: '12:00 am', value: '00:00' }]);

		expect(
			generateOptions({
				interval: 15,
				min: '0:30',
				max: 'a:00',
				timeFormat: 'h:mm aaa',
			})
		).toEqual([
			{ label: '12:00 am', value: '00:00' },
			{ label: '12:15 am', value: '00:15' },
			{ label: '12:30 am', value: '00:30' },
		]);

		expect(
			generateOptions({
				interval: 15,
				min: '00:00',
				max: '00:00',
				timeFormat: 'h:mm aaa',
			})
		).toEqual([{ label: '12:00 am', value: '00:00' }]);

		expect(
			generateOptions({
				interval: 15,
				min: '24:00',
				max: '24:00',
				timeFormat: 'h:mm aaa',
			})
		).toEqual([]);
	});
});

describe('clampNumber', () => {
	test('Returns values in range intact', () => {
		expect(clampNumber(0, 0, 0)).toEqual(0);
		expect(clampNumber(0, 0, 1)).toEqual(0);
		expect(clampNumber(1, 0, 1)).toEqual(1);
		expect(clampNumber(1, 1, 1)).toEqual(1);
		expect(clampNumber(1, 0, 2)).toEqual(1);
		expect(clampNumber(2, 0, 2)).toEqual(2);
	});

	test('Returns minimum value where appropriate', () => {
		expect(clampNumber(-1, 0, 1)).toEqual(0);
		expect(clampNumber(-1, 1, 1)).toEqual(1);
		expect(clampNumber(0, 1, 1)).toEqual(1);
	});

	test('Returns maximum value where appropriate', () => {
		expect(clampNumber(2, 0, 0)).toEqual(0);
		expect(clampNumber(2, 0, 1)).toEqual(1);
		expect(clampNumber(2, 1, 1)).toEqual(1);
	});

	test('Returns 0 for invalid values', () => {
		/* eslint-disable @typescript-eslint/ban-ts-comment */
		// @ts-ignore
		expect(clampNumber('a', 0, 0)).toEqual(0);
		// @ts-ignore
		expect(clampNumber(2, 'a', 1)).toEqual(0);
		// @ts-ignore
		expect(clampNumber(2, 1, 'a')).toEqual(0);
		/* eslint-enable @typescript-eslint/ban-ts-comment */
	});
});

describe('parseTime', () => {
	test('Valid times', () => {
		expect(parseTime('0:0')).toEqual([0, 0]);
		expect(parseTime('00:00')).toEqual([0, 0]);
		expect(parseTime('2:5')).toEqual([2, 5]);
		expect(parseTime('12:00')).toEqual([12, 0]);
		expect(parseTime('12:59')).toEqual([12, 59]);
		expect(parseTime('19:25')).toEqual([19, 25]);
		expect(parseTime('23:59')).toEqual([23, 59]);
		expect(parseTime('24:30')).toEqual([24, 30]);
	});

	test('Invalid times are clamped', () => {
		expect(parseTime('-1:60')).toEqual([0, 59]);
		expect(parseTime('00:60')).toEqual([0, 59]);
		expect(parseTime('12:80')).toEqual([12, 59]);
		expect(parseTime('25:30')).toEqual([24, 30]);
	});

	test('Returns 0 for invalid strings', () => {
		expect(parseTime('00')).toEqual([0, 0]);
		expect(parseTime('a')).toEqual([0, 0]);
		expect(parseTime('a:b')).toEqual([0, 0]);
		expect(parseTime('a:0')).toEqual([0, 0]);
		expect(parseTime('a:1')).toEqual([0, 1]);
		expect(parseTime('1:b')).toEqual([1, 0]);
	});
});

describe('formatValue', () => {
	test('Digits are padded where necessary', () => {
		expect(formatValue(0, 0)).toEqual('00:00');
		expect(formatValue(1, 30)).toEqual('01:30');
		expect(formatValue(12, 1)).toEqual('12:01');
		expect(formatValue(12, 30)).toEqual('12:30');
	});
});
