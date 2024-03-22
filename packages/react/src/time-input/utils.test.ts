import { isValidTime, parseTime } from './utils';

describe('isValidTime', () => {
	test('Valid values', () => {
		expect(isValidTime('0')).toBe(true);
		expect(isValidTime('1')).toBe(true);
		expect(isValidTime('11')).toBe(true);
		expect(isValidTime('111')).toBe(true);
		expect(isValidTime('1111')).toBe(true);
		expect(isValidTime('11111')).toBe(true);
		expect(isValidTime('111111')).toBe(true);
		expect(isValidTime('21')).toBe(true);
		expect(isValidTime('2100')).toBe(true);
		expect(isValidTime('21:00')).toBe(true);
		expect(isValidTime('24')).toBe(true);
		expect(isValidTime('9')).toBe(true);
		expect(isValidTime('9:00')).toBe(true);
		expect(isValidTime('9am')).toBe(true);
		expect(isValidTime('9pm')).toBe(true);
		expect(isValidTime('9 am')).toBe(true);
		expect(isValidTime('9 pm')).toBe(true);
		expect(isValidTime("9 o'clock")).toBe(true);
	});

	test('Invalid values', () => {
		expect(isValidTime('666')).toBe(false);
		expect(isValidTime('6666')).toBe(false);
		expect(isValidTime('66666')).toBe(false);
		expect(isValidTime('666666')).toBe(false);
		expect(isValidTime('25')).toBe(false);
		expect(isValidTime('2500')).toBe(false);
		expect(isValidTime('25:00')).toBe(false);
		expect(isValidTime('9:66')).toBe(false);
		expect(isValidTime('pm')).toBe(false);
		expect(isValidTime(`am`)).toBe(false);
	});
});

describe('parseTime', () => {
	test('Single or double-digits less than 12 return time in am', () => {
		for (let i = 1; i < 12; i += 1) {
			expect(parseTime(`${i}`, 'h:mm aaa')).toEqual(`${i}:00 am`);
			expect(parseTime(`${i}`, 'hh:mm aaa')).toEqual(
				`${i}:00 am`.padStart(8, '0')
			);

			expect(parseTime(`${i}`, 'HH:mm')).toEqual(`${i}:00`.padStart(5, '0'));
		}
	});

	test('0 returns 12:00 am', () => {
		expect(parseTime('0', 'h:mm aaa')).toEqual('12:00 am');
		expect(parseTime('0', 'hh:mm aaa')).toEqual('12:00 am');
		expect(parseTime('0', 'HH:mm')).toEqual('00:00');
	});

	test('Single or double-digits greater than 12 return time in pm', () => {
		for (let i = 13; i < 24; i += 1) {
			expect(parseTime(`${i}`, 'h:mm aaa')).toEqual(`${i - 12}:00 pm`);
			expect(parseTime(`${i}`, 'hh:mm aaa')).toEqual(
				`${i - 12}:00 pm`.padStart(8, '0')
			);

			expect(parseTime(`${i}`, 'HH:mm')).toEqual(`${i}:00`.padStart(5, '0'));
		}
	});

	test('12 returns 12:00 pm', () => {
		expect(parseTime('12', 'h:mm aaa')).toEqual('12:00 pm');
		expect(parseTime('12', 'hh:mm aaa')).toEqual('12:00 pm');
		expect(parseTime('12', 'HH:mm')).toEqual('12:00');
	});

	test('24 returns 12:00 am', () => {
		expect(parseTime('24', 'h:mm aaa')).toEqual('12:00 am');
		expect(parseTime('24', 'hh:mm aaa')).toEqual('12:00 am');
		expect(parseTime('24', 'HH:mm')).toEqual('00:00');
	});

	test('3-digit numbers provide minutes', () => {
		expect(parseTime('115', 'h:mm aaa')).toEqual('1:15 am');
		expect(parseTime('230', 'h:mm aaa')).toEqual('2:30 am');
		expect(parseTime('345', 'h:mm aaa')).toEqual('3:45 am');
	});

	test('Increments of 100 up to 2400 provide the time on the hour', () => {
		for (let i = 1; i < 12; i += 1) {
			expect(parseTime(`${i * 100}`, 'h:mm aaa')).toEqual(`${i}:00 am`);
		}
		expect(parseTime('1200', 'h:mm aaa')).toEqual('12:00 pm');
		for (let i = 13; i < 24; i += 1) {
			expect(parseTime(`${i * 100}`, 'h:mm aaa')).toEqual(`${i - 12}:00 pm`);
		}
		expect(parseTime('2400', 'h:mm aaa')).toEqual('12:00 am');
	});

	test('4-digit numbers', () => {
		expect(parseTime('0115', 'h:mm aaa')).toEqual('1:15 am');
		expect(parseTime('0230', 'h:mm aaa')).toEqual('2:30 am');
		expect(parseTime('0345', 'h:mm aaa')).toEqual('3:45 am');
		expect(parseTime('1315', 'h:mm aaa')).toEqual('1:15 pm');
		expect(parseTime('1430', 'h:mm aaa')).toEqual('2:30 pm');
		expect(parseTime('1545', 'h:mm aaa')).toEqual('3:45 pm');
	});

	test('5-digit numbers', () => {
		expect(parseTime('011500', 'h:mm aaa')).toEqual('1:15 am');
		expect(parseTime('023015', 'h:mm aaa')).toEqual('2:30 am');
		expect(parseTime('034530', 'h:mm aaa')).toEqual('3:45 am');
		expect(parseTime('131500', 'h:mm aaa')).toEqual('1:15 pm');
		expect(parseTime('143015', 'h:mm aaa')).toEqual('2:30 pm');
		expect(parseTime('154530', 'h:mm aaa')).toEqual('3:45 pm');
	});

	test('3am returns 3:00 am', () => {
		expect(parseTime('3am', 'h:mm aaa')).toEqual('3:00 am');
	});

	test('3pm returns 3:00 pm', () => {
		expect(parseTime('3pm', 'h:mm aaa')).toEqual('3:00 pm');
	});

	test('12am returns 12:00 am', () => {
		expect(parseTime('12am', 'h:mm aaa')).toEqual('12:00 am');
	});

	test('12pm returns 12:00 pm', () => {
		expect(parseTime('12pm', 'h:mm aaa')).toEqual('12:00 pm');
	});

	test('Colon-separators work', () => {
		expect(parseTime('3:00', 'h:mm aaa')).toEqual('3:00 am');
		expect(parseTime('15:00', 'h:mm aaa')).toEqual('3:00 pm');
		expect(parseTime('3:00:00', 'h:mm aaa')).toEqual('3:00 am');
		expect(parseTime('15:00:00', 'h:mm aaa')).toEqual('3:00 pm');
	});

	test('Colon-separators work with am and pm too, with or without spaces', () => {
		expect(parseTime('3:00am', 'h:mm aaa')).toEqual('3:00 am');
		expect(parseTime('3:00pm', 'h:mm aaa')).toEqual('3:00 pm');
		expect(parseTime('3 : 00 am', 'h:mm aaa')).toEqual('3:00 am');
		expect(parseTime('3 : 00 pm', 'h:mm aaa')).toEqual('3:00 pm');
	});

	test('You can type digit o’clock and get a time value', () => {
		expect(parseTime("3 o'clock", 'h:mm aaa')).toEqual('3:00 am');
	});
});
