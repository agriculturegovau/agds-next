import { isValidTime, formatTime } from './utils';

describe('isValidTime', () => {
	test('Valid values', () => {
		expect(isValidTime('0')).toEqual(true);
		expect(isValidTime('1')).toEqual(true);
		expect(isValidTime('11')).toEqual(true);
		expect(isValidTime('111')).toEqual(true);
		expect(isValidTime('1111')).toEqual(true);
		expect(isValidTime('11111')).toEqual(true);
		expect(isValidTime('111111')).toEqual(true);
		expect(isValidTime('21')).toEqual(true);
		expect(isValidTime('2112')).toEqual(true);
		expect(isValidTime('21:21')).toEqual(true);
		expect(isValidTime('21:12:21')).toEqual(true);
		expect(isValidTime('21:12:21.12')).toEqual(true);
		expect(isValidTime('T21:12:21.12Z')).toEqual(true);
		expect(isValidTime('24')).toEqual(true);
		expect(isValidTime('9')).toEqual(true);
		expect(isValidTime('9:00')).toEqual(true);
		expect(isValidTime('9am')).toEqual(true);
		expect(isValidTime('9pm')).toEqual(true);
		expect(isValidTime('9p')).toEqual(true);
		expect(isValidTime('9 am')).toEqual(true);
		expect(isValidTime('9 pm')).toEqual(true);
		expect(isValidTime('9 p')).toEqual(true);
		expect(isValidTime("9 o'clock")).toEqual(true);
	});

	test('Invalid values', () => {
		expect(isValidTime('')).toEqual(false);
		expect(isValidTime('666')).toEqual(false);
		expect(isValidTime('6666')).toEqual(false);
		expect(isValidTime('66666')).toEqual(false);
		expect(isValidTime('666666')).toEqual(false);
		expect(isValidTime('25')).toEqual(false);
		expect(isValidTime('2500')).toEqual(false);
		expect(isValidTime('25:00')).toEqual(false);
		expect(isValidTime('25:00:00')).toEqual(false);
		expect(isValidTime('9:66')).toEqual(false);
		expect(isValidTime('pm')).toEqual(false);
		expect(isValidTime('am')).toEqual(false);
	});
});

describe('formatTime', () => {
	test('Single or double-digits less than 12 return time in am', () => {
		for (let i = 1; i < 12; i += 1) {
			expect(formatTime(`${i}`, 'h:mm aaa')).toEqual(`${i}:00 am`);
			expect(formatTime(`${i}`, 'hh:mm aaa')).toEqual(
				`${i}:00 am`.padStart(8, '0')
			);
			expect(formatTime(`${i}`, 'HH:mm')).toEqual(`${i}:00`.padStart(5, '0'));
		}
	});

	test('0 returns 12:00 am', () => {
		expect(formatTime('0', 'h:mm aaa')).toEqual('12:00 am');
		expect(formatTime('0', 'hh:mm aaa')).toEqual('12:00 am');
		expect(formatTime('0', 'HH:mm')).toEqual('00:00');
	});

	test('Single or double-digits greater than 12 return time in pm', () => {
		for (let i = 13; i < 24; i += 1) {
			expect(formatTime(`${i}`, 'h:mm aaa')).toEqual(`${i - 12}:00 pm`);
			expect(formatTime(`${i}`, 'hh:mm aaa')).toEqual(
				`${i - 12}:00 pm`.padStart(8, '0')
			);

			expect(formatTime(`${i}`, 'HH:mm')).toEqual(`${i}:00`.padStart(5, '0'));
		}
	});

	test('12 returns 12:00 pm', () => {
		expect(formatTime('12', 'h:mm aaa')).toEqual('12:00 pm');
		expect(formatTime('12', 'hh:mm aaa')).toEqual('12:00 pm');
		expect(formatTime('12', 'HH:mm')).toEqual('12:00');
	});

	test('24 returns 12:00 am', () => {
		expect(formatTime('24', 'h:mm aaa')).toEqual('12:00 am');
		expect(formatTime('24', 'hh:mm aaa')).toEqual('12:00 am');
		expect(formatTime('24', 'HH:mm')).toEqual('00:00');
	});

	test('3-digit numbers provide minutes', () => {
		expect(formatTime('115', 'h:mm aaa')).toEqual('1:15 am');
		expect(formatTime('230', 'h:mm aaa')).toEqual('2:30 am');
		expect(formatTime('345', 'h:mm aaa')).toEqual('3:45 am');
	});

	test('Increments of 100 up to 2400 provide the time on the hour', () => {
		for (let i = 1; i < 12; i += 1) {
			expect(formatTime(`${i * 100}`, 'h:mm aaa')).toEqual(`${i}:00 am`);
		}
		expect(formatTime('1200', 'h:mm aaa')).toEqual('12:00 pm');
		for (let i = 13; i < 24; i += 1) {
			expect(formatTime(`${i * 100}`, 'h:mm aaa')).toEqual(`${i - 12}:00 pm`);
		}
		expect(formatTime('2400', 'h:mm aaa')).toEqual('12:00 am');
	});

	test('4-digit numbers', () => {
		expect(formatTime('0000', 'h:mm aaa')).toEqual('12:00 am');
		expect(formatTime('0115', 'h:mm aaa')).toEqual('1:15 am');
		expect(formatTime('0230', 'h:mm aaa')).toEqual('2:30 am');
		expect(formatTime('0345', 'h:mm aaa')).toEqual('3:45 am');
		expect(formatTime('1315', 'h:mm aaa')).toEqual('1:15 pm');
		expect(formatTime('1430', 'h:mm aaa')).toEqual('2:30 pm');
		expect(formatTime('1545', 'h:mm aaa')).toEqual('3:45 pm');
	});

	test('6-digit numbers (with seconds)', () => {
		expect(formatTime('011500', 'h:mm aaa')).toEqual('1:15 am');
		expect(formatTime('023015', 'h:mm aaa')).toEqual('2:30 am');
		expect(formatTime('034530', 'h:mm aaa')).toEqual('3:45 am');
		expect(formatTime('131500', 'h:mm aaa')).toEqual('1:15 pm');
		expect(formatTime('143015', 'h:mm aaa')).toEqual('2:30 pm');
		expect(formatTime('154530', 'h:mm aaa')).toEqual('3:45 pm');
	});

	test('9-digit numbers (with milliseconds)', () => {
		expect(formatTime('011500999', 'h:mm aaa')).toEqual('1:15 am');
		expect(formatTime('023015999', 'h:mm aaa')).toEqual('2:30 am');
		expect(formatTime('034530999', 'h:mm aaa')).toEqual('3:45 am');
		expect(formatTime('131500999', 'h:mm aaa')).toEqual('1:15 pm');
		expect(formatTime('143015999', 'h:mm aaa')).toEqual('2:30 pm');
		expect(formatTime('154530999', 'h:mm aaa')).toEqual('3:45 pm');
	});

	test('3am returns 3:00 am', () => {
		expect(formatTime('3am', 'h:mm aaa')).toEqual('3:00 am');
	});

	test('3pm returns 3:00 pm', () => {
		expect(formatTime('3pm', 'h:mm aaa')).toEqual('3:00 pm');
		expect(formatTime('3p', 'h:mm aaa')).toEqual('3:00 pm');
	});

	test('12am returns 12:00 am', () => {
		expect(formatTime('12am', 'h:mm aaa')).toEqual('12:00 am');
	});

	test('12pm returns 12:00 pm', () => {
		expect(formatTime('12pm', 'h:mm aaa')).toEqual('12:00 pm');
	});

	test('Colon-separators work', () => {
		expect(formatTime('3:00', 'h:mm aaa')).toEqual('3:00 am');
		expect(formatTime('15:00', 'h:mm aaa')).toEqual('3:00 pm');
		expect(formatTime('3:00:00', 'h:mm aaa')).toEqual('3:00 am');
		expect(formatTime('15:00:00', 'h:mm aaa')).toEqual('3:00 pm');
	});

	test('Colon-separators work with am and pm too, with or without spaces', () => {
		expect(formatTime('3:00am', 'h:mm aaa')).toEqual('3:00 am');
		expect(formatTime('3:00pm', 'h:mm aaa')).toEqual('3:00 pm');
		expect(formatTime('3 : 00 am', 'h:mm aaa')).toEqual('3:00 am');
		expect(formatTime('3 : 00 pm', 'h:mm aaa')).toEqual('3:00 pm');
		expect(formatTime('3 : 00:30 pm', 'h:mm aaa')).toEqual('3:00 pm');
	});

	test('You can type digit o’clock and get a time value', () => {
		expect(formatTime("3 o'clock", 'h:mm aaa')).toEqual('3:00 am');
	});

	test('ISO strings', () => {
		expect(formatTime('21:12:21.122', 'h:mm aaa')).toEqual('9:12 pm');
		expect(formatTime('T21:12:21.122Z', 'h:mm aaa')).toEqual('9:12 pm');
	});

	test('Invalid values return themselves', () => {
		expect(formatTime('', 'h:mm aaa')).toEqual('');
		expect(formatTime('666', 'h:mm aaa')).toEqual('666');
		expect(formatTime('6666', 'h:mm aaa')).toEqual('6666');
		expect(formatTime('66666', 'h:mm aaa')).toEqual('66666');
		expect(formatTime('666666', 'h:mm aaa')).toEqual('666666');
		expect(formatTime('25', 'h:mm aaa')).toEqual('25');
		expect(formatTime('2500', 'h:mm aaa')).toEqual('2500');
		expect(formatTime('25:00', 'h:mm aaa')).toEqual('25:00');
		expect(formatTime('9:66', 'h:mm aaa')).toEqual('9:66');
		expect(formatTime('pm', 'h:mm aaa')).toEqual('pm');
		expect(formatTime('am', 'h:mm aaa')).toEqual('am');
	});
});
